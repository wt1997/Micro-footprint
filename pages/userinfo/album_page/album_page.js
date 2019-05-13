// pages/album_page/album_page.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ablum: [
      {
        id: 0,
        time: '2019/02/01',
        photo: [
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10000.jpg',
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg'],
      },
      {
        id: 1,
        time: '2019/03/02',
        photo: [
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg',
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg',
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg',
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg',
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg',
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg',
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg',
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg',
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg'],
      },
      {
        id: 1,
        time: '2019/04/12',
        photo: [
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg',
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10009.jpg',
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10000.jpg',
          'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'],
      }
    ],
    pictures: ''
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
    this.getPictures();
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getPictures(e){
    const that = this;
    wx.request({
      data: {
        openId : app.globalData.openId
      },
      url: app.globalData.ipAd+'/get/pictures',
      success(res){
        that.setData({
          pictures : res.data
        })
        console.log(res.data[0].time);
      },
      fail(res){

      }
    })
  }
})