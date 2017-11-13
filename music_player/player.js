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
	// 碟片封面
	$diskCover: null,
	$album: null,
	//总时间
	$totalTime:0+":"+0,
	//当前时间
	$currentTime:0+":"+0,
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
		this.$totalTime = $('span#totalTime');
		this.$currentTime = $('span#currentTime');
		this.t = 0;
		// console.log(this.t);
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
		this.$totalTime.text(this.formatetime(this.currentSong.duration));
		console.log(this.currentSong.duration);
		this.$bg.css({
			'background-image': 'url(' +
			this.currentSong.artists[0].picUrl + ')'
		});
		// attr 设置html标签的属性
		this.$album.attr('src', 
		this.currentSong.artists[0].img1v1Url);
		// console.log(this.currentSong.mp3Url);
		this.player.src = this.currentSong.mp3Url;
		this.play();
		// 追债 唱针？ 唱片，旋转起来？ 进度条，....
	},
	//补零
	toDub: function(t){
		
		return (t<10?"0"+t:""+t);
	},
	timeCount: function() {
		this.t++;
		// console.log(this.t);
		var m = parseInt(this.t / 60);
		var s = parseInt(this.t % 60);

		// result = this.toDub(m) + ":" + this.toDub(s);
		// return result;
	},
	
	//总时间
	formatetime:function(value) {
		var sec = parseInt(value/1000); //秒
		var min = 0; //分
		var result = min+":"+sec;
		console.log(sec);
		if (sec > 60) {
			min = parseInt(sec / 60);
			sec = parseInt(sec % 60);
		}
		result = this.toDub(min)+":"+this.toDub(sec);
    	return result;
	},
	play: function() {
		this.player.play();
		// 一个函数最好只做一件事
		this.moveNeedle(true);

		this.t = 0;
		this.$currentTime.text(''+setInterval(this.timeCount,1000/60));
		console.log(setInterval(this.timeCount,1000/60));
		this.changeAnimationState(
			this.$diskCover, 'running');
		this.$playBtn.hide();
		this.$pauseBtn.show();
	},
	pause: function() {
		this.player.pause();
		this.moveNeedle(false);
		this.changeAnimationState(this.$diskCover, 'paused');
		this.$playBtn.show();
		this.$pauseBtn.hide();
	},
	next: function() {
		if(this.currentIndex === this.playList.length){
			alert("当前已经是最后一首歌曲");
		} else {
			this.currentIndex = this.currentIndex + 1;
			this.init();
		}
		
	},
	prev:function() {
		if(this.currentIndex === 0) {
			alert("当前已经是第一首歌曲");
		} else {
			this.currentIndex = this.currentIndex - 1;
			this.init();
		}
	},
	changeAnimationState: function($ele, state) {
		$ele.css({
			'animation-play-state': state,
			'-webkit-animation-play-state': state
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
			MusicPlayer.playList = 
				data.result.tracks;
			MusicPlayer.init();
			console.log(data.result.tracks.length);
		}
	})
}