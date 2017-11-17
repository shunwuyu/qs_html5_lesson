// 命名空间  json
// 模块化封装
var MusicPlayer = {
	// $由jquery找到元素DOM
	// undefined null 
	// 性能好一点， 推后执行
	// 将页面打开时的高峰时间，少做事，做最核心
	player: null,
	//存歌曲的数组
	playList: [],
	//播放的为第几首歌
	currentIndex: 0,
    //当前播放的音乐
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
	$totalTime: null,
	initData: function() {
		// jquery封装后的元素是一个jquery 对象
		this.player = 
		document.getElementById('player');
		this.$bg = $('#bg');
		this.$artist = $('#artist');
		this.$songName = $('#songName');
		//  if (this.next){
	 	// this.currentSong = this.playList[
		//  		this.currentIndex];
		//  }
		this.currentSong = this.playList[
			 this.currentIndex];
		console.log(this.currentSong);
		//console.log(this.currentIndex);
		this.$needle = $('#needle');
		this.$diskCover = $('.disk-cover');
        this.$album = $('.album');
        this.$playBtn = $('#controls .play');
		this.$pauseBtn = $('#controls .pause');
		this.$currentTime = $('#currentTime')
		this.$totalTime = $("#totalTime");
		// this.currentSong = this.playList...;
		//console.log(this.$bg);
	},
	// updateSong: function() {
	// 	// 更新界面的代码
	// 	// this.$songName.text(this.currentSong.)
	// 	// html(html) === innerHTML 
	// 	// text(文字) === innerText
	// 	this.currentSong = this.playList[this.currentIndex];
	// 	this.$totalTime = this.currentSong.artists[0].duration;
	// 	console.log(this.currentSong.artists[0].duration);
    //     this.$totalTime.text(parseInt((this.$totalTime)/60000) + ':' 
    //     +parseInt((this.$totalTime)%6000));

	//     console.log(this.$totalTime);
	// 	this.$songName.text(this.currentSong.name);
	// 	this.$artist.text(this.currentSong
	// 		.artists[0].name);
	// 	this.$bg.css({
	// 		'background-image': 'url(' +
	// 		this.currentSong.artists[0].picUrl + ')'
	// 	});
	// 	// attr 设置html标签的属性
	// 	this.$album.attr('src', this.currentSong.artists[0].img1v1Url); //封面
	// 	//console.log(this.currentSong.artists[0].img1v1Url)
	// 	console.log(this.currentSong.mp3Url);
	// 	this.player.src = this.currentSong.mp3Url; //歌曲链接
	// 	console.log(this.playList);
	// 	this.play();
		
	// 	// 追债 唱针？ 唱片，旋转起来？ 进度条，....
	// },
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
		this.$currentTime.text(this.changeTimeForm(this.currentTime));
		// console.log(this.changeTimeForm(1110)+'111');
		this.$totalTime.text(
			this.changeTimeForm(this.currentSong.duration)
		);
		console.log(this.currentSong.duration);
		// this.setCurMoveTime(this.$curAnimation,this.getCurMoveTime());
		console.log();
        this.player.src = this.currentSong.mp3Url;
		this.play();
		// 追债 唱针？ 唱片，旋转起来？ 进度条，....
	},

        //转换时间的显示格式
	changeTimeForm: function(time) {
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

	//下一首
	next:function() {
		if(this.currentIndex>=0 ) {
			this.currentIndex ++;
		};
		if (this.currentIndex == this.playList.length) {
            this.currentIndex = 0;
		};
		this.currentSong = this.playList[
			this.currentIndex];
		console.log(this.currentIndex);
		// this.initData();
        this.updateSong();
	},
	//上一首
	prev:function() {
		if(this.currentIndex >= 0) {
			this.currentIndex --;
		};
		if (this.currentIndex < 0) {
			this.currentIndex = this.playList.length-1 ;
		}; 
		this.currentSong = this.playList[
			this.currentIndex];
		console.log(this.currentIndex);
        this.updateSong();
		this.initData();
	},
	//单曲循环
	loop: function() {
        this.isLoop = true;
        this.player.loop = 'loop';
    },
	//播放
	play: function() {
        this.player.play();
        // 一个函数只做一件事
        this.moveNeedle(true);
        this.changeAnimationState(this.$diskCover,'running');
        this.$playBtn.hide();
        this.$pauseBtn.show();
	},
	//暂停
    pause: function () {
        this.player.pause();
        this.moveNeedle(false);
        this.changeAnimationState(this.$diskCover,'paused');
        this.$playBtn.show();
        this.$pauseBtn.hide();
	},
	//
    changeAnimationState:function ($ele,state) {
        $ele.css({
            'animation-play-state':state,
            '-webkit-animation-play-state':state,
        });
	},
	//播放或暂停指针设置
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
		}
	})
}