Page({
    data: {
        address: '未设置地址'
    },
    // 跳转函数
    gotoStorage: function() {
        // navigateTo保留当前页面，跳转到应用内的某个页面
        wx.navigateTo({
            url:'../storage/storage'
        })
    },
    // 页面加载完成
     onLoad: function() {
        console.log('onLoad');
     },
     onReady: function() {
        console.log('onReady');
     },
     onShow: function() {
         var that = this;
         wx.getStorage({
             key: 'address',
             success: function(res) {
                console.log(res);
                if(res.data.length > 0) {
                    that.setData({
                        address: res.data
                    });
                }
             }
         })
        console.log('onShow');
     },
     onHide: function() {
        
        this.setData({
            'hello' : '欢迎再次回来'
        });

        console.log('onHide');
     },
     onUnLoad: function() {
        console.log('onUnLoad');
     },
})


