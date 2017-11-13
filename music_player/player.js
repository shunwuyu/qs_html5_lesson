// 命名空间 json
// 模块化封装
var MusicPlayer = {
    // $由jquery找到的元素DOM
    // undefied null
    // 性能好一点， 推后执行
    // 将页面打开时的高峰时间，少做事， 做最核心
    playList: [],
    currentIndex: 0,
    currentSong: 0,
    $bg: null, 
    $songName: null,
    $artist:null,
    init: function() {
        // 基于jquery框架， DOM查询
        // $代表document.querySelectorAll()
        // this.$bg = $('#bg');
        // console.log(this.$bg);
        // this.$bg.css({
        //     'background-image': 'url(http://p3.music.126.net/nlleOhU4RFqoa7Rud3cCUg==/109951163050635616.jpg)'
        // })
        this.initData: function() {
            this.$bg = $('#bg');
            this.$artist = $('#artist');
            this.$songName = $('#songName');
            this.currentSong = this.playList.c
        }
        this.initData();
        this.updaSong();
        

    }
    updateSong: function() {
        更新界面的代码
        this.$songName.text(this.currentSong.)
    }
}
window.onload = function() {
    // ajax js 请求数据
    var url = './resource/play_list.json';
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            MusicPlayer.playList = 
                data.result.tracks;
            MusicPlayer.init();
        
        }
    })
    
}