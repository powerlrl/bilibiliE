Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLists: [],
    slideShow: [],
    videoLists: [],
    imgSrc: [],
    currenting: 0
  },
  // 改变导航栏的样式
  changActive(e){
    this.setData({
      currenting: e.target.dataset.index
    })
  },
  // 获取导航栏数据
  getNav(){
    let _this = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5d3fa8ed2c68ec5232b52487/bili/navList',
      success(res){
        if(res.data.code == 0){
          _this.setData({
            navLists : res.data.data.navList
          })
        }
      }
    })
  },
  // 获取轮播图数据
  getSlide(){
    let _this = this
    wx.request({
      url:'https://easy-mock.com/mock/5d3fa8ed2c68ec5232b52487/bili/swiperList',
      success(res){
        if(res.data.code == 0){
          _this.setData({
            slideShow: res.data.data.swiperList
          })
        }
      }
    })
  },
  // 获取视频列表
  getVideo(){
    let _this = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res){
        if(res.data.code == 0){
          _this.setData({
            videoLists: res.data.data.videosList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNav();
    this.getSlide();
    this.getVideo();
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
    
  }
})