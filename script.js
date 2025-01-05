function fullscreen() {
    var el = document.getElementById("canvas");

    if (
        document.fullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.documentElement.webkitRequestFullScreen
    ) {
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        } else if (el.webkitRequestFullScreen) {
            el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    }
}
