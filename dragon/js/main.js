window.onload = function() {
    const music = document.querySelector('.music');
    const audio = document.querySelector('#music audio');
    const dragonReadyPlay = document.querySelector('.dragon-ready-play');
    dragonReadyPlay.addEventListener('click', function(){
        this.classList.add('is-animationed');
        // 音乐要在完全fadeOut之后再响起来
      }, false);
    //   webkitAnimationEnd 自带的api 动画结束以后执行的事件
      dragonReadyPlay.addEventListener('webkitAnimationEnd', function() {
          //   音乐
          if(!document.querySelector('.music input').checked) {
            audio.play();
          }
      });
      music.addEventListener('click', function(event) {
        event.stopPropagation();
      }, false);
  }