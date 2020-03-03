//app.js
// 注册一个小程序示例
App({
  //小程序 初始化完成时
  onLaunch: function () {
    // 获取用户信息
  },
  // 显示出来时
  onShow:function(options){
  //1. 判断小程序进入场景

  // 2.获取用户信息后，将用户的信息传递给服务器
  wx.getUserInfo({
    success:function(res){
      console.log(res);
    }
  })
  },
  // 隐藏时
  onHide:function(){

  },
  // 产生错误时
  onError:function(msg){

  },
  globalData:{
    name:'jack平',
    age:18
  }
})
