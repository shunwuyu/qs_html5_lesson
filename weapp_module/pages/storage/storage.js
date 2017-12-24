// pages/storage/storage.js
Page({
  data: {
    address: "",
  },
  bindAddressInput: function(e) {
    this.setData({
      address: e.detail.value
    })
  },
  bindSavaAddress: function() {
    // address? mvvm模式，不找dom元素
    // setStorage是用于存起来 最多存10M
    // 最近看的十篇文章，实现离线阅读，用户信息，配置
    wx.setStorage({
      key: "address",
      data: this.data.address,
      success: function() {
        wx.showToast({
          title: "地址保存成功",
          icon: "success",
          duration: 2000,
        })
      }
    })
  },
  bindClearAddress: function() {
    wx.clearStorage();
    this.setData({
      address: "请输入您的地址"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'address',
      success: function(res) {
        that.setData({
          'address' : res.data
        })
      }
    })
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