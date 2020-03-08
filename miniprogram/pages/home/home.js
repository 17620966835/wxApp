// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleShowToast(){
    // console.log('---')
    wx.showToast({
      title:'毛毛平',
      duration:2000,
      icon:'loading',
      // image:"/assets/icon/icon.png",
      mask:true,
      success:function(){
        console.log('毛毛平展示成功')
      },
      fail:function(){
        consloe.log('毛毛平展示成败')
      },
      complete:function(){
        console.log('完成毛毛平函数的调用')
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title:'明明白白毛毛平',
      content:'确定穿着品如的衣服吗？',
      // showCancel:true,
      cancelText:"退寻找柜",
      cancelColor:"red",
      success:function(res){
        console.log(res)
        if(res.cancel){
          console.log('毛毛平已脱下')
        }
        if(res.confirm){
          console.log('毛毛平已穿上')
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title:'找衣柜中....',
      mask:true
    })

    setTimeout(()=>{
      // 必须手动
      wx.hideLoading()
    },1000)
  },
  handleShowAction(){
    wx.showActionSheet({
      itemList: ['艾莉','品如'],
      itemColor:'red',
      success:function(res){
        console.log(res)
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onShareAppMessage: function (options) {
    return {
      title:'你好啊',
      path:'/pages/about/about',
 imageUrl:'https://goss4.cfp.cn/creative/vcg/800/version23/VCG41670895271.jpg?x-oss-process=image/format,jpg/interlace,1'
    }
  }
})