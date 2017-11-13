// 命名空间 json
// 模块化封装
var MusicPlayer = {
    // $  由jq找到元素DOM
    // 写成null  性能好一点  推后执行
    // 将页面打开时的高峰时间，少做事，做最核心的
    
    player: null,
    $bg: null,
    playList:[],
    currentIndex: 0,
    currentSong:null,
    $songName: null,
    $artist: null,
    // 唱针
    $needle: null,
    // 播放按钮
    $playBtn: null,
    $pauseBtn: null,
    // 碟片封面
    $diskCover: null,
    $album: null,
    init: function(){
        // 基于jquery框架  DOM查询
        // $  document.querySelectorAll()
        this.initData();
        this.updateSong();
        // this.$bg.css({
        //     'background-image': 'url(http://p3.music.126.net/nlleOhU4RFqoa7Rud3cCUg==/109951163050635616.jpg)'
        // });
    },
    initData: function(){
        // jquery封装后的元素是一个jquery 对象
        this.player = document.getElementById('player');
        this.$bg = $('#bg');   
        this.$artist = $('#artist');
        this.$songName = $('#songName'); 
        this.currentSong = this.playList[this.currentIndex];
        this.$needle = $('#needle');
        this.$diskCover = $('.disk-cover');
        this.$album = $('.album');
        this.$playBtn = $('#controls .play');
        this.$pauseBtn = $('#controls .pause')
        // console.log(this.$bg);
       
    },
    updateSong: function(){
        // 更新界面的代码
        // html() === innerHTML
        // text(文字) == innerText
        this.$songName.text(this.currentSong.name);
        this.$artist.text(this.currentSong.artists[0].name);
        this.$bg.css({
            'background-image': 'url(' + this.currentSong.artists[0].picUrl + ')'
        });

        // attr 设置html标签的属性
        this.$album.attr('src',this.currentSong.artists[0].img1v1Url);
        // console.log(this.currentSong.mp3Url);
        // this.player
         this.player.src = this.currentSong.mp3Url;
         this.play();
    },
    play: function(){
        this.player.play();
        // 一个函数只做一件事情
        this.moveNeedle(true);
        this.changeAnimationState(this.$diskCover,'running');
        this.$playBtn.hide();
        this.$pauseBtn.show();
    },
    pause: function(){
        this.player.pause();
        this.moveNeedle(false);
        this.changeAnimationState(this.$diskCover,'paused');
        this.$playBtn.show();
        this.$pauseBtn.hide();
    },
    moveNeedle: function(play){
        if(play){
            this.$needle.removeClass('pause-needle').addClass('resume-needle');
            // this.$needle.removeClass('resume-needle').addClass('pause-needle');
        }else{
            // this.$needle.removeClass('pause-needle').addClass('resume-needle');
            this.$needle.removeClass('resume-needle').addClass('pause-needle');
        }
    },
    changeAnimationState: function($ele,state){
        $ele.css({
            'animation-play-state':state,
            '-webkit-animation-play-state':state
        });
    }
}


window.onload = function(){
    // ajax js 请求数据
    var url = './resource/play_list.json';
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            MusicPlayer.playList = data.result.tracks;
            MusicPlayer.init();
            console.log(MusicPlayer.playList);
            console.log(data.result.tracks[0].artists[0].picUrl);
        }
    })
   
}