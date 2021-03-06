/**
 * 定义全局函数
 */
exports.install = function (Vue, options) {
  /**
   * 去除对象空属性
   */
  Vue.prototype.deleteObjNull = function(obj){
    let _newPar = {};
    for (let key in obj) {
      /**
       * 如果对象属性的值不为空,就保存该属性
       * 这里我做了限制,如果属性的值为0,保存该属性。如果属性的值全部是空格,属于为空。
       */
      if ((obj[key] === 0 || obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
        //记录属性
        _newPar[key] = obj[key];
      }
    }
    //返回对象
    return _newPar;
  }

  /**
   * 获取屏幕宽高
   */
  Vue.prototype.getViewportSize = function(){
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
  }

  /**
   * 节流函数
   */
  Vue.prototype.throttle = function(fn,interval){
    //节流函数
    var _self = fn,
      timer,
      firstTime = true;

    return function() {
      var args = arguments,
        _me = this;

      console.log(timer);
      console.log(interval);

      //如果是第一次调用不需要延迟执行
      if (firstTime) {
        _self.apply(_me, args);
        return firstTime = false;
      }
      if (timer) {
        return false;
      }
      timer = setTimeout(function() {
        clearTimeout(timer);
        console.log('33333333');
        timer = null;
        _self.apply(_me, args);
      }, interval || 500)
    }
  }

  /**
   * 将json字符串去除转义符'\'，后转换成json对象
   */
  Vue.prototype.toJsonObject = function (str) {
    console.log(JSON.parse(str));
  }

  /**
   * 请求参数验证
   * params 的所有属性值都不能为空
   */
  Vue.prototype.paramsValidate = function (params) {
    let flag = true;

    for(var key in params){
      if(!params[key]){
        this.$vux.toast.text('请完善数据!', 'middle');
        return false; // 终止程序
      }
    }

    return flag;
  }

  /**
   * 自动换行
   * 过滤 ; 。；
   */
  Vue.prototype.autoLinefeed = function (str) {
    /**
     * split()
     * 使用一个指定的分隔符把一个字符串分割存储到数组
     */
    // let arr = str.split(/[;。；]/);

    var str = "how,are.you"; // 原字符串
    var reg = /\.|\,/g; // 正则表达式
    //记录每个标志位的字符到底是什么
    var strFlag= [];
    for(var i=0;i<str.match(reg).length;i++){
      strFlag[i] = str.match(reg)[i];
    }

    //开始切割
    var strArray = str.split(reg);
    for(var i=0;i<strArray.length;i++){
      strArray[i] += "<br />";
    }
    //将数组还原
    var strNew = "";
    for(var i=0;i<strArray.length;i++){
      if(strFlag[i]!=null){
        strNew += strArray[i] + strFlag[i];
      }else{
        strNew += strArray[i];
      }
    }

    console.log(strNew);

    return strNew;
  }

};
