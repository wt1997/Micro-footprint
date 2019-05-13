// pages/map_page/map_page.js
const mp = getApp();
// 引入SDK核心类
var QQMapWX = require('/../../qqmap/qqmap-wx-jssdk.js');
var qqmapsdk;

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
    isHide: false,
    placeAddress: '',
    placeName: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var avatar = mp.globalData.userInfo.avatarUrl;
    var nickName = mp.globalData.userInfo.nickName;
    qqmapsdk = new QQMapWX({
      key: 'W7XBZ-KQCWQ-MNK5F-GA6RM-CLJBJ-YZFOZ'
    });
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
          qqmapsdk.reverseGeocoder({
            location: {
              latitude: my.data.latitude,
              longitude: my.data.longitude,
            },
            success: function(res) {
              my.setData({
                placeAddress: res.result.address,
                placeName: res.result.formatted_addresses.recommend
              })
              mp.globalData.placeAddress = res.result.address;
              mp.globalData.placeName = res.result.formatted_addresses.recommend;
            },
            fail(res) {

            }
          })
          // console.log(res.longitude);
          // console.log(res.latitude);
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
    // console.log("123");
    // console.log("l" + this.data.longitude);
    // console.log("t" + this.data.latitude);
    // console.log("1234");
    // console.log("----------"+mp.globalData.userInfo);
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
  },
  getPlaceName(res){
    var that = this;
    wx.request({
      url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + that.data.latitude + ',' + that.data.longitude + '+&key=W7XBZ-KQCWQ-MNK5F-GA6RM-CLJBJ-YZFOZ&get_poi=1',
      success(res) {
        console("didian" + res.result.address);
      }
    })
  }

})