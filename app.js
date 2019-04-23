//app.js
App({
  onLaunch: function () {
    var that = this;
    //尝试从本地缓存中获取用户的openId
    // try{
    //   const openId = wx.getStorageSync('openId')
    //   console.log("本地缓存的openId---"+openId);
    //   if(openId){
    //     //本地存在用户登录信息不用再次登录
    //     that.mGetUserInfo(openId);
    //   }else{
    //     //本地不存在用户登录信息用户需要再次登录
    //     that.firstUserLogin(this);
    //   }
    // }catch(e){
    //   console.log("同步获取本地缓存openId失败："+e);
    // }
  },
  globalData: {
    appsecret: 'e13e75d0d0018ce42bd04c7af3464382',
    userInfo: null,
    openId: null,
    ipAd: 'http://192.168.43.64:8080',
    sigNature: '以梦为马，不负韶华'
  },
  /**自定义函数**/
  //wx.login重新登录获取用户信息
  firstUserLogin: res=>{
    console.log(res);
    var that = res;
    var data = that.globalData;
    const accountInfo = wx.getAccountInfoSync();
    var appId = accountInfo.miniProgram.appId;
    console.log(appId);
    // 登录
    wx.login({
      success: res => {
        console.log("wx.login");
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          method: 'GET',
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + that.globalData.appsecret + '&js_code=' + res.code + '&grant_type=authorization_code',
          success: res => {
            that.globalData.openId = res.data.openid;
            console.log(res);
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
  },
  //从数据库获取用户信息
  mGetUserInfo: res=>{
    console.log("mGetUserInfo"+res);
    wx.request({
      data: {
        openId: res
      },
      url: 'http://192.168.43.64:8080/obtain/user',
      success: res=>{
        console.log(res);
        //获取到用户后的数据处理

        //跳过登录页
        wx.redirectTo({
          url: '/pages/map_page/map_page',
        })
      },
      fail: res=>{
        console.log(res);
        //根据openId获取用户信息失败
      }
    })
  },

})