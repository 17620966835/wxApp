// pages/home/home.js
// getApp()获取app()产生的示例对象
const app=getApp()
// console.log(app.globalData.name);
// console.log(app.globalData.age);

// const name=app.globalData.name;
// const age=app.globalData.age;


// 注册一个页面
// 页面也有自己的生命周期函数
Page({
  handleGetUserInfo(event){
    console.log(event);
  },
  /**
   * 页面的初始数据
   */
  data: {
    name:"jack平",
    age:18,
    students:[
      {id:110,name:"远远",age:18},
      { id: 110, name: "平平",age:18 },
    ],
    counter:0,
    list:[]
  },
  handleBtnClick(){
  //错误
    // this.data.count += 1;
    // console.log(tis.data.counter)
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter - 1
    })
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    wx.request({
      url:'http://123.207.32.32:8000/api/wh/recommend',
      success:(res)=>{
        console.log(res);
        const data=res.data.data.list;
        this.setData({
          list:data
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示出来时
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