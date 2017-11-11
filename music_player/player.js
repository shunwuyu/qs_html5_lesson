// 命名空间  json 负责
// 进行 模块化封装
var interval;
var MusicPlayer = {
    // $由jQuery找到的元素DOM
    // 先不用 document.getElementById
    // 性能好一点， 让赋值推后执行  再在window.onload里面的init执行
    // 将页面打开时的高峰时间段，少做事，做最核心的
    player: null,
    playList: [],
    currentIndex: 0,
    currentSong: null,
    $bg: null,
    $songName: null,
    $artist: null,
    // 唱针
    $needle: null,
    // 播放按钮
    $playBtn: null,
    $pauseBtn: null,
    // 碟片封面
    $diskCover:null,
    $album: null,
    
    // 上一首和下一首歌的切换
    $pre: null,
    $next: null,
    // 歌曲进度  保存歌曲总时间的倒计时  保存歌曲进度的计时
    $totalTime: null,
    $currentTime: null,
    // 进度条上的小圆点
    $cur: null,
    initDate: function () {
        // jQuery封装后  元素是一个jQuery对象        
        this.player = document.getElementById('player');
        this.$bg = $('#bg');
        this.$artist = $('#artist');
        this.$songName = $('#songName');
        this.currentSong = this.playList[this.currentIndex];
        this.$needle = $('#needle');
        this.$diskCover = $('.disk-cover');
        this.$album = $('.album');
        this.$playBtn = $('#controls .play');
        this.$pauseBtn = $('#controls .pause');
        
        this.$pre = $('#controls .pre');
        this.$next = $('#controls .next');
        this.$totalTime = $('#totalTime');
        this.$currentTime = $('#currentTime');
        this.$cur = $('.process-bar .cur');
        this.player.src = this.currentSong.mp3Url;
        this.play();
        // console.log(playList);
    },
    prev: function () {
        this.resetBar();
        console.log(this.currentIndex);
        if (this.currentIndex <= 0){
            this.currentIndex = 274;
        }
        this.currentIndex --;
        this.updatePrevNext();
        // this.updateTime();
    },
    next: function () {
        this.resetBar();
        console.log(this.currentIndex);
        if (this.currentIndex >= 274) {
            this.currentIndex = 0;
        }
        this.currentIndex ++;
        this.updatePrevNext();
        // this.updateTime();
    },
    // 每切换一首歌  更新当前计时和进度条
    resetBar: function () {
        this.$cur.css ({
            'left': '0px'
        });
        this.$totalTime.text(this.calcuTime(parseInt(this.currentSong.duration/1000)));
        this.$currentTime = 0;
        this.clearInterval(interval);
        this.updateTime();
    },
    updatePrevNext: function () {
        this.currentSong = this.playList[this.currentIndex];
        this.player.src = this.currentSong.mp3Url;
        this.play();
        this.updateSong();
    },
    updateSong: function () {
        // 更新界面的代码
        // html(html) === innerHTML
        // text(文字) === innerText
        this.$songName.text(this.currentSong.name);
        this.$artist.text(this.currentSong.artists[0].name);
        // 更新当前播放歌曲播放时间的计时和歌曲倒计时
        this.updateTime();
        this.$bg.css ({
            'background-image': 'url('+ this.currentSong.artists[0].picUrl +')'
        });
        // attr 设置HTML标签的属性
        this.$album.attr('src', this.currentSong.artists[0].img1v1Url);
    },
    updateTime: function () {
        // 显示歌曲的时长
        var time = parseInt(this.currentSong.duration/1000);
        this.$totalTime.text(this.calcuTime(time));
        // this.updateTotalTime(time);
        var currentTime = 0;
        // this.updateCurrentTime(currentTime);
        interval = setInterval(function (self) {
            return function() {
                time --;
                self.$totalTime.text(self.calcuTime(time));
                currentTime ++;
                self.$currentTime.text(self.calcuTime(currentTime));
                console.log(currentTime/time*280);
                self.$cur.css ({
                    'left': currentTime/time*280 + 'px'
                });
                if (currentTime >= time){
                    self.$cur.css ({
                        'left': '280px'
                    });
                    self.next();
                }
            }
        }(this),1000);
    },
    updateTotalTime: function (time) {
        setInterval(function (self) {
            return function() {
                time --;
                self.$totalTime.text(self.calcuTime(time));
            }
        }(this),1000);
    },
    updateCurrentTime: function (currentTime) {
        setInterval(function (self) {
            return function() {
                currentTime ++;
                self.$currentTime.text(self.calcuTime(currentTime));
            }
        }(this),1000);
    },
    calcuTime: function (time) {
        var showTime = parseInt(time /3600.0) +":"+ parseInt((parseFloat(time /3600.0) -  
        parseInt(time /3600.0)) *60) +":"+  
        parseInt((parseFloat((parseFloat(time /3600.0) - parseInt(time /3600.0)) *60) -  
        parseInt((parseFloat(time /3600.0) - parseInt(time /3600.0)) *60)) *60); 
        return showTime;
    },
    play: function () {
        this.player.play();
        // 一个函数只做一件事
        this.moveNeedle(true);
        this.changeAnimationState(this.$diskCover,'running')
        this.$playBtn.hide();
        this.$pauseBtn.show();
    },
    pause: function () {
        this.player.pause();
        this.moveNeedle(false);
        this.changeAnimationState(this.$diskCover, 'paused');
        this.$playBtn.show();
        this.$pauseBtn.hide();
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