<!-- 扫描二维码 组件 -->
<template>
  <div class="qrcode-reader">
    <!-- 相机 -->
    <video
      ref="video"
      class="qrcode-reader__camera"
      @loadeddata="onStreamLoaded"
    ></video>
    <!-- 画布 -->
    <canvas
      ref="canvas"
      class="qrcode-reader__snapshot"
      :width="streamWidth"
      :height="streamHeight"
    ></canvas>

    <div class="qrcode-reader__overlay">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  // 引入 解码、定位函数
  import { decode, locate } from './scanner.js'

  // 定位区间 帧数
  const LOCATE_INTERVAL = 40 // 1000ms / 40ms = 25fps
  // 解码区间
  const DECODE_INTERVAL = 400
  // 限制
  const CONSTRAINTS = {
    audio: false,
    video: {
      facingMode: 'environment', // back camera
      width: { min: 360, ideal: 1280, max: 1920 },
      height: { min: 240, ideal: 720, max: 1080 },
    },
  }

  export default {
    props: {
      paused: { // 暂停
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        decodeIntervalID: -1,
        locateIntervalID: -1,
        initReject: null,
        initResolve: null,
        stream: null,
        streamWidth: null,
        streamHeight: null,
        content: null,
        location: null,
      }
    },
    computed: {
      /*
       * 如果流分辨率大于可用空间，则将视频缩小。
       * 检测到的QR码位置是基于原始分辨率的。
       * 这种差异在这里得到补偿。
       */
      locationArray () {
        if (this.location === null) {
          return []
        } else {
          const video = this.$refs.video
          const widthRatio = video.offsetWidth / this.streamWidth
          const heightRatio = video.offsetHeight / this.streamHeight
          const locationArray = [
            this.location.bottomLeft,
            this.location.topLeft,
            this.location.topRight,
          ]
          return locationArray.map(({ x, y }) => ({
            x: x * widthRatio,
            y: y * heightRatio,
          }))
        }
      },
    },
    watch: {
      paused (newValue) { // 监听状态
        if (newValue === true) {
          this.stopScanning()
        } else {
          this.startScanning()
        }
      },
      content (newValue) {
        this.$emit('decode', newValue)
      },
      locationArray (newValue) {
        this.$emit('locate', newValue)
      },
    },
    mounted () {
      const initPromise = new Promise(
        (resolve, reject) => {
          this.initResolve = resolve
          this.initReject = reject
        }
      )
      this.$emit('init', initPromise)
      // 检测浏览器支持度
      const canvas = this.$refs.canvas
      if (!(canvas.getContext && canvas.getContext('2d'))) {
        this.initReject(new Error('此浏览器不支持HTML5画布。'))
      } else if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
        this.initReject(new Error('此浏览器不支持WebRTC API'))
      } else {
        this.startCamera()
      }
    },
    beforeDestroy () {
      this.stopCamera()
      this.stopScanning()
    },
    methods: {
      // 异步 启动相机
      async startCamera () {
        try {
          this.stream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS)
          const video = this.$refs.video
          if (video.srcObject !== undefined) {
            video.srcObject = this.stream
          } else if (video.mozSrcObject !== undefined) {
            video.mozSrcObject = this.stream
          } else if (window.URL.createObjectURL) {
            video.src = window.URL.createObjectURL(this.stream)
          } else if (window.webkitURL) {
            video.src = window.webkitURL.createObjectURL(this.stream)
          } else {
            video.src = this.stream
          }
          console.log(video.src);
          video.playsInline = true
        } catch (e) {
          // NotAllowedError, NotSupportedError, NotFoundError
          this.initReject(e)
        }
      },
      // 关闭相机
      stopCamera () {
        if (this.stream !== null) {
          this.stream.getTracks().forEach(
            track => track.stop()
          )
        }
      },
      // 捕获帧数
      captureFrame () {
        const video = this.$refs.video
        const canvas = this.$refs.canvas
        const ctx = canvas.getContext('2d')
        const bounds = [0, 0, this.streamWidth, this.streamHeight]
        ctx.drawImage(video, ...bounds)
        return ctx.getImageData(...bounds)
      },
      // 开始扫描
      startScanning () {
        this.stopScanning()
        this.$refs.video.play()
        this.decodeIntervalID = window.setInterval(() => {
          if (this.$listeners.decode) {
            const imageData = this.captureFrame()
            window.requestAnimationFrame(() => {
              this.content = decode(imageData) || this.content
            })
          }
        }, DECODE_INTERVAL)
        this.locateIntervalID = window.setInterval(() => {
          if (this.$listeners.locate) {
            const imageData = this.captureFrame()
            window.requestAnimationFrame(() => {
              this.location = locate(imageData)
            })
          }
        }, LOCATE_INTERVAL)
      },
      // 停止扫描
      stopScanning () {
        this.$refs.video.pause()
        window.clearInterval(this.decodeIntervalID)
        window.clearInterval(this.locateIntervalID)
        this.decodeIntervalID = -1
        this.locateIntervalID = -1
      },
      // 加载流
      onStreamLoaded (event) { // 第一帧完成加载
        const video = event.target
        this.streamWidth = video.videoWidth
        this.streamHeight = video.videoHeight
        this.initResolve()
        this.startScanning()
      },
    },
  }
</script>

<style lang="less" scoped>
  .qrcode-reader {
    position: relative;
    display: block;
    .qrcode-reader__camera {
      display: block;
      object-fit: contain;
      max-width: 100%;
      max-height: 100%;
    }
    .qrcode-reader__snapshot {
      display: none;
    }
    .qrcode-reader__overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>
