//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    activeIndex: 0,
    jobs: []
  },

  changTab:  function(e){
    var type =
     e.target.dataset.index;
    this.setData({
      activeIndex: type
    });
    this.get_job_list(type);
  },
  swiperTab: function(e){
    var type = 
    e.detail.current;
    this.setData({
      activeIndex: type
    });
    this.get_job_list(type);
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  // 获取工作岗位列表
  get_job_list: function(type){
    var that = this;
    wx.request({
      url: 'http://jxufer.cn:3000/api/position',
      method: 'GET',
      data: {
        type: type
      },
      success: function(res){
        if(type==1){
          console.log(res);
          that.setData({
            nursery_list: res.data
        });
        }else if(type==2){
          that.setData({
            earlyTeach_list: res.data
        });
      }else{
        console.log(res);
          that.setData({
          jobs:  res.data.data
        });
        }
      }
    })
  },
  onLoad: function () {
    this.get_job_list("");
  }
})
