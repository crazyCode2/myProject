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
 * 表单验证
 * v-check="{type: 'number', val: ''}"
 */
Vue.directive('check', {
  // 钩子
  bind: function(){
    console.log(1);
  },
  update: function(el, binding){
    console.log(binding);
    // 获取当前的值
    if(binding.oldValue.val != binding.value.val){
      let checkStatus = true;
      // 正则判断它是不是数字
      if(binding.value.type == 'number'){
        if(!/^\d*$/g.test(binding.value.val)){
          checkStatus = false;
        }
      }else if(binding.value.type == 'teshu'){
        if(!/^\w*$/g.test(binding.value.val)){
          checkStatus = false;
        }
      }

      if(checkStatus){
        el.style.border = "1px solid #ccc";
      }else{
        el.style.border = "1px solid red";
      }
    }
  }
})
