<!-- 下拉刷新，上拉加载更多 -->
<template>
  <div class="dropload">
    <div class="refresh-status">{{refreshStatus}}</div>
    <div :class="{'drop-transition': transition}" @touchstart="tStart" @touchmove="tMove" @touchend="tEnd" :style="{'transform': 'translateY(' + offset + 'px)'}">
      <slot></slot>
    </div>
    <div class="more-status" :class="{'no-more': noMore}">{{moreStatus}}</div>
  </div>
</template>

<script>
  const STATUS_TEXT = {
    init: '',
    goDown: '下拉刷新',
    goRefresh: '释放刷新',
    refreshing: '刷新中...',
    goUp: '上拉加载更多',
    getMore: '释放加载',
    getting: '加载中...',
    noMore: '暂无更多数据'
  }
  // 获取当前滚动的位置
  function getScrollPosition (scrollArea, $el) {
    let position = {
      top: false,
      bottom: false
    }
    let scrollTop = null
    const viewPort = document.getElementById('viewPort') || document.body
    if (scrollArea.scrollTop || scrollArea.scrollTop === 0) {
      scrollTop = scrollArea.scrollTop
    } else {
      scrollTop = viewPort.scrollTop || window.pageYOffset
    }
    const scrollContent = $el.children[1]
    const areaHeight = scrollArea.offsetHeight || window.innerHeight || viewPort.clientHeight
    const contentHeight = scrollContent.offsetHeight
    if (scrollTop === 0) {
      position.top = true
    }
    if (contentHeight <= areaHeight + scrollTop) {
      position.bottom = true
    }
    return position
  }
  function getScrollArea (scrollArea, $el) {
    if (!scrollArea) {
      scrollArea = $el.parentNode
      const scrollContent = $el
      const areaHeight = scrollArea.offsetHeight || window.offsetHeight
      const contentHeight = scrollContent.offsetHeight
      if (areaHeight === contentHeight) {
        scrollArea = document.body
      }
    }
    return scrollArea
  }
  function setOverflow (scrollArea, overflow) {
    const viewPort = document.getElementById('viewPort') || document.body
    viewPort.style['overflow-y'] = overflow
    if (scrollArea !== viewPort) {
      scrollArea.style.overflow = overflow
    }
  }
  export default {
    props: [ 'loadDownFn', 'loadUpFn' ],
    data () {
      return {
        refreshStatus: STATUS_TEXT.init,
        moreStatus: STATUS_TEXT.init,
        offsetUp: 0,
        offsetDown: 0,
        startY: 0,
        islockUp: true,
        islockDown: true,
        noMore: false,
        scrollArea: null,
        transition: false
      }
    },
    computed: {
      offset () {
        const offset = this.offsetUp + this.offsetDown
        if (offset < 0) {
          return offset < -100 ? -100 : offset
        } else {
          return offset > 100 ? 100 : offset
        }
      }
    },
    methods: {
      tStart (e) {
        const vm = this
        vm.scrollArea = getScrollArea(vm.scrollArea, vm.$el)
        const position = getScrollPosition(vm.scrollArea, vm.$el)
        if (position.top && vm.loadUpFn) {
          vm.unlock('up')
        } else {
          vm.lock('up')
        }
        if (position.bottom && vm.loadDownFn && !vm.noMore) {
          vm.unlock('down')
        } else {
          vm.lock('down')
        }
        if (!vm.islockUp || !vm.islockDown) {
          const event = e || window.event
          const touch = event.targetTouches[0]
          vm.startY = touch.pageY
          vm.transition = false
          setTimeout(function () {
            vm.tEnd()
          }, 1500)
        }
      },
      tMove (e) {
        const vm = this
        const event = e || window.event
        const touch = event.targetTouches[0]
        const moveDis = touch.pageY - vm.startY
        if (!vm.islockUp && moveDis >= 0) {
          event.preventDefault()
          if (moveDis < 50) {
            vm.refreshStatus = STATUS_TEXT.goDown
          } else {
            vm.refreshStatus = STATUS_TEXT.goRefresh
          }
          vm.offsetUp = moveDis
          setOverflow(vm.scrollArea, 'hidden')
        }
        if (!vm.islockDown && moveDis <= 0) {
          event.preventDefault()
          if (moveDis > -50) {
            vm.moreStatus = STATUS_TEXT.goUp
          } else {
            vm.moreStatus = STATUS_TEXT.getMore
          }
          vm.offsetDown = moveDis
          setOverflow(vm.scrollArea, 'hidden')
        }
      },
      tEnd (e) {
        const vm = this
        vm.transition = true
        if (!vm.islockUp) {
          const moveDis = vm.offsetUp
          if (moveDis < 50) {
            vm.resetUp()
          } else if (moveDis >= 50) {
            vm.refreshStatus = STATUS_TEXT.refreshing
            vm.offsetUp = 50
            vm.loadUpFn()
            vm.noMore = false // 刷新之后可以重新上拉加载更多
          }
        }
        if (!vm.islockDown) {
          const moveDis = vm.offsetDown
          if (moveDis > -50) {
            vm.resetDown()
          } else if (moveDis <= -50) {
            vm.moreStatus = STATUS_TEXT.getting
            vm.offsetDown = -39
            vm.loadDownFn()
          }
        }
        setOverflow(vm.scrollArea, 'auto')
      },
      noMoreData (text) {
        this.noMore = true
        this.offsetDown = 0
        this.moreStatus = text || text === '' ? '' : STATUS_TEXT.noMore
      },
      lock (direction) {
        if (direction === 'up') {
          this.islockUp = true
        } else if (direction === 'down') {
          this.islockDown = true
        }
      },
      unlock (direction) {
        if (direction === 'up') {
          this.islockUp = false
        } else if (direction === 'down') {
          this.islockDown = false
        }
      },
      resetUp () {
        this.refreshStatus = STATUS_TEXT.init
        this.offsetUp = 0
      },
      resetDown () {
        this.moreStatus = STATUS_TEXT.init
        this.offsetDown = 0
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .dropload{
    position: relative;
  }
  .refresh-status{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.1rem 0;
    text-align: center;
  }
  .more-status{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.1rem 0;
    text-align: center;
    &.no-more{
      position: relative;
    }
  }
  .drop-transition{
    transition: 0.3s ease-out;
  }
</style>
