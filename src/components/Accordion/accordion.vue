<template>
  <div class="vueAccordion-container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      autoShrink: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        childCount: 0,
        lastIndex: -1
      }
    },
    created () {
      if (this.autoShrink) {
        this.childCount = this.$children.length
        this.$children.forEach((item, index) => {
          item.index = index
        })
      }
    },
    events: {
      tap: function (index) {
        if (this.autoShrink) {
          if (index !== this.lastIndex && this.lastIndex !== -1) {
            this.$children[this.lastIndex].open = false
          }
          this.lastIndex = index
        }
      }
    }
  }
</script>

<style>
  /*这里设定z-index的功能自己体会*/
  .vueAccordion-container {
    position: relative;
    z-index: 999;
  }
</style>
