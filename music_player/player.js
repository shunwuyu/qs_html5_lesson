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
	currentRunTime: 0,
	recordTime: null,
	recordBtn: null,
	$bg: null,
	$songName: null,
	$album: null,
	$artist: null,
	// 唱针
	$needle: null,
	// 播放按钮
	$playBtn: null,
	$pauseBtn: null,
	// 碟片封面
	$diskCover: null,
	$totalTime: null,
	$currentTime:null,
	$processBtn : null,
	initData: function () {
		//jq封装后的元素是一个jq对象
		this.player = document.getElementById('player');
		this.$bg = $('#bg');
		this.$artist = $('#artist');
		this.$songName = $('#songName');
		this.currentSong = this.playList[
			this.currentIndex];
		this.$needle = $('#needle');
		this.$diskCover = $('.disk-cover');
		this.$totalTime = $('#totalTime');
		this.$currentTime = $('#currentTime');
		this.$processBtn = $('.process-btn');
		// this.currentSong = this.playList...;
		// console.log(this.$bg);
	},
	updateSong: function () {
		// 更新界面的代码
		// this.$songName.text(this.currentSong.)
		// html(html) === innerHTML 
		// text(文字) === innerText
		var that = this;
		this.$songName.text(this.currentSong.name);
		this.$totalTime.text(timeMake.MillisecondToDate(this.currentSong.hMusic.playTime));
		this.$artist.text(this.currentSong.artists[0].name);
		this.$bg.css({
			'background-image': 'url(' +
			this.currentSong.artists[0].picUrl + ')'
		});
		// attr 设置html标签的属性
		this.$album = $('.album');
		this.$album.attr('src', this.currentSong.artists[0].img1v1Url);

		this.$playBtn = $('#controls .play');
		this.$pauseBtn = $('#controls .pause');
		//音乐响起 
		// console.log(this.currentSong.mp3Url);
		this.player.src = this.currentSong.mp3Url;
		// this.play();
		// 唱针？ 唱片，旋转起来，进度条。。。

		// this.$album.attr()


		//更新按钮和当前播放时间
		this.$processBtn.css({
				'right': -13  + 'px'
			});
		this.$currentTime.text('00:00');
	},
	
	next: function () {
		this.currentRunTime =0;
		if (this.currentIndex >= this.playList.length - 1)
			this.currentIndex = 0;
		else
			this.currentIndex += 1;
		// console.log(this.currentIndex);
		this.init();
	},
	prev: function () {
		this.currentRunTime =0;
		if (this.currentIndex == 0)
			this.currentIndex = this.playList.length - 1
		else
			this.currentIndex -= 1;
		// console.log(this.currentIndex);
		this.init();
	},
	play: function () {      //开始播放
		this.player.play();
		// 一个函数最好只做一件事
		this.moveNeedle(true);
		this.changeAnimationState(this.$diskCover, 'running');
		this.$playBtn.hide();
		this.$pauseBtn.show();
		this.startTime();
	},
	pause: function () {       //停止播放
		this.player.pause();
		this.moveNeedle(false);
		this.changeAnimationState(this.$diskCover, 'paused');
		this.$playBtn.show();
		this.$pauseBtn.hide();
		this.stopTime();
	},
	startTime:   function ()//开始计时
	{
		var that = this;

		this.recordTime = setInterval(function () {
			that.currentRunTime += 1;
			if(that.currentRunTime*100 >=that.currentSong.hMusic.playTime)
			{
				that.next();
			}
			
			// console.log(timeMake.MillisecondToDate(180000));
			var time = timeMake.MillisecondToDate2(that.currentRunTime);
			// console.log(time);
			// console.log(time);
			that.$currentTime.text(time);
			// that.$currentTime.text(that.currentRunTime);
		}, 100);
		this.recordBtn =setInterval(function () {
			var proecss = that.currentRunTime*100/that.currentSong.hMusic.playTime;
			// console.log(proecss);
			that.$processBtn.css({
				'right': -13 -proecss*270 + 'px'
			});
		}, 1);
	},


	stopTime: function ()//暂停计时
	{
		window.clearInterval(this.recordTime);
		window.clearInterval(this.recordBtn);
	},

	changeAnimationState: function ($ele, state) {
		$ele.css({
			'animation-play-state': state,
			'-webkit-animation-play-state': state,
		});
	},

	moveNeedle: function (play) {
		if (play)
			// $('.play-needle').addClass('resume-needle');   
			this.$needle.removeClass('.play-needle').addClass('resume-needle');
		else
			// $('.play-needle').removeClass('resume-needle');
			this.$needle.removeClass('resume-needle').addClass('.play-needle');
	},
	init: function () {
		this.initData();

		this.updateSong();
		// console.log(this.currentSong);
	}
}
window.onload = function () {
	// ajax js 请求数据
	var url = './resource/play_list.json';
	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'json',
		success: function (data) {
			// console.log(data.result.tracks[0].mp3Url);

			MusicPlayer.playList =
				data.result.tracks;
			MusicPlayer.init();
		}
	})

}

var timeMake ={
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
		return time;
	},
	MillisecondToDate2: function (msd) {
		var time = parseFloat(msd) /10;
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

		return time;
	},
	getzf : function(num) {
		if (parseInt(num) < 10) {
			num = '0' + num;
		}
		return num;
	}
}
