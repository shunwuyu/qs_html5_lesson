// 命名空间，模块化封装
var MusicPlayer = {
    // 将页面打开时的高峰时间，少做事，做最核心的
    playList: [],
    $bg: null,
    $songName: null,
    $artist: null,
    $currentSong: null,
    initData: function () {
        this.$bg = $('#bg');
        console.log(this.$bg);
    },
    updataSong: function () {
        
    },
    init: function () {
        // $由jquery找到元素DOM
        this.initData();
        // this.$bg = $('#bg');
        this.updataSong();
        // this.$bg.css({
        //     'background-image' : 'url(http://p3.music.126.net/nlleOhU4RFqoa7Rud3cCUg==/109951163050635616.jpg)'
        // })
    }
}
window.onload = function () {
    // ajax js 数据请求
    var url = './resource/play_list.json';
    $.ajax({ 
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            MusicPlayer.playList = data.result.tracks;
            MusicPlayer.init();
            // console.log(data.result.coverImgUrl);
            // console.log(data.result.tracks);
        }
    });
    
}