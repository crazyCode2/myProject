/**
 * 自定义指令
 */
import Vue from 'vue'

/**
 * 侧滑删除
 */
// Vue.directive('delete', {
//   bind: function (el,binding) {
//     let _this = this;
//     setTimeout(function () {
//       let MaxWidth = $('.informationLi-del').width();
//       let startX,moveX,movestartX,endX,startTime,endTime,continueTime,isCurrent,step;
//       el.addEventListener('touchstart',e => {
//         e.preventDefault();
//         startX = e.changedTouches[0].pageX;
//         startTime = new Date().getTime();
//         if($(el).hasClass('sele')){
//             isCurrent = true;
//         }else {
//           isCurrent = false;
//         }
//       });
//       el.addEventListener('touchmove', e =>{
//         e.preventDefault();
//         movestartX = e.changedTouches[0].pageX;
//         if(!isCurrent){
//           endX = 0;
//           $(el).siblings().css('transform','translateX(0px)');
//         }
//         if(endX){
//           moveX = movestartX-(startX-endX);
//         }else {
//           moveX = movestartX-startX;
//         }

//         $(el).css('transform','translateX('+moveX+'px)');
//         if((Math.abs(moveX)>=MaxWidth*2)&&(moveX<0)){

//           $(el).css('transform','translateX('+moveX+'px)');
//           $(el).css('transform','translateX('+(-MaxWidth*2)+'px)');

//         }else if((Math.abs(moveX)>=0)&&(moveX>0)){
//           $(el).css('transform','translateX(0px)');
//         }

//       });
//       el.addEventListener('touchend',e => {
//         e.preventDefault();

//         $(el).siblings().removeClass('sele');
//         $(el).addClass('sele');
//         endX = e.changedTouches[0].pageX;
//         endTime = new Date().getTime();

//         continueTime = endTime-startTime;
//         if((Math.abs(moveX)>=2*MaxWidth)&&(moveX<0)&&continueTime>50){
//           binding.value.del(binding.value.index);
//           endX = 0;
//           $(el).css('transform','translateX(0px)');
//         }else if((Math.abs(moveX)<=MaxWidth)&&(moveX<0)){
//           endX = 0;
//           step = (0-moveX)/20;
//           let timerId = setInterval(function () {
//             moveX = moveX+step;
//             $(el).css('transform','translateX('+moveX+'px)');
//             if(moveX>=0){
//               clearInterval(timerId);
//               $(el).css('transform','translateX(0px)');
//             }
//           },10);
//         }else if(moveX>0){
//           endX = 0;
//           $(el).css('transform','translateX(0px)');
//         }else {
//           endX = 0;
//           step = (0-moveX)/20;
//           let timerId = setInterval(function () {
//             moveX = moveX+step;
//             $(el).css('transform','translateX('+moveX+'px)');
//             if(moveX>=0){
//               clearInterval(timerId);
//               $(el).css('transform','translateX(0px)');
//             }
//           },10);
//         }
//       });
//     },20);
//   },
//   unbind: function () {

//   }
// })

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
