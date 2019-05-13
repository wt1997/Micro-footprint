// pages/author/author.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
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
  getUserInfo: function (e) {
    if (app.globalData.openId){
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      console.log("globalData.userInfo" + app.globalData.userInfo.nickName);
      console.log("globalData.userInfo" + app.globalData.userInfo.avatarUrl);
      console.log("globalData.userInfo" + app.globalData.userInfo.openId);
      console.log("globalData.userInfo" + app.globalData.userInfo.sigNature);
      //同步更新用户信息
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      console.log(app.globalData.ipAd + '/save/user');
      //将用户第一次等登录的数据传递至后台并存储
      wx.request({
        data: {
          userNickname: app.globalData.userInfo.nickName,
          avatarUrl: app.globalData.userInfo.avatarUrl,
          openId: app.globalData.openId,
          sigNature: app.globalData.sigNature
        },
        url: app.globalData.ipAd + '/save/user',
        success: e => {
          console.log(e);
          //存储成功
          if (e.data.userId == app.globalData.openId) {
            console.log("e.data.userId" + e.data.userId);
            console.log("app.globalData.openId" + app.globalData.openId);
            var mOpenId = app.globalData.openId;
            //用户第一次登录将用户信息缓存至本地
            wx.setStorage({
              key: 'openId',
              data: mOpenId
            })
            //页面跳转
            wx.reLaunch({
              url: '/pages/map_page/map_page',
            })
          }
        },
        fail: e => {
          //存储失败
          console.log("存储用户信息失败" + e);
        }
      })
    }else{
      this.firstUserLogin(app);
    }
  },
  //wx.login重新登录获取用户信息
  firstUserLogin: res => {
    console.log(res);
    var that = res;
    var data = that.globalData;
    const accountInfo = wx.getAccountInfoSync();
    var appId = accountInfo.miniProgram.appId;
    console.log(appId);
    // 登录，获取用户的唯一标识openId存储globalData中的openId中
    wx.login({
      success: res => {
        console.log("wx.login");
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          method: 'GET',
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + that.globalData.appsecret + '&js_code=' + res.code + '&grant_type=authorization_code',
          success: res => {
            that.globalData.openId = res.data.openid;
            console.log("res=" + res);
            console.log("res.data.openId" + res.data.openid);
            console.log("globalData.openId" + that.globalData.openId);
          },
          fail: res => {
            console.log("获取用户openId失败,失败信息：" + res);
          }
        })
      },
      fail: res => {
        console.log("调用wx.login接口失败,失败信息：" + res);
      }
    })
  }
})