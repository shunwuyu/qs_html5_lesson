window.onload = function() {
    const siteEle = document.getElementById("Site");
    init();

    function init() {
        setTimeout(() => {
            // 给 Site 添加一个init类名，让最开始加载前的黑色背景变成图片
            siteEle.classList.add("init");
        }, 200);
    }
}