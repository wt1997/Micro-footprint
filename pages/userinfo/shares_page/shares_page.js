// pages/shares_page/shares_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    all: [
      {
        id: '1',
        lineTime: '19-04',
        nodeColor: 'text-blue',
        bgColor: 'bg-grey',
        mshare: [
          {
            id: '1',
            photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
            description: '我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
            avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
            nickname: '正义天使 凯尔',
            time: '04-15',
            browse: '21',
            awesome: '12',
            mark: '游记',
            comment: '10'
          },
          {
            id: '2',
            photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg',
            description: '我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
            avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg',
            nickname: '堕落的天使 莫甘娜',
            time: '04-14',
            browse: '25',
            awesome: '11',
            mark: '随拍',
            comment: '3'
          },
          {
            id: '3',
            photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg',
            description: '我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
            avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg',
            nickname: '神拳 李青',
            time: '04-12',
            browse: '34',
            awesome: '21',
            mark: '心情',
            comment: '10'
          }
        ]
      },
      {
        id: '2',
        lineTime: '19-03',
        nodeColor: 'text-red',
        bgColor: 'bg-grey',
        mshare: [
          {
            id: '1',
            photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg',
            description: '我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
            avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg',
            nickname: '源计划 联合 艾希',
            time: '03-26',
            browse: '143',
            awesome: '122',
            mark: '风景',
            comment: '65'
          },
          {
            id: '1',
            photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg',
            description: '我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。',
            avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10005.jpg',
            nickname: '源计划 自由 艾克',
            time: '03-22',
            browse: '76',
            awesome: '30',
            mark: '游戏',
            comment: '20'
          }
        ]
      }
      ],
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
  clikCard: function (mData) {
    //记录ID
    var recordID = mData.currentTarget.dataset.which;
    wx.navigateTo({
      url: '/pages/userinfo/footprint_details_page/footprint_details_page?id=' + recordID,
    })
  }
})