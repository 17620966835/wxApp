// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"你好小程序",
    firstname:'kode',
    lastname:'bryant',
    age:18,
    nowTime:new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    score:45,
    movies:['星际穿越','盗墓笔记','大话西游'],
    nums:[
      [10,12,34,55,67],
      [55,44,89,76,33],
      [11,22,33,44,55],
    ],
    letters:['a','b','c']
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
      nowTime:new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitColor(){
    this.setData({
      isActive:!this.data.isActive,
    })
  },
  handleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow,
    })
  },
  handleIncrement(){
    this.setData({
      score:this.data.score+6
    })
  },
  numberToFixed(values){
    return value.toFixed(2)
  }
})