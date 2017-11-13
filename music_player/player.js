

// 命名空间  json
// 模块化封装
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
	$bg: null,
	$songName: null,
	$artist: null,
	// 唱针
	$needle: null,
	// 播放按钮
	$playBtn: null,
    $pauseBtn: null,
    $preBtn: null,
    $nextBtn: null,
	// 碟片封面
	$diskCover: null,
	$album: null,
	//显示时间
	$currentTime: 0,
	$totalTime: null,
	//进度条
	$processBtn: null,
	//显示进度的光标
	$curAnimation: null,
	$cur: null,
	//当前歌曲播放时间
	currentTime: 0,

	initData: function() {
		// jquery封装后的元素是一个jquery 对象
		this.player = 
		document.getElementById('player');
		this.$bg = $('#bg');
		this.$artist = $('#artist');
		this.$songName = $('#songName');
		this.currentSong = this.playList[
			this.currentIndex];
		this.$needle = $('#needle');
		this.$diskCover = $('.disk-cover');
		this.$album = $('.album');
		this.$playBtn = $('#controls .play');
        this.$pauseBtn = $('#controls .pause');
        this.$preBtn = $('#controls .pre');
		this.$nextBtn = $('#controls .next');
		this.$totalTime = $("#totalTime");
		this.$currentTime = $("#currentTime");
		this.$curAnimation = $(".process-cur-animation");
		this.$processBtn = $("#processBtn");
		// this.$rdy = $(".rdy");
		// this.rdy_width = this.$rdy.wid
		// this.currentSong = this.playList...;
		// console.log(this.rdy);
		// console.log(this.$diskCover);
		// console.log(this.$totalTime.width);
	},
	updateSong: function() {
		// 更新界面的代码
		// this.$songName.text(this.currentSong.)
		// html(html) === innerHTML 
        // text(文字) === innerText
        this.currentSong = this.playList[
			this.currentIndex];
        this.$songName.text(this.currentSong.name);
		this.$artist.text(this.currentSong
			.artists[0].name);
		this.$bg.css({
			'background-image': 'url(' +
			this.currentSong.artists[0].picUrl + ')'
		});
		// attr 设置html标签的属性
		this.$album.attr('src', 
			this.currentSong.artists[0].img1v1Url);
			this.currentTime = 0;
		//设置currentHtml的内容
		this.$currentTime.text(this.changeTimeForm(this.currentTime));
		// console.log(this.changeTimeForm(1110)+'111');
		this.$totalTime.text(
			this.changeTimeForm(this.currentSong.duration)
		);
		this.setCurMoveTime(this.$curAnimation,this.getCurMoveTime());
		console.log();
        this.player.src = this.currentSong.mp3Url;
        
		this.play();
		// 追债 唱针？ 唱片，旋转起来？ 进度条，....
	},
	changeTimeForm: function(time) {//转换时间的显示格式
		var t1,t2;
		if(time >= 0){
			t1 = parseInt(time / 1000);
			t2 = t1 % 60;
			t1 = parseInt(t1 / 60);
			// console.log("diercit1" + t1);
			if(t1 <10)
				t1 = "0" + t1;
			if(t2 <10)
				t2 = "0" + t2;
		}
		return t1 + ":" + t2;1
	},
	getCurMoveTime: function() {//光标移动的时间
		var v = this.currentSong.duration / 1000;
		return v + 's';
	},
	setCurMoveTime: function($ele,time) {
		$ele.css({
			'-webkit-animation-duration': time,
			'animation-duration': time,
		});
	},
	play: function() {//播放
		this.player.play();
		// 一个函数最好只做一件事
		this.moveNeedle(true);
		this.changeAnimationState(
			this.$diskCover, 'running');
		this.changeAnimationSidesway(this.$curAnimation,'running')
		this.$playBtn.hide();
		this.$pauseBtn.show();
		this.changeForCuttrenTime('play');
	},
	pause: function() {//暂停
		this.player.pause();
		this.moveNeedle(false);
		this.changeAnimationState(
			this.$diskCover, 'paused');
		this.changeAnimationSidesway(this.$curAnimation,'paused')
		this.changeForCuttrenTime('pause');
		this.$playBtn.show();
		this.$pauseBtn.hide();
    },
    prev: function() {//上一首
        this.player.pause();
        if(this.currentIndex != 0)
            this.currentIndex--;
        else 
            this.currentIndex = this.playList.length - 1;
		// console.log(this.playList.length);
		int = window.clearInterval(int);
        this.updateSong();
    },
    next: function() {//下一首
        this.player.pause();
        if(this.currentIndex != this.playList.length - 1)
            this.currentIndex++;
        else 
			this.currentIndex = 0;
		int = window.clearInterval(int);
        this.updateSong();
    },
	changeForCuttrenTime(state) {//当前播放时间变化的函数
		var that = this;
		if(state === "play"){
			int = self.setInterval(function(){
				that.currentTime += 1000;
				that.$currentTime.text(that.changeTimeForm(that.currentTime));
				
				if(that.currentTime >= that.currentSong.duration+1000){
					that.currentTime = 0;
					int = window.clearInterval(int);
					that.next();
				}
			},1000);
		}else if(state === "pause")
			int=window.clearInterval(int);
	},
	changeAnimationState: function($ele, state) {
		$ele.css({
			'animation-play-state': state,
			'-webkit-animation-play-state': state,
		});
	},
	changeAnimationSidesway: function($ele, state) {
		$ele.css({
			'animation-play-state': state,
			'-webkit-animation-play-state': state,
		});
	},
	moveNeedle: function(play) {
		if (play) {
			this.$needle
				.removeClass('pause-needle')
				.addClass('resume-needle');
		} else {
			this.$needle
			.removeClass('resume-needle')
			.addClass('pause-needle');
		}
	},
	init: function() {
		this.initData();
		this.updateSong();
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
            console.log(data.result.tracks);
			MusicPlayer.playList = 
				data.result.tracks;
			MusicPlayer.init();
		}
	})
	
}
