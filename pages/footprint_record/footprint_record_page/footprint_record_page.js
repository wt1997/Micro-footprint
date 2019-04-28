// pages/footprint_record/footprint_record_page/footprint_record_page.js
const app = getApp();
var util = require('/../../../utils/util.js');
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
    textAreaInfo: '',
    isShare: true,
    saveDisabled: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const time = util.formatTime(new Date());
    
    this.setData({
      date: time
    })
    console.log("time=" + time);
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
  //日期选择
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
  //内容
  getDeeds: function(mData) {
    this.setData({
      textAreaInfo: mData.detail.value
    })
    console.log("getDeeds-"+mData.detail.value);
  },
  getPlace: function(mData) {
    console.log("getPlace" + mData);
  },
  getIsShare: function (mData) {
    this.setData({
      isShare: mData.detail.value
    })
  },
  saveRecord: function(mData) {
    const that = this;
    var saveIndex = 0;
    var saveLength = that.data.imgList.length;
    var saveSucess = 0;
    var saveFail = 0;
    //文字描述和图片一项不为空
    if (that.data.textAreaInfo.length > 0 || (saveLength != 0)){
      that.setData({
        saveDisabled: true
      })
      wx.request({
        data: {
          content: that.data.textAreaInfo,
          date: that.data.date,
          place: that.data.recordAdDetails,
          isShare: that.data.isShare,
          openId: app.globalData.openId
        },
        url: app.globalData.ipAd + '/save/recordInfo',
        success: res => {
          const recordId = res.data.recordId;
          console.log(res.data.recordId);
          //判断用户上传图片数量
          if (saveLength != 0) {
            that.uploadPhoto(that.data.imgList, saveIndex, saveLength, saveSucess, saveFail, recordId);
          }
        },
        fail: res => {

        },
        complete: res => {
          wx.redirectTo({
            url: '/pages/map_page/map_page',
          })
          console.log("传输完成：" + res.data);
        }
      })
    }
    console.log("内容---" + this.data.textAreaInfo)
    console.log("时间---" + this.data.date)
    console.log("地点---" + this.data.recordAdDetails)
    console.log("图片---" + this.data.imgList)
    console.log("分享---" + this.data.isShare);
    console.log("保存完成");
  },
  uploadPhoto: function(filePath,i,length,sucessUp,failUp,recordId){
    const that = this;
    wx.uploadFile({
      url: app.globalData.ipAd+'/save/picture',
      filePath: filePath[i],
      header: {
        'content-type': 'multipart/form-data'
      },
      name: 'photo',
      formData: {
        id: recordId+i,
        recordId: recordId,
        userId: app.globalData.openId
      },
      success: res =>{
        sucessUp++;
      },
      fail: res =>{
        failUp++;
      },
      complete: res =>{
        i++;
        if(i == length){
          console.log("上传图片完成:" + "成功：" + sucessUp + "失败：" + failUp);
        }else{
          that.uploadPhoto(filePath,i,length,sucessUp,failUp,recordId);
        }
      }
    })
  },
  
})