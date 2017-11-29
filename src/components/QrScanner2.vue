<!-- 扫一扫 测试2 -->
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

    <input type="hidden" value="" id="code" name="code" />
  </div>
</template>

<script>
  export default {
    name: 'QrScanner',
    data() {
      return {
        videoObj: {}, // video对象
        vedio: '', // 录像机
        canvas: '', // 画布
        context: '', // 指定绘图
        stopScan: null, // 停止扫描
        errorMes: '', // 报错信息
        result: '', // 扫描结果
        imgData:'', // base64图片
      }
    },
    mounted() {
      // 1.定义this指针
      let _this = this;
      // 2.调取摄像头
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      console.log(navigator.getUserMedia);
      // 3.返回一个对象，它提供了用于创建和管理对象URLs的静态方法
      window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

      //调取摄像头成功的回调函数
      let gotStream = function(stream) {
        console.log(stream);
        // if (_this.video.mozSrcObject !== undefined) {
        //   _this.video.mozSrcObject = stream;
        // } else {
        //   _this.video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
        // }
         _this.video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
         console.log(_this.video.src);

        _this.video.play();
        //启动摄像头成功之后开始获取二维码
        _this.scanCode();
      }

      //调取摄像头失败的回调函数
      let noStream = function(error) {
        alert('An error occurred: [CODE ' + error.code + ']');
      }

      // 存在Media对象
      if (navigator.getUserMedia) {
        this.videoObj = { video: true };
        // 获取DOM节点
        this.vedio = document.getElementById('qr-vedio');
        this.canvas = document.getElementById('qr-canvas');
        navigator.getUserMedia({
            video: true
        }, gotStream, noStream);
      } else {
        alert('此浏览器不支持本地网络摄像机流(getUserMedia)');
      }


    },
    methods: {
      //抓取video画面放入canvas
      photograph() {
        let _this = this;
        // 指定了二维绘图
        this.context = this.canvas.getContext('2d');
        this.context.drawImage(_this.vedio, 0, 0, 100, 100);

        this.imgData = this.canvas.toDataURL("image/png");
        document.getElementById('code').value = this.imgData;
        alert(this.imgData);
      },
      //将图片处理成黑白的（二维码扫描需要处理黑白色图片，如果仅用于拍照这一步就省略了）
      // imageConvertToGray(ctx) {
      //   var length = this.canvas.width * this.canvas.height;
      //   imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      //   for (var i = 0; i < length * 4; i += 4) {
      //       var myRed = imageData.data[i];
      //       var myGreen = imageData.data[i + 1];
      //       var myBlue = imageData.data[i + 2];
      //       myGray = parseInt((myRed + myGreen + myBlue) / 3);
      //       imageData.data[i] = myGray;
      //       imageData.data[i + 1] = myGray;
      //       imageData.data[i + 2] = myGray;
      //   }
      //   ctx.putImageData(imageData, 0, 0);
      // },
      // 获取二维码
      scanCode() {
        let _this = this;
        //生成图片的base64码
        _this.photograph();

        setTimeout(function () {
          _this.scanCode();
        }, 2000);
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
