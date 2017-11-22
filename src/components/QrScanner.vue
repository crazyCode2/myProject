<!-- 扫一扫 二维码 -->
<template>
  <div>
    <video id="qr-vedio" class="v" autoplay=""></video>
    <canvas id="qr-canvas" width="800" height="600" style="width: 800px; height: 600px;display:none;"></canvas>
    <p v-show="result != ''">{{result}}</p>
    <p v-show="errorMes != ''">{{errorMes}}</p>
  </div>
</template>

<script>
  export default {
    name: 'QrScanner',
    data() {
      return {
        vedio: '',
        canvas: '',
        context: '',
        stopScan: null,
        errorMes: '',
        result: ''
      }
    },
    mounted() {
      var _that = this;
      window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

      this.vedio = document.getElementById('qr-vedio');
      this.canvas = document.getElementById('qr-canvas');
      this.context = this.canvas.getContext('2d');

      // Call the getUserMedia method with our callback functions
      if (navigator.getUserMedia) {
        var videoSource = [];
        navigator.mediaDevices.enumerateDevices().then((function (sourceInfos) {
          var i;
          for (i = 0; i != sourceInfos.length; ++i) {
            var sourceInfo = sourceInfos[i];
            if (sourceInfo.kind === 'videoinput' && sourceInfo.label.indexOf('back') != -1) {
              videoSource.push(sourceInfo.deviceId);
            }
          }

          var successCallback = function (stream) {
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
            console.log(e);
          });
        }));

      } else {
        this.errorMes = 'Native web camera streaming (getUserMedia) not supported in this browser.';
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
          console.log('decode has error');
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
