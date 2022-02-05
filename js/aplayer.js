!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
      oldLoadAp && oldLoadAp();
  
      new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        autoplay: false,
        loop: 'all',
        order: 'random',
        theme: '#36282b',
        preload: 'auto',
        audio: [
          {
            name: '孤勇者',
            artist: '陈奕迅',
            url: '/music/孤勇者 - 陈奕迅极高音质.mp3',
            cover: '/img/孤勇者封面.jpg'
          }
        ],
        audio: [
          {
            name: '渐渐被你吸引',
            artist: '坂井泉水',
            url: '/music/坂井泉水《渐渐被你吸引》.mp3',
            cover: '/img/坂井泉水.jpg'
          }
        ],
        audio: [
          {
            name: 'Good-bye My Loneliness',
            artist: '坂井泉水',
            url: '/music/坂井泉水Zard - Good-bye My Loneliness.mp3',
            cover: '/img/坂井泉水.jpg'
          }
        ],
        audio: [
          {
            name: 'Five Hundred Miles',
            artist: 'Justin Timberlake',
            url: '/music/Five Hundred Miles - Justin Timberlake、Carey Mulligan、Stark Sands(极高音质).mp3',
            cover: '/img/Five Hundred Miles.jpg'
          }
        ],
        audio: [
          {
            name: 'Butter-Fly',
            artist: '和田光司',
            url: '/music/Butter-Fly - 和田光司(无损）.flac',
            cover: '/img/Butter-Fly.jpg'
          }
        ],
        audio: [
          {
            name: '歌声与微笑',
            artist: '广播合唱团',
            url: '/music/中央人民广播电台少年广播合唱团 - 歌声与微笑.mp3',
            cover: '/img/2021_11_1_15.jpg'
          }
        ],
        audio: [
          {
            name: 'Call of Silence',
            artist: '无',
            url: '/music/Call of Silence (1).mp3',
            cover: '/img/Call of Silence.jpg'
          }
        ],
        audio: [
          {
            name: '永远同在',
            artist: '木村弓',
            url: '/music/いつも何度でも (永远同在) - 木村弓(极高音质).mp3',
            cover: '/img/永远同在.jpg'
          }
        ],
        audio: [
          {
            name: '太阳照常升起',
            artist: '久石让',
            url: '/music/太阳照常升起 - 久石让(极高音质).mp3',
            cover: '/img/太阳照常升起.jpg'
          }
        ],
        audio: [
          {
            name: '卡农',
            artist: '无',
            url: '/music/卡农.MP3',
            cover: '/img/卡农.jpg'
          }
        ],
      });
    }
  })();
  