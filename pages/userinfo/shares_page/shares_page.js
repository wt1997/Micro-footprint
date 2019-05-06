// pages/shares_page/shares_page.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    palceInfo: {
      placeName: '山东省济南市山东大学（中心校区）',
      longitude: '1',
      latitude: '1'
    },
    surroundRecord: '',
    time: '04-15',
    browse: '21',
    awesome: '12',
    mark: '游记',
    comment: '10',
    avatar: '',
    nickname: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      avatar: app.globalData.userInfo.userAvatar,
      nickname: app.globalData.userInfo.userNickname,
    })
    //获取附近的记录
    this.getShareInfo(this.data.palceInfo);
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
  clikCard: function (mData) {
    //记录ID
    var pIndex = mData.currentTarget.dataset.mparent;
    var cIndex = mData.currentTarget.dataset.mchild;
    console.log("pIndex="+pIndex);
    console.log("cIndex=" + cIndex);
    wx.navigateTo({
      url: '/pages/userinfo/footprint_details_page/footprint_details_page?which=share&pIndex=' + pIndex +'&cIndex='+cIndex,
    })
  },
  getShareInfo: function (palceInfo){
    var that = this;
    const placeName = palceInfo.placeName;
    const longitude = palceInfo.longitude;
    const latitude = palceInfo.latitude;
    wx.request({
      data: {
        placeName: placeName,
        placeLongitude: longitude,
        placeLatitude: latitude
      },
      url: app.globalData.ipAd +'/get/surrounding',
      success(res){
        that.setData({
          surroundRecord: res.data
        })
        app.globalData.surroundRecordList = res.data;
        console.log("/get/sunrroundRecord：" + res.data[0].lineTime);
      },
      fail(res){

      }
    })
  }
})