// pages/scroll/scroll.js
Page({
  
    /**
     * 页面的初始数据
     */
    data: {
      windowHeight: 0,
      refreshing: false,
      movies: [],
      refreshAnimation: {}
    },
    upper: function() {
      console.log('下拉刷新');
      this.setData({
        refreshing: true
      });
      // 普通函数  call 可以改变一个函数内部的指向
      updateRefreshIcon.call(this);
      wx.request({
        url: 'http://www.easy-mock.com/mock/5a09867f28b23066479b8365/ajaxData/movie',
        complete: (res) => {
          console.log(res);
          var movies = 
              res.data.subjects;
          this.setData({
            movies: movies,
            refreshing: false
          })
        }
      })
    },
    lower: function() {
      // 加载更多的数据
      wx.request({
        url: 'http://www.easy-mock.com/mock/5a09867f28b23066479b8365/ajaxData/movie',
        complete: (res) => {
          console.log(res);
          var movies = 
            this.data.movies.concat(
              res.data.subjects);
          this.setData({
            movies: movies
          })
        }
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      // 小程序来自微信API
      // 硬件和软件系统的基本信息
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            windowHeight: res.windowHeight
          });
          console.log(`屏幕高度: ${res.windowHeight}`);
        }
      });
      // 不和页面显示抢线程
      // 请求数据
      wx.request({
        url: 'http://www.easy-mock.com/mock/5a09867f28b23066479b8365/ajaxData/movie',
        complete: res => {
          console.log(res);
          this.setData({
            movies: res.data.subjects
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
  
  function updateRefreshIcon() {
    var deg = 0;
    console.log('旋转开始了...');
    var animation = wx.createAnimation({
      duration: 5000
    });
    var timer = setInterval(()=> {
      animation.rotateZ(deg).step();
      deg += 360;
      // page data 
    this.setData({
      refreshAnimation:animation.export()
    })
    },5000);
  }
  