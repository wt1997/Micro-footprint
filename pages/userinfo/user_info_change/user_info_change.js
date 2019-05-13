// pages/userinfo/user_info_change/user_info_change.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname: '',
    userSignature: '',
    oldsn: '',
    avatar: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      avatar: app.globalData.userInfo.userAvatar,
      nickname: app.globalData.userInfo.userNickname,
      userSignature: app.globalData.userInfo.userSignature,
      oldsn: app.globalData.userInfo.userSignature
    })
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

  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  modifySingnature(e) {
    this.setData({
      modalName: 'show'
    })
  }
})