// pages/user_info_page/user_info_page.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatar: 'http://127.0.0.1:8011/image/151527080.png',
    arrow: '/images/icon/arrow.png',
    footprintIcon: '/images/icon/zuji.png',
    collectionIcon: '/images/icon/collection.png',
    albumIcon: '/images/icon/album.png',
    shareIcon: '/images/icon/share.png',
    elseIcon: '/images/icon/else.png',
    nickname: 'Update',
    userID: 'wt17864154940'
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
  onShareAppMessage: function () {
  
  },
  clickList: function (mData) {
    console.log(mData.currentTarget.dataset.which);
    console.log(mData);
    switch (mData.currentTarget.dataset.which){
      case '1':
        wx.navigateTo({
          url: '/pages/userinfo/footprint_page/footprint_page?which=1',
        })
        break;
      case '2':
        wx.navigateTo({
          url: '/pages/userinfo/footprint_page/footprint_page?which=2',
        })
        break;
      case '4':
        wx.navigateTo({
          url: '/pages/userinfo/shares_page/shares_page?which=4',
        })
        break;
      case '3':
        wx.navigateTo({
          url: '/pages/userinfo/album_page/album_page?which=3',
        })
        break;
      case '0':
        wx.navigateTo({
          url: '/pages/userinfo/user_info_change/user_info_change?which=0',
        })
        break;
      case '5':
        wx.navigateTo({
          url: '/pages/userinfo/about_page/about_page?which=5',
        })
        break;
    }
  }
})