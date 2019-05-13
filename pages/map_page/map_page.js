// pages/map_page/map_page.js
const mp = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userIcon: '/images/icon/userinfo.png',
    mainIcon: '/images/icon/add.png',
    recordIcon: '/images/icon/m-record.png',
    findIcon: '/images/icon/find.png',
    latitude: '',
    longitude: '',
    markers: '',
    subkey: 'W7XBZ-KQCWQ-MNK5F-GA6RM-CLJBJ-YZFOZ',
    visible: 'none',
    isShow: false,
    isHide: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var avatar = mp.globalData.userInfo.avatarUrl;
    var nickName = mp.globalData.userInfo.nickName;
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
    var my = this;
    wx.getLocation({
        type: 'gcj02',
        success(res) {
          my.setData({
            longitude: res.longitude,
            latitude: res.latitude
          })
          
          my.setData({
            markers: [{
              id: 1,
              latitude: res.latitude,
              longitude: res.longitude,
              iconPath: '/images/icon/detail-ad.png',
              name: '地图测试',
              width: '30px',
              height: '30px'
            }]
          })
          //将用户所在经纬度存储到全局变量
          mp.globalData.longitude = res.longitude;
          mp.globalData.latitude = res.latitude;
        }
    })
    console.log("----------"+mp.globalData.userInfo);
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
  /**
   * 主界面点击加号弹出其他图标事件
   */
  clickItem(mData) {
    var quote = this;
    var item = mData.currentTarget.dataset.which;
    console.log(item);
    switch(item){
      case '0':
        if (quote.data.isShow){
          quote.setData({
            isShow: false
          })
        }else{
          quote.setData({
            isShow: true
          })
        }
        break;
      case '1':
        wx.navigateTo({
          url: '/pages/footprint_record/footprint_record_page/footprint_record_page',
        })
        break;
      case '2':
        wx.navigateTo({
          url: '/pages/userinfo/shares_page/shares_page',
        })
        break;
      case '3':
        wx.navigateTo({
          url: '/pages/userinfo/user_info_page/user_info_page',
        })
        break;
    }
  }

})