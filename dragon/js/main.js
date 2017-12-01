window.onload = function() {
  const music = document.querySelector('.music');
  const audio = 
    document.querySelector('#music audio');
  const dragonReadyPlay = 
    document.querySelector(
      '.dragon-ready-play');
  dragonReadyPlay
    .addEventListener('click', function(){
      this.classList.add('is-animationed');
      // 音乐要在完全fadeOut之后再响起
    }, false);
  
  dragonReadyPlay.addEventListener(
    'webkitAnimationEnd', function() {
    // this.classList.remove('is-animationed');
    // 音乐
    if(!document.querySelector('.music input').checked){
      audio.play();
    }
  });
  music.addEventListener('click',function(event) {
      event.stopPropagation();
  },false);
}

