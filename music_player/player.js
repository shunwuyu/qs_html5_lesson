// 命名空间 json 
// 模块化的封装
var i = 0;
var MusicPlayer = {
    // $bg:由jquery找到元素DOM
    // undefined null 
    // 性能会好一点，推后执行
    // 将页面打开时的高峰时间段，少做事，做最核心
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
    $totalTime: null,
    playTime: null,
    $currentTime: null,
    bool: false,
    $processBtn: null,
    initData: function() {
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
        this.$processBtn = $('#processBtn');
    },
    prev: function() {
        if (this.currentIndex != 0) {
            this.currentIndex -= 1;
        } else {
            this.currentIndex = this.playList.length - 1;
        }
        this.currentSong = this.playList[this.currentIndex];
        this.updateSong();
    },
    next: function() {
        if (this.currentIndex != this.playList.length - 1) {
            this.currentIndex += 1;
        } else {
            this.currentIndex = 0;
        }
        this.currentSong = this.playList[this.currentIndex];
        this.updateSong();
    },
    updateSong: function() {
        // 更新界面的代码
        // html() === innerHTML
        // text(文字) == innerText
        this.$songName.text(this.currentSong.name);
        this.$artist.text(this.currentSong.artists[0].name);
        this.$bg.css({
            'background-image': 'url(' + this.currentSong.artists[0].picUrl + ')'
        });
        // attr 设置html标签的属性
        this.$album.attr('src', this.currentSong.artists[0].img1v1Url);
        // 音乐
        console.log(this.currentSong.mp3Url);
        this.player.src = this.currentSong.mp3Url;
        // this.player.src = 'http://dl.stream.qqmusic.qq.com/C400001khcvv0paQHL.m4a?vkey=2700F1B2C404A6FC87BFEBA88656F0335FF09FAE580394F8F43058446100ACD418BA49626046CE41C0886AE14B90CA8D66CC839C73A5CDB4&guid=1228785725&uin=0&fromtag=66';
        this.$currentTime.text('00:00');
        this.playTime = '0' + parseInt(this.currentSong.bMusic.playTime / 1000 / 60) + ':' + ((parseInt(this.currentSong.bMusic.playTime / 1000)) % 60);
        this.$totalTime.text(this.playTime);
        console.log(this.playTime);
        console.log(this.currentSong.bMusic.playTime);
        // console.log(this.playList.length);
        console.log(this.currentIndex);
        this.play();
    },
    // playTimeSet:function($ele) {
    //     this.$
    // };
    play: function() {
        this.player.play();
        this.moveProcessBtn(this.$processBtn, 'running', this.currentSong.bMusic.playTime / 1000 + 's');
        // 一个函数只做一件事
        this.bool = true;
        // this.displayTime(this.$currentTime, this.bool);
        this.moveNeedle(true);
        this.changeAnimationState(this.$diskCover, 'running');
        this.$playBtn.hide();
        this.$pauseBtn.show();
    },
    pause: function() {
        this.player.pause();
        this.moveNeedle(false);
        this.bool = false;
        // this.displayTime(this.$currentTime, this.bool);
        this.moveProcessBtn(this.$processBtn, 'paused', this.currentSong.bMusic.playTime / 1000 + 's');
        this.changeAnimationState(this.$diskCover, 'paused');
        this.$playBtn.show();
        this.$pauseBtn.hide();
    },

    // displayTime: function($ele, e) {
    //     if (!this.bool) { clearInterval(time); }
    //     setInterval(function() {

    //         if (e) {
    //             var time = setInterval(function() {
    //                 if (this.bool != true) {
    //                     clearInterval(time);
    //                 }
    //                 var j, k;
    //                 i = i + 1;
    //                 j = parseInt(i / 60);
    //                 k = i % 60;
    //                 $ele.text(j + ":" + k);
    //                 // if (!this.bool && e) { clearInterval(time); }
    //                 console.log(i);
    //             }, 1000);
    //         }
    //     });


    // },
    moveProcessBtn: function($ele, state, e) {
        console.log(e);
        $ele.css({
            '-webkit-animation': 'processbtn e infinite linear',
            'animation': 'processbtn e infinite linear',
            /* 运动状态 */

            'webkit-animation-play-state': state,
            'animation-play-state': state,
        })
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
        // 基于jquery框架，DOM 查询
        // $ document.querySelectorAll()
        // this.$bg = $('#bg');
        // console.log(this.$bg);
        this.initData();
        this.updateSong();
        // this.$bg.css({
        //     'background-image': 'url(http://p3.music.126.net/nlleOhU4RFqoa7Rud3cCUg==/109951163050635616.jpg)'
        // })
    }
}
window.onload = function() {
    // ajax js 请求数据
    var url = './resource/play_list.json';
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data.result.tracks);
            MusicPlayer.playList = data.result.tracks;
            MusicPlayer.init();

        }
    })

}