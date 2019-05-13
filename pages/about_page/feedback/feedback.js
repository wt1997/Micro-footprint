// pages/about_page/feedback/feedback.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleIcon: '/images/icon/write.png',
    titleText: '感谢您的反馈',
    message: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 获取输入框信息
   */
  getFeedbackInfo(e){
    this.setData({
      message : e.detail.value
    })
  },
  /**
   * 保存反馈信息
   */
  saveInfo(e){
    const that = this;
    wx.request({
      data:{
        openId: app.globalData.openId,
        name: app.globalData.userInfo.userNickname,
        message: that.data.message
      },
      url: app.globalData.ipAd+'/save/feedback',
      success(e){
        console.log("保存反馈："+e.data);
        wx.reLaunch({
          url: '/pages/userinfo/user_info_page/user_info_page',
        })
      },
      fail(e){

      }
    })
  }
})