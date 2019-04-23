// pages/footprint_page/footprint_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
    footprint: [
      {
        id: 0,
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
        title: '随笔',
        description: '我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
        nickename: '天使  凯尔',
        time: '2019/04/12',
        browse: '56',
        appreciate: '21',
        comment: '12'
      },
      {
        id: 1,
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
        title: '勇者',
        description: '我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
        nickename: '天使  凯尔',
        time: '2019/04/12',
        browse: '56',
        appreciate: '21',
        comment: '12'
      },
      {
        id: 2,
        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
        title: '天使',
        description: '我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
        nickename: '天使  凯尔',
        time: '2019/04/12',
        browse: '56',
        appreciate: '21',
        comment: '12'
      }
      ]
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
  clickFootPrint: function (mData) {
    //记录的唯一标识ID
    var recordID = mData.currentTarget.dataset.which;
    console.log(recordID);
    wx.navigateTo({
      url: '/pages/userinfo/footprint_details_page/footprint_details_page?id='+recordID,
    })
  }
})