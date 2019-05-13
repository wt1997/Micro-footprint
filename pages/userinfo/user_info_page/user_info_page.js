// pages/user_info_page/user_info_page.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatar: '',
    arrow: '/images/icon/arrow.png',
    footprintIcon: '/images/icon/zuji.png',
    collectionIcon: '/images/icon/collection.png',
    albumIcon: '/images/icon/album.png',
    shareIcon: '/images/icon/share.png',
    elseIcon: '/images/icon/else.png',
    nickname: 'Null',
    userSignature: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      avatar: app.globalData.userInfo.userAvatar,
      nickname: app.globalData.userInfo.userNickname,
      userSignature: app.globalData.userInfo.userSignature
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      nickname: app.globalData.userInfo.userNickname,
      userSignature: app.globalData.userInfo.userSignature,
      avatar: app.globalData.userInfo.userAvatar
    })
  },
  /**
   * 监听列表点击事件
   */
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