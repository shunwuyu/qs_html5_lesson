// 命名空间 json
// 模块化封装
var MusicPlayer = {
    // $  由jq找到元素DOM
    // 写成null  性能好一点  推后执行
    // 将页面打开时的高峰时间，少做事，做最核心的
    
    player: null,
    $bg: null,
    // 歌曲库
    playList:[],
    currentIndex: 0,
    // 当前歌曲
    currentSong: null,
    $currentTime: null,
    currentWorkingTime: 0,
    recordWorkingTime: null,
    recordProcessBtn: null,
    // 歌曲名
    $songName: null,
    // 歌手名字
    $artist: null,
    // 唱针
    $needle: null,
    // 播放按钮
    $playBtn: null,
    $pauseBtn: null,
    // 碟片封面
    $diskCover: null,
    $album: null,
    // 歌曲时间
    $totalTime: null,
    // 进度条
    $rdy: null,
    // 进度条按钮
    $processBtn: null,
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
        this.$pauseBtn = $('#controls .pause');
        this.$totalTime = $('#totalTime');
        this.$currentTime = $('#currentTime');
        this.$rdy = $('.rdy');
        this.$processBtn = $('.process-btn');
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
        this.$totalTime.text(timeMake.MillisecondToDate(this.currentSong.hMusic.playTime));
        // console.log(this.currentSong.mp3Url);
        // this.player
         this.player.src = this.currentSong.mp3Url;
        //  this.play();
         this.$currentTime.text('00:00');
         this.$processBtn.css({
            'left': 0 + 'rem'
         });

    },
    play: function(){
        this.player.play();
        // 一个函数只做一件事情
        this.moveNeedle(true);
        this.changeAnimationState(this.$diskCover,'running');
        this.$playBtn.hide();
        this.$pauseBtn.show();
        this.startTime();
    },
    pause: function(){
        this.player.pause();
        this.moveNeedle(false);
        this.changeAnimationState(this.$diskCover,'paused');
        this.$playBtn.show();
        this.$pauseBtn.hide();
        this.stopTime();
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
    },
    startTime: function(){
        var that = this;
        // 一秒钟进度按钮移动的距离
        var perDistance = (that.$rdy.width() / (that.currentSong.hMusic.playTime / 10) / 20);
        // console.log(that.currentSong.hMusic.playTime);
        this.recordWorkingTime = setInterval(function(){
            that.currentWorkingTime ++;
            // console.log(that.currentWorkingTime);
            // 每100毫秒currentWorkingTime加1，每1秒currentWorkingTime就加10，
            // 第一首歌曲189秒，只有currentWorkingTime的100倍，189秒后currentWorkingTime达到189000。
            // 当currentWorkingTime*1000大于等于一个歌曲的时间时，播放下一首
            if(that.currentWorkingTime * 100 >= that.currentSong.hMusic.playTime){
                that.next();
            }

            var time = timeMake.MillisecondToDate2(that.currentWorkingTime);
            console.log(time);
            // console.log(that.currentTime);
            that.$currentTime.text(time);  
            // console.log(time);
        //  每100毫秒执行一次函数  
            console.log(that.currentWorkingTime);
            that.$processBtn.css({
            'left':100* perDistance * (that.currentWorkingTime /10) + 'rem'
            });
         },100);
        
        // this.recordProcessBtn = setInterval(function(){
        //     //  console.log(that.currentWorkingTime);
        //      that.$processBtn.css({
                // 'left':100* perDistance * (that.currentWorkingTime /10) + 'rem'
        //     }); 
        //  },100);
        
        console.log(that.$processBtn.left);
        // console.log(this.currentSong.hMusic.playTime);
        // console.log(perDistance);
    },
    stopTime: function(){
        window.clearInterval(this.recordWorkingTime);
        window.clearInterval(this.recordWorkingTime );
    },
    next: function(){
        if(this.currentIndex >= this.playList.lenth - 1){
            this.currentIndex = 0;
        }else{
            this.currentIndex++;
        }
        this.currentWorkingTime = 0;
        this.init();
    },
    prev: function(){
        if(this.currentIndex == 0){
            this.currentIndex = this.playList.length - 1;
        }else{
            this.currentIndex--;
        }
        this.currentWorkingTime = 0;
        this.init();
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
            console.log(MusicPlayer.playList[0]);
            console.log(data.result.tracks[0].artists[0]);
            console.log(MusicPlayer.playList[0].mMusic.playTime);
        }
    })
   
}

 var timeMake = {
	MillisecondToDate: function (msd) {
		var time = parseFloat(msd) / 1000;
		// console.log(this);
		if (null != time && "" != time) {
			if (time > 60 && time < 60 * 60) {
				time = this.getzf(parseInt(time / 60.0)) + ':' + this.getzf(parseInt((parseFloat(time / 60.0) -
					parseInt(time / 60.0)) * 60));
			}
			else if (time >= 60 * 60 && time < 60 * 60 * 24) {
				time = parseInt(time / 3600.0) + ":" + parseInt((parseFloat(time / 3600.0) -
					parseInt(time / 3600.0)) * 60) + ":" +
					parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
						parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60);
			}
			else {
				time = parseInt(time);
			}
		}
        // console.log(time);
		return time;
	},
	MillisecondToDate2: function (msd) {
		var time = parseFloat(msd) / 10;
		// console.log(this);
		if (null != time && "" != time) {
			if (time > 60 && time < 60 * 60) {
				time = this.getzf(parseInt(time / 60.0)) + ':' + this.getzf(parseInt((parseFloat(time / 60.0) -
					parseInt(time / 60.0)) * 60));
			}
			else {
				time = '00:'+
				this.getzf(parseInt(time % 60.0));
			}
		}
        // console.log(time);
		return time;
	},
	getzf : function(num) {
		if (parseInt(num) < 10) {
			num = '0' + num;
		}
        // console.log(num);
		return num;
	}
    }