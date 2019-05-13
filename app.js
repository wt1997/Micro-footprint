//app.js
App({
  onLaunch: function () {
    var that = this;
    //尝试从本地缓存中获取用户的openId
    try{
      const openId = wx.getStorageSync('openId')
      console.log("本地缓存的openId---"+openId);
      if(openId){
        //本地存在用户登录信息不用再次登录
        // wx.reLaunch({
        //   url: '/pages/map_page/map_page',
        // })
        that.mGetUserInfo(openId,this);
      }else{
        //本地不存在用户登录信息用户需要再次登录
        that.firstUserLogin(this);
      }
    }catch(e){
      console.log("同步获取本地缓存openId失败："+e);
    }
  },
  globalData: {
    appsecret: 'e13e75d0d0018ce42bd04c7af3464382',
    userInfo: null,
    openId: 'wt17864154940',
    ipAd: 'http://192.168.31.141:9999',
    sigNature: '以梦为马，不负韶华',
    recordMap: '',
    surroundRecordList: '',
    longitude: '',
    latitude: ''
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
            console.log("res="+res);
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
  },
  //通过openId从数据库获取用户信息
  mGetUserInfo: function(openId,index){
    const that = index;
    console.log("mGetUserInfo"+openId);
    wx.request({
      data: {
        openId: openId
      },
      url: that.globalData.ipAd+'/obtain/user',
      success: res=>{
        console.log(res.data);
        //获取到用户后的数据处理
        that.globalData.openId = openId;
        that.globalData.userInfo = res.data;
        console.log(res.data)
        //跳过登录页
        wx.reLaunch({
          url: '/pages/map_page/map_page',
        })
      },
      fail: res=>{
        console.log(res.data);
        //根据openId获取用户信息失败,用户重新登录
        wx.redirectTo({
          url: '/pages/author/author',
        })
      }
    })
  },

})