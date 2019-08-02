// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentTotalCount: 0,
    commentLists: [],
    otherList: [],
    videoId: 0,
    videoInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getVideo(options.id)
    this.getcomments(options.id)
    this.getOther(options.id)
  },
  // 获取相应的视频
  getVideo(id) {
    let _this = this
    wx.request({
      url: 'https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/videoDetail?id=0',
      success(res) {
        _this.setData({
          videoInfo: res.data.data.videoInfo
        })
      }
    })
  },
  // 获取对应的评论列表
  getcomments(id) {
    let _this = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=' + id,
      success(res) {
        if (res.data.code == 0) {
          _this.setData({
            commentLists: res.data.data.commentData.commentList,
            commentTotalCount: res.data.data.commentData.commentTotalCount
          })
        }
      }
    })
  },
  getOther(id) {
    let _this = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id='+id,
      success(res) {
        if (res.data.code == 0) {
          console.log(res.data.data.othersList)
          _this.setData({
            otherList: res.data.data.othersList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})