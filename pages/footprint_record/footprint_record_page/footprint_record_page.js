// pages/footprint_record/footprint_record_page/footprint_record_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputText: '此刻的字迹，他时的回忆...',
    backImage: '/images/icon/back.png',
    recordImage: '/images/icon/record.png',
    timeImage: '/images/icon/time.png',
    adImage: '/images/icon/ad.png',
    cameraImage: '/images/icon/camera.png',
    addPhoto: '/images/icon/addPhoto.png',
    shareTrace: '/images/icon/shareTrace.png',
    backText: '足迹记录',
    recordText: '美好的事',
    timeText: '写下的时间',
    recordTime: '2019/3/30',
    recordAd: '何地',
    recordAdDetails: '山东省济南市山东大学（中心校区）',
    recordPhotoAndVideo: '惊艳的瞬间',
    share: '分享出来',
    save: '保存',
    date: '2019-04-10',
    imgList: [],
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
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '行走者',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  getDeeds: function(mData) {
    if(mData && mData != null){

    }else{
      console.log("输入框为空");
    }
    console.log(mData.detail.value)
  }
})