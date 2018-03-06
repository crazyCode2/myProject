/**
 * 自定义指令
 */
import Vue from 'vue'

/**
 * 聚集焦点
 */
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus();
  }
})

/**
 * 钩子函数 bind update
 * 表单验证
 * v-check="{type:'date',val:currentDate}"
 */
Vue.directive('check', {
  // 被绑定
  bind: function(){
    // 仅首次调用
    console.log('指定绑定成功');
  },
  // 组件更新
  update: function(el, binding){
    // 获取当前的值
    // console.log(binding.value);
    // 进行判断,避免同时触发多个判断
    if(binding.oldValue.val != binding.value.val){
      // 定义验证状态 局部变量
      let checkStatus = true;
      if(binding.value.type == 'phone'){
        // 验证手机号码
        if(!/^1(3|4|5|7|8)\d{9}$/g.test(binding.value.val)){
          checkStatus = false;
        }
      }else if(binding.value.type == 'date'){
        // 验证日期
        if(!/^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/g.test(binding.value.val)){
          checkStatus = false;
        }
      }else if(binding.value.type == 'identification_card'){
        // 验证身份证
        if(!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(binding.value.val)){
          checkStatus = false;
        }
      }else if(binding.value.type == 'email'){
        // 验证邮箱
        if(!/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g.test(binding.value.val)){
          checkStatus = false;
        }
      }else if(binding.value.type == 'zip_code'){
        // 验证邮编
        if(!/^\d{6}$/g.test(binding.value.val)){
          checkStatus = false;
        }
      }

      // checkStatus true 成功 false 失败
      if(checkStatus){
        el.style.border = "1px solid #ccc";
      }else{
        el.style.border = "1px solid red";
      }
    }
  }
})

/**
 * 自定义指令页面title实时更新
 */
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = binding.value
  }
});
