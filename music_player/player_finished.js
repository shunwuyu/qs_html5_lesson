var MusicPlayer = {
  playList: null, /*歌由数组*/
  player: null,/* audio标签 */
  currentIndex: 0, /*当前播到第几首*/
  currentSong: null, /*当前歌*/
  isPlaying: false, /*正在播放*/
  $needle: null, /*唱针*/
  $playBtn: null, /*播放按钮*/
  $pauseBtn: null,/*暂停按钮*/
  $diskCover: null,
  $totalTime: null, /* 总时间 */
  $album: null,
  $bg: null,
  $processBtn: null,
  interval: null,
  initData: function() {
    this.currentIndex = 0;
    this.currentSong = this.playList[this.currentIndex];
    console.log(this.currentSong);
    this.player = $('#player').get(0);
    this.$needle = $('#needle');
    this.$playBtn = $('#controls .play');
    this.$pauseBtn = $('#controls .pause');
    // 第一个
    this.$diskCover = $('.disk-cover:eq(0)');
    this.$totalTime = $('#totalTime'); 
    this.$album = $('.album');
    this.$bg = $('.bg');
    this.$processBtn = $('#processBtn');
  },
  init: function() {
    this.initData();
    this.initState();
    this.updateSong();
    this.setInterval();
  },
  initState () {
    this.player.addEventListener('ended', function() {
      clearInterval(this.interval);
    })
  },
  setInterval: function() {
    this.interval = setInterval(this.updateProcess.bind(this),1000);
  },
  updateProcess: function() {
    // console.log(this);
    var r = parseInt(this.$processBtn.css('right'));
    r--;
    console.log(r);
    this.$processBtn.css('right', r + 'px');
  },
  updateSong: function() {
    this.player.src = this.currentSong.mp3Url;
    this.updateMusicInfo();
    this.play();
  },
  play: function() {
    this.player.play();
    this.isPlaying = true;
    this.changeAnimationState(this.$diskCover, 'running');
    this.moveNeedle(true);
    this.$playBtn.hide();
    this.$pauseBtn.show();
  },
  changeAnimationState : function($ele, state) {
    $ele.css({
      'animation-play-state': state,
      '-webkit-animation-play-state': state
    })
  },
  moveNeedle : function (play) {
    if (play) {
      this.$needle.removeClass('pause-needle').addClass('resume-needle');
    } else {
      this.$needle.removeClass('resume-needle').addClass('pause-needle');
    }
  },
  updateMusicInfo: function() {
    $('#songName').html(this.currentSong.name);
    console.log(this.currentSong);
    $('#artist').html(this.currentSong.artists[0].name);
    this.$totalTime.text(validateTime(this.currentSong.duration / 60) + ":" + validateTime(this.currentSong.duration % 60));
    this.$album.attr('src', this.currentSong.artists[0].img1v1Url);
    this.$bg.css({
      'background-image': 'url(' + this.currentSong.artists[0].picUrl + ')'
    })
  },
  pause: function() {
    this.player.pause();
    this.isPlaying = false;
    this.moveNeedle(false);
    this.changeAnimationState(this.$diskCover, 'paused');
    this.$playBtn.show();
    this.$pauseBtn.hide();
  }
};

function validateTime(number) {
    var value = (number > 10 ? number + '' : '0' + number).substring(0, 2);
    return isNaN(value) ? '00' : value;
}

$(function() {
  var url = './resource/play_list.json';
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      console.log(data);
      MusicPlayer.playList = data.result.tracks;
      MusicPlayer.init();
    }
  })
})