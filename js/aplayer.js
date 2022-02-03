!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
      oldLoadAp && oldLoadAp();
  
      new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        autoplay: true,
        loop: 'all',
        order: 'random',
        theme: '#b7daff',
        preload: 'none',
        audio: [
          {
            name: 'song1',
            artist: 'artist1',
            url: '/music/孤勇者 - 陈奕迅极高音质.mp3',
            cover: '/img/2021_11_1_2.jpg'
          }
        ]
      });
    }
  })();