// 命名空间，模块化封装
var MusicPlayer = {
    // 将页面打开时的高峰时间，少做事，做最核心的
    $bg: null,
    init: function () {
        // $由jquery找到元素DOM
        this.$bg = $('#bg');
        console.log(this.$bg);
        this.$bg.css({
            'background-image' : 'url(http://p3.music.126.net/nlleOhU4RFqoa7Rud3cCUg==/109951163050635616.jpg)'
        })
    }
}
window.onload = function () {
    MusicPlayer.init();
}