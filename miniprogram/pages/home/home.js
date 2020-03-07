// pages/home/home.js
import request from '../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
// ----------------1.原生的方式发送网络请求--------------------------
    this.get_data_origin()


    // 2.使用封装的request发送网络请求
    // promise最大的好处就是防止出现 回调地狱
    request({
      url: 'http://123.207.32.32:8000/api/wh/recommend',
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },
    get_data_origin(){
      //2.  发送网络请求
  //   wx.request({
  //     url:'http://123.207.32.32:8000/api/wh/home/data',
  //     data:{
  //       type:'sell',
  //       page:1
  //     },
  //     success:function(res){
  //       console.log(res)
  //     }

  //   })

    



  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})