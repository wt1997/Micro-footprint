// pages/userinfo/user_info_change/user_info_change.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname: '',
    userSignature: '',
    oldsn: '',
    avatar: '',
    titleName: '',
    changeContent: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      avatar: app.globalData.userInfo.userAvatar,
      nickname: app.globalData.userInfo.userNickname,
      userSignature: app.globalData.userInfo.userSignature,
      oldsn: app.globalData.userInfo.userSignature
    })
  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    this.setData({
      avatar: app.globalData.userInfo.userAvatar
    })
  },
  //获取修改框输入内容
  getMsg(e){
    this.setData({
      changeContent : e.detail.value
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  modifySingnature(e) {
    this.setData({
      modalName: 'show',
      titleName: '修改签名'
    })
  },
  modifyNickName(e) {
    this.setData({
      modalName: 'show',
      titleName: '修改昵称'
    })
  },
  saveCertain(e) {
    var newData =this.data.changeContent;
    if(this.data.titleName == '修改昵称'){
      //保存用户修改的昵称
      wx.request({
        data: {
          openId: app.globalData.openId,
          newNik: newData
        },
        url: app.globalData.ipAd+'/change/nickname',
        success(e){
          if(e.data.code == '0000'){
            console.log('昵称修改成功');
            app.globalData.userInfo.userNickname = newData;
          }else{
            console.log('修改昵称失败');
          }
        },
        fail(e){
          console.log('修改昵称请求失败');
        }
      })            
      this.setData({
        nickname: newData,
        modalName: null,
        value: null
      })
    }else if(this.data.titleName == '修改签名'){
      //保存用户修改的签名
      wx.request({
        data: {
          openId: app.globalData.openId,
          newSig: newData
        },
        url: app.globalData.ipAd + '/change/signature',
        success(e){
          if (e.data.code == '0000') {
            console.log('昵称签名成功');
            app.globalData.userInfo.userSignature = newData;
          } else {
            console.log('修改签名失败');
          }
        },
        fail(e){
          console.log('修改签名请求失败');
        }
      })
      this.setData({
        userSignature: newData,
        modalName: null,
        value: null
      })
    }
  },
  chooseAvatar(e) {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        wx.request({
          data:{
            openId: app.globalData.openId,
            avatarPath: res.tempFilePaths
          },
          url: app.globalData.ipAd+'/change/avatar',
          success(e){
            if(e.data.code == "0000"){
              app.globalData.userInfo.userAvatar = res.tempFilePaths;
              console.log("changeAvatar:头像修改成功");
            }else{
              console.log("changeAvatar:" + e.data.code);
            }
          },
          fail(e){
            console.log(e.data);
          }
        })
      }
    });
    this.setData({
      avatar: app.globalData.userInfo.userAvatar
    })
  }
})