<template>
  <div>
    <div :style="headerStyle" @touchend="openItem" @touchmove='move'>
      <slot name="header">
        <div class="vueAccordion-header">
          <div class="vueAccordion-title" v-text="title"></div>
          <svg class="vueAccordion-icon" viewBox="0,0,22,22" v-show="!open&&!iconHide">
            <path d="M 0 11 L 22 11" stroke-width="2" stroke="#5F5F5F"></path>
            <path d="M 11 0 L 11 22" stroke-width="2" stroke="#5F5F5F"></path>
          </svg>
          <svg class="vueAccordion-icon" viewBox="0,0,22,22" v-show="open&&!iconHide">
            <path d="M 0 11 L 22 11" stroke-width="2" stroke="#5F5F5F"></path>
          </svg>
        </div>
      </slot>
    </div>
    <div class="vueAccordion-content" :style="contentStyle" v-el:content>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String
      },
      open: {
        type: Boolean,
        default: false
      },
      index: {
        type: Number
      },
      iconHide: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        contentHeight: 0,
        onmove: false
      }
    },
    created () {
      this.contentHeight = this.$els.content.children[0].clientHeight
    },
    methods: {
      openItem: function () {
        if (!this.onmove) {
          this.open = !this.open
          this.$dispatch('tap', this.index)
        }
        this.onmove = false
      },
      move () {
        this.onmove = true
      }
    },
    computed: {
      contentStyle: function () {
        if (this.open) {
          return {
            height: this.contentHeight + 'px'
          }
        } else {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss">
  .vueAccordion-header {
    position: relative;
    width: 100%;
    background: white;
    height: 3em;
    letter-spacing: 1px;
    z-index: 2;
    &:before {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      position: absolute;
      top: 0px;
      background-color: #d9d9d9;
    }
    &:after {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      position: absolute;
      bottom: -1px;
      background-color: #d9d9d9;
    }
  }
  .vueAccordion-title {
    display: inline-block;
    margin-left: 10px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  .vueAccordion-icon {
    position: absolute;
    height: 15px;
    width: 15px;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
  .vueAccordion-content {
    width: 100%;
    overflow: hidden;
    height: 0;
    transition: height .3s ease-out;
  }
</style>
