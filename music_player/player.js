// 命名空间  json
// 模块化封装
var MusicPlayer = {
    // $由jquery找到元素DOM
    // undefined null 
    // 性能好一点， 推后执行
        // 将页面打开时的高峰时间，少做事，做最核心
    player: null,
    playList: [],
    currentIndex: 0,
    currentSong: null,
    //时间
    $currentTime: null,
    $totalTime: null,
    totalTime: null,
    //进度条
    processBar: null,
    cur: null,
    processBtn: null,
    offsetW: null,
    //是否在播放
    isAction: true,
    //是否单曲循环
    isLoop: false,
    $bg: null,
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
    initData: function() {
            // jQuery封装后的元素是一个jQuery对象
            this.player = document.getElementById('player');
            this.$bg = $('#bg');
            this.$artist = $('#artist');
            this.$songName = $('#songName');
            this.currentSong = this.playList[
            this.currentIndex];
            this.$needle = $('#needle');
            this.$diskCover = $('.disk-cover');
            this.$album = $('.album');
            this.$currentTime = $('#currentTime');
            this.$totalTime = $('#totalTime');
            this.processBar = $('.process-bar');
            this.cur = $('.cur');
            this.processBtn = $('.processBtn');
            this.$playBtn = $('#controls .play');
            this.$pauseBtn = $('#controls .pause');
    // this.currentSong = this.playList...;
    // console.log(this.$bg);
    },
    updateSong: function() {
    // 更新界面的代码
    // this.$songName.text(this.currentSong.)
    // html(html) === innerHTML 
    // text(文字) === innerText
            this.$songName.text(this.currentSong.name);
            this.$artist.text(this.currentSong
                .artists[0].name);
            this.$bg.css({
                'background-image': 'url(' +
            this.currentSong.artists[0].picUrl + ')'
    });
            // attr 设置html标签的属性
            this.$album.attr('src',this.currentSong.artists[0].img1v1Url);
            // 音乐 this.currentSong
            this.player.src = this.currentSong.mp3Url;
            //总时长
            this.totalTime = this.currentSong.audition.playTime;
            this.$totalTime.text(this.secondToTime(parseInt(this.totalTime/1000)));
            this.play();
           
            
        },
    moveNeedle: function(play) {
            if(play) {
                this.$needle.removeClass('pause-needle').addClass('resume-needle');
            } else {
                this.$needle.removeClass('resume-needle').addClass('pause-needle');
            }
        },
    play: function() {
            this.player.play();
            // 一个函数只做一件事
            this.moveNeedle(true);
            this.isAction = true;
            this.changeBar();
            this.changeAnimationState(this.$diskCover, 'running');
            this.$playBtn.hide();
            this.$pauseBtn.show();
            //当歌曲播放完毕          
        },
    pause: function() {
            this.player.pause();
            this.moveNeedle(false);
            this.isAction = false;
            this.changeBar();
            this.changeAnimationState(this.$diskCover, 'paused');
            this.$playBtn.show();
            this.$pauseBtn.hide();
            
        },
    changeAnimationState: function($ele, state) {
            $ele.css ({
                'animation-play-state': state,
                '-webkit-animation-play-state': state,
            })
        },
        //上一首
    prev: function() {
        if(this.player.src != ""){
            this.currentIndex--;
            this.currentSong = this.playList[
                this.currentIndex];
            this.updateSong();
        } else {
            alert("没有歌曲了！")
        }
        },
        //下一首
    next: function() {
        if(this.player.src != ""){
            this.currentIndex++;
            this.currentSong = this.playList[
                this.currentIndex];
            this.updateSong();
        }
        },
        //单曲循环
    loop: function() {
        this.isLoop = true;
        this.player.loop = 'loop';
    },
        //进度条改变
    changeBar: function() {
        if(this.isAction) {
            var self = this;
            timer = setInterval(function(){
                //进度条偏移量
                self.offsetW = parseFloat(self.player.currentTime / self.totalTime * 1000 * (self.processBar.width()-9));
                self.cur.width(self.offsetW);
                //当前播放时间
                self.$currentTime.text(self.secondToTime(self.player.currentTime));
            },1000);
        } else {
            clearInterval(timer);
        }
        
        },
    
        //秒转换时间
    secondToTime: function(second) {
        if(!second) {
            second = 0;
        }
        var time = '';
        var min =Math.floor((second / 60) % 60);
        var sec = Math.floor(second % 60);
        if(sec < 10) {
            sec = '0' + sec;
        }
        
        if(second > 3600) {
            time = '';
        } else if(second >= 600) {
            if(second % 60 === 0) {
                time =  min + ':00';
            } 
            time = min + ':' + sec;
        } else if(second >= 60) {
            if(second % 60 === 0) {
                time =  '0' + min + ':00';
            } else{
            time = '0' + min + ':' + sec;
                }
            } else if(second < 60) {
            time = '00:' + sec;
        }
        return time;
    },

        //初始化
    init: function() {
            this.initData();
            this.updateSong();
            //当前播完播下一首
            this.player.addEventListener("ended", function() {
                this.next();
            });   

    }}
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