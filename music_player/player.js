// 命名空间 json
// 模块化封装
var MusicPlayer = {
    // 背景元素作为属性添加
    // $由jquery找到的元素DOM
    // undefined 与null的区别要注意
    // $bg写为null性能会好一点，可以推后执行
    // 将页面打开时的高峰时间段，尽量少做事，做最核心的
    playList:[],
    currentIndex:0,
    currentSong:null,
    $bg:null,
    $songName:null,
    $artist:null,
    initData:function(){
        this.$bg = $('#bg');
        this.$artist =$('#artist');
        this.$songName = $('#songName');
        this.currentSong = this.playList.currentSong;//注意

    },
    updataSong:function(){
        // 所有更新界面的代码
        this.$songName.text(this.currentSong.$songName);//注意
    },
    init:function(){
        this.initData();
        this.updataSong();

        // 基于jquery框架，DOM查询
        // $ document.querySelectorAll()
        // this.$bg = $('#bg');
        // this.$bg = document.getElementById('bg');
        // console.log(this.$bg);
        // this.$bg.css({
        //     'background-img':'http://p3.music.126.net/nlleOhU4RFqoa7Rud3cCUg==/109951163050635616.jpg'
        // });
    }
}
window.onload = function() {
    // ajax js请求数据
    // ajax 是通过服务器访问的，必须打开sync
    var url = './resource/play_list.json';
    $.ajax({
        url: url,
        type:'GET',
        dataType:'json',
        success:function(data){
            MusicPlayer.playList = data.result.tracks;
            MusicPlayer.init();
            console.log(data.result.tracks[0].artists[0].name);
        }
    })
	
}
