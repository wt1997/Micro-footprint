// pages/footprint_page/footprint_page.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: '',
    recordInfo: [],
    nickName: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      avatar: app.globalData.userInfo.userAvatar,
      nickName: app.globalData.userInfo.userNickname
    })
    this.getRecordInfo(app.globalData.openId);
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
  clickFootPrint: function (mData) {
    const that = this;
    //记录的唯一标识ID
    var index = mData.currentTarget.dataset.which;
    app.globalData.recordMap = that.data.recordInfo;
    console.log(index);
    wx.navigateTo({
      url: '/pages/userinfo/footprint_details_page/footprint_details_page?index='+index,
    })
  },
  getRecordInfo(openId){
    const that = this;
    if (openId){
      wx.request({
        data: {
          openId : openId
        },
        url: app.globalData.ipAd+'/get/record',
        success(res){
          that.setData({
            recordInfo : res.data
          })
          console.log("/get/record："+res.data[0].time);
        },
        fail(res){
          
        }
      })
    }
  }
})