<!-- 登录页 -->
<template>
  <div class="login">
    <!-- 输入框 -->
    <div class="input-wrapper">
      <input v-model="userNumber" class="input" type="text" placeholder="账号" autofocus="true" value=""/>
      <img class="input-img" src="data:image/gif;base64,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" />
    </div>
    <div class="input-wrapper">
      <input v-model="userPassword" class="input" type="password" placeholder="密码" value=""/>
      <img class="input-img" src="data:image/gif;base64,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" />
    </div>
    <!-- 登录按钮 -->
    <div class="input-wrapper">
      <div class="input-login" @click="login">登录</div>
    </div>
    <!-- 其他操作 -->
    <div class="input-wrapper">
      <span class="input-forget" @click="findPassword">找回密码</span>
      <span class="input-register" @click="register">立即注册</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Login',
    data(){
      return{
        userNumber:'',
        userPassword:''
      }
    },
    mounted () {
      // 隐藏tab栏
      this.$store.dispatch('hideTabBar');
    },
    methods:{
      /*找回密码*/
      findPassword() {
        this.$toast.center('找回密码暂时未开发');
      },
      /*注册*/
      register() {
        this.$toast.center('注册暂时未开发');
      },
      /*处理登录*/
      login() {
        if(!this.userNumber){
          this.$toast.center('请输入手机号');
          return;
        }else if(!this.userPassword){
          this.$toast.center('请输入密码');
          return;
        }
        /*登录成功*/
        this.$toast.center('登录成功!');
        // 跳转home
        this.$router.push({path:'/'});
      }
    }
  }
</script>

<style>
  .login{
    width: 100%;
    height: 200px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .input-wrapper{
    width: 90%;
    margin: 0px auto 30px;
    position: relative;
  }
  .input {
    font-size: 16px;
    height: 44px;
    width: 100%;
    border-width:1px;
    border-style: solid;
    border-color: #48c9bf;
    border-radius:5px;
    outline: none;
    text-indent:2.5em;
  }
  .input-img{
    position: absolute;
    top:6px;
    left: 5px;
    width: 30px;
    height: 30px;
  }
  .input-login{
    height: 44px;
    line-height: 44px;
    width: 100%;
    background-color: #48c9bf;
    border-radius: 6px;
    color: white;
    font-size: 16px;
    text-align: center;
  }
  .input-forget{
    position: absolute;
    left: 0px;
    font-size: 16px;
  }
  .input-register{
    position: absolute;
    right: 0px;
    font-size: 16px;
  }
</style>
