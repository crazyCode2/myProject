<!-- 扫一扫功能 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="扫一扫">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <div class="mainbody">
      <table class="tsel" border="0">
        <tr>
          <td colspan="2" align="center">
            <div class="outdiv">
              <qr-scanner></qr-scanner>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import QrScanner from '../../components/QrScanner2'

  export default {
    name: 'Scanner',
    components: {
      QrScanner
    },
    data(){
      return {
        //
      }
    }
  }
</script>

<style lang="less" scoped>
  body {
    width: 100%;
    text-align: center;
  }

  .main {
    margin: 15px auto;
    backgroud-color: #fff;
    width: 100%
  }

  .mainbody {
    background-color: #fff;
    width: 100%;
    display: inline;
  }

  .tsel {
    padding: 0;
  }

  #qr-canvas {
    width: 800px;
    height: 800px;
  }

  .outdiv {
    width: 320px;
    height: 240px;
    border: solid;
    border-width: 3px 3px 3px 3px;
  }
</style>
