// pages/about_page/about_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mIconList: [{
      id: '0',
      iconPath: '/images/icon/about.png',
      name: '关于'
    },{
      id: '1',
      iconPath: '/images/icon/m-help.png',
      name: '帮助'
    },{
      id: '2',
      iconPath: '/images/icon/feedback.png',
      name: '反馈'
    },{
      id: '3',
      iconPath: '/images/icon/exit.png',
      name: '退出'
    }],
    gridCol: 2,
    skin: false
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
  clickItem: function (mData){
    var itemID = mData.currentTarget.dataset.which;
    console.log(itemID);
    switch(itemID){
      case '0':
        wx.navigateTo({
          url: '/pages/about_page/about_wzj/about_wzj',
        })
        break;
      case '1':
        wx.navigateTo({
          url: '/pages/about_page/help/help',
        })
        break;
      case '2':
        wx.navigateTo({
          url: '/pages/about_page/feedback/feedback',
        })
        break;
      case '3':
        break;
    }
  }
})