window.onload = function() {
    const dragonReadyPlay = document.querySelector(".dragon-ready-play");
    const music = document.querySelector('.music')
    dragonReadyPlay.addEventListener('click', function() {
        this.classList.add('is-animationed');
        // 音乐要在完全fadeOut之后响起
    },false);
    dragonReadyPlay.addEventListener('webkitAnimationEnd', function() {
        const audio = document.querySelector('#music audio')
        // this.classList.remove('is-animationed');
        // 播放音乐
        if(!document.querySelector('.music input').checked){
            audio.play();
        }
        
    });
    music.addEventListener('click',function(event){
        event.stopPropagation();
    },false);
  
}