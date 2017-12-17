(function () {
  document.addEventListener('DOMContentLoaded', function () {
    function htmlsize() {
      var html = document.documentElement
      var windowWidth = html.clientWidth
      if (windowWidth <= 750) {
        html.style.fontSize = windowWidth / 7.5 + 'px'
        // 等价于html.style.fontSize = windowWidth / 750 * 100 + 'px';
      } else {
        html.style.fontSize = 100 + 'px'
      }
    }

    htmlsize()
    window.onresize = function () {
      htmlsize()
    }
  }, false)
})()
