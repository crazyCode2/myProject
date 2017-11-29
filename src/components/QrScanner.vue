<!-- 扫一扫 二维码 -->
<template>
  <div>
    <!-- 录像机 -->
    <video id="qr-vedio" class="v" autoplay=""></video>
    <!-- 画布 -->
    <canvas id="qr-canvas" width="800" height="600" style="width: 800px; height: 600px;display:none;"></canvas>
    <!-- 扫描结果 -->
    <p v-show="result != ''">{{result}}</p>
    <!-- 报错信息 -->
    <p v-show="errorMes != ''">{{errorMes}}</p>
  </div>
</template>

<script>
  export default {
    name: 'QrScanner',
    data() {
      return {
        vedio: '', // 录像机
        canvas: '', // 画布
        context: '', // 指定绘图
        stopScan: null, // 停止扫描
        errorMes: '', // 报错信息
        result: '' // 扫描结果
      }
    },
    mounted() {
      // 定义this指针
      var _that = this;
      window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
      // 1.调用摄像头
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.mediaDevices.getUserMedia;
      // 获取DOM节点
      this.vedio = document.getElementById('qr-vedio');
      this.canvas = document.getElementById('qr-canvas');
      // 指定了二维绘图
      this.context = this.canvas.getContext('2d');

      /**
       * 使用回调方法 触发getUserMedia函数
       * 设置video监听器
       */
      if (navigator.getUserMedia) {
        // 录像资源
        var videoSource = [];
        // 列出摄像头和麦克风
        navigator.mediaDevices.enumerateDevices().then((function (sourceInfos) {
          console.log(sourceInfos);
          var i;
          for (i = 0; i != sourceInfos.length; ++i) {
            var sourceInfo = sourceInfos[i];
            if (sourceInfo.kind === 'videoinput') {
              videoSource.push(sourceInfo.deviceId);
            }
          }

          // 调用摄像头成功
          var successCallback = function (stream) {
            // console.log('测试' + stream);
            _that.vedio.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
            window.localMediaStream = stream;
            _that.vedio.addEventListener("loadstart", function () {
              _that.vedio.play();
            }, false);
            _that.stopScan = setInterval(_that.scan, 500);
          }

          navigator.getUserMedia({
            video: {
              optional: [{ sourceId: videoSource[0] }]
            }
          }, successCallback, function (e) {
            console.log('123456');
            console.log(e);
          });
        }));

      } else {
        this.errorMes = '此浏览器不支持本地网络摄像机流（getUserMedia）。';
      }

      qrcode.callback = function (data) {
        _that.result = data;
        console.log(data)
        if (window.localMediaStream && window.localMediaStream.stop) {
          window.localMediaStream.stop();
        }
        if (_that.stopScan) {
          clearInterval(_that.stopScan);
        }
      };
    },
    methods: {
      scan() {
        if (window.localMediaStream) {
          this.context.drawImage(this.vedio, 0, 0, 100, 100);
        }
        try {
          qrcode.decode();
        } catch (e) {
          console.log(e); // Couldn't find enough finder patterns
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .v {
    width: 320px;
    height: 240px;
  }
</style>
