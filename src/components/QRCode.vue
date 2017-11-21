<!-- 生成二维码 组件 -->
<template>
  <canvas
    class="qrcode-canvas"
    :class="{show: show}"
    :style="{height: size + 'px', width: size + 'px'}"
    :height="size"
    :width="size"
    ref="qr"
  ></canvas>
</template>

<script>
  import qr from 'qr.js'
  export default {
    name: 'qrcode',
    props: {
      val: {
        type: String,
        required: true
      },
      size: {
        type: Number,
        default: 200
      },
      // 'L', 'M', 'Q', 'H'
      level: String,
      bgColor: {
        type: String,
        default: '#FFFFFF'
      },
      fgColor: {
        type: String,
        default: '#000000'
      },
      show: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      size: function(){
        this.update()
      },
      val: function(){
        this.update()
      },
      level: function(){
        this.update()
      },
      bgColor: function(){
        this.update()
      },
      fgColor: function(){
        this.update()
      }
    },
    mounted () {
      this.update()
      console.log(this.show)
    },
    methods:{
      update () {
        var size = this.size
        var bgColor = this.bgColor
        var fgColor = this.fgColor
        var $qr = this.$refs.qr
        var qrcode = qr(this.val)
        var ctx = $qr.getContext('2d')
        var cells = qrcode.modules
        var tileW = size / cells.length
        var tileH = size / cells.length
        var scale = (window.devicePixelRatio || 1) / getBackingStorePixelRatio(ctx)
        $qr.height = $qr.width = size * scale
        ctx.scale(scale, scale)
        cells.forEach(function (row, rdx) {
          row.forEach(function (cell, cdx) {
            ctx.fillStyle = cell ? fgColor : bgColor
            var w = (Math.ceil((cdx + 1) * tileW) - Math.floor(cdx * tileW))
            var h = (Math.ceil((rdx + 1) * tileH) - Math.floor(rdx * tileH))
            ctx.fillRect(Math.round(cdx * tileW), Math.round(rdx * tileH), w, h)
          })
        })
      }
    }
  }
  function getBackingStorePixelRatio (ctx) {
    return (
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1
    )
  }
</script>

<style lang="less" scoped>
  .qrcode-canvas {
    display: none
  }
  .show {
    display: block;
  }
</style>
