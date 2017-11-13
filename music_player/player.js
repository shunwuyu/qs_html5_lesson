// 命名空间  json 负责
// 进行 模块化封装
var MusicPlayer = {
    // $由jQuery找到的元素DOM
    // 先不用 document.getElementById
    // 性能好一点， 让赋值推后执行  再在window.onload里面的init执行
    // 将页面打开时的高峰时间段，少做事，做最核心的
    c: '00:00',
    t:null,
    player: null,
    playList: [],
    currentIndex: 0,
    currentSong: null,
    $bg: null,
    $songName: null,
    $artist: null,
    $currentTime:null,
    $duration:null,
    // 唱针
    $needle: null,
    // 播放按钮
    $playBtn: null,
    $pauseBtn: null,
    // 碟片封面
    $diskCover:null,
    $album: null,
    initDate: function () {
        // jQuery封装后的元素是一个jQuery对象        
        this.player = document.getElementById('player');
        this.$bg = $('#bg');
        this.$artist = $('#artist');
        this.$songName = $('#songName');
        this.currentSong = this.playList[this.currentIndex];
        this.$duration = $('span#totalTime');
        this.$currentTime = $('span#currentTime');
        this.$needle = $('#needle');
        this.$diskCover = $('.disk-cover');
        this.$album = $('.album');
        this.$playBtn = $('#controls .play');
        this.$pauseBtn = $('#controls .pause');
        this.player.src = this.currentSong.mp3Url;
        
        this.play();
        // console.log(playList);
    },
    play: function () {
        this.player.play();
        // 一个函数只做一件事
        this.moveNeedle(true);
        this.changeAnimationState(this.$diskCover,'running')
        this.$playBtn.hide();
        this.$pauseBtn.show();
        this.timeCount();
    },
    pause: function () {
        this.player.pause();
        this.moveNeedle(false);
        this.changeAnimationState(this.$diskCover, 'paused');
        this.$playBtn.show();
        this.$pauseBtn.hide();
    },
    prev:function () {
        
        this.currentIndex--;
        this.moveNeedle(true);
        this.currentSong = this.playList[this.currentIndex];
        
        this.updateSong();
    },
    next: function () {
        
        this.currentIndex++;
        this.moveNeedle(true);
        this.currentSong = this.playList[this.currentIndex];
        this.updateSong();

    },
    timeCount: function(){
        this.$currentTime.text(this.c);
        this.c=this.c+1
        this.t=setTimeout("timedCount()",1000)
    },
    loop:function () {
        
    },
    moveNeedle: function (play) {
        if(play){
            this.$needle.removeClass('.pause-needle').addClass('resume-needle');            
        } else {
            this.$needle.addClass('.pause-needle').removeClass('resume-needle');
        }
    },
    changeAnimationState: function ($ele, state) {
        $ele.css ({
            'animation-play-state': state,
            '-webkit-animation-play-state': state
        });
    },
    updateSong: function () {
        // 更新界面的代码
        // html(html) === innerHTML
        // text(文字) === innerText
        this.$songName.text(this.currentSong.name);
        this.$artist.text(this.currentSong.artists[0].name);
        var second = parseInt((this.currentSong.duration/1000)%60);
        var minute = parseInt((this.currentSong.duration/1000)/60);
        this.$duration.text(minute+":"+second);
        this.$bg.css ({
            'background-image': 'url('+ this.currentSong.artists[0].picUrl +')'
        });
        // attr 设置HTML标签的属性
        this.$album.attr('src', this.currentSong.artists[0].img1v1Url);
        
    },
    init: function () {
        // $  jQuery的查找
        // 基于jQuery框架， DOM查询
        // $ document.querySelectorAll()
        playList: [];
        this.initDate();
        this.updateSong();
        // this.$bg = $('#bg');
		// console.log(this.$bg);
		// this.$bg.css({
		// 	'background-image': 'url(http://p3.music.126.net/nlleOhU4RFqoa7Rud3cCUg==/109951163050635616.jpg)'
		// })
	}
}

window.onload = function () {
    // ajax  js  请求数据
    // ajax 向文件发送请求
    var url = './resource/play_list.json';
    $.ajax({
        url: url,
        type:'GET',
        dataType:'json',
        success:function(data){
            MusicPlayer.playList = data.result.tracks;
            MusicPlayer.init();
            console.log(MusicPlayer.playList);
            // console.log(data.result.tracks[0].artists[0].name);
        }
    })
}