<!-- api 请求测试 -->
<template>
  <div>
    <!-- 标题栏 -->
    <mt-header title="api请求测试">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <br />
    <mt-button type="default" size="large" @click="getData">GET请求</mt-button>
    <br />
    <mt-button type="primary" size="large" @click="postData">POST请求</mt-button>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';

  export default {
    name: 'Api',
    data(){
      return {
        list: []
      }
    },
    mounted(){
      // this.fetchData();
    },
    methods: {
      fetchData(){
        //
      },
      // GET 方法请求
      getData(){
        // let params = {
        //   newsId: 65523,
        //   ts: 20161215074823,
        //   plat: 2,
        //   theme: 0,
        //   version: 7.6
        // };
        // // 发起请求
        // this.$api.get('GetStructNews', params, res => {
        //   console.log(res);
        // })

        let params = {
          act: 'index'
        };
        // 发起请求
        this.$api.get('/siteH5/index.json', params, res => {
          if(res.data){
            Toast({
              message: res.data,
              position: 'middle',
              duration: 5000
            });
          }
        })
      },
      // POST 方法请求
      postData(){
        // let params = {
        //   newsId: 65523,
        //   ts: 20161215074823,
        //   plat: 2,
        //   theme: 0,
        //   version: 7.6
        // };
        // // 发起请求
        // this.$api.post('GetStructNews', params, res => {
        //   console.log(res);
        // })

        let params = {
          act: 'index'
        };
        // 发起请求
        this.$api.post('/siteH5/index.json', params, res => {
          if(res.data){
            Toast({
              message: res.data,
              position: 'middle',
              duration: 5000
            });
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  //
</style>
