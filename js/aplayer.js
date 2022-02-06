!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
      oldLoadAp && oldLoadAp();
  
      new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        autoplay: false,
        loop: 'all',
        order: 'list',
        theme: '#b7daff',
        preload: 'auto',
        listFolded: false,
        audio: [
          {
            name: '孤勇者',
            artist: '陈奕迅',
            url: '/music/孤勇者 - 陈奕迅极高音质.mp3',
            cover: '/img/孤勇者封面.jpg'
          },
          {
            name: '渐渐被你吸引',
            artist: '坂井泉水',
            url: '/music/坂井泉水《渐渐被你吸引》.mp3',
            cover: '/img/坂井泉水.jpg'
          },
          {
            name: 'Good-bye My Loneliness',
            artist: '坂井泉水',
            url: '/music/坂井泉水Zard - Good-bye My Loneliness.mp3',
            cover: '/img/坂井泉水.jpg'
          },
          {
            name: 'Five Hundred Miles',
            artist: 'Justin Timberlake',
            url: '/music/Five Hundred Miles - Justin Timberlake、Carey Mulligan、Stark Sands(极高音质).mp3',
            cover: '/img/Five Hundred Miles.jpg'
          },     
          {
            name: 'Butter-Fly',
            artist: '和田光司',
            url: '/music/Butter-Fly - 和田光司(无损）.flac',
            cover: '/img/Butter-Fly.jpg'
          },
          {
            name: '歌声与微笑',
            artist: '广播合唱团',
            url: '/music/中央人民广播电台少年广播合唱团 - 歌声与微笑.mp3',
            cover: '/img/2021_11_1_15.jpg'
          },
          {
            name: 'Call of Silence',
            artist: '无',
            url: '/music/Call of Silence (1).mp3',
            cover: '/img/Call of Silence.jpg'
          },
          {
            name: '永远同在',
            artist: '木村弓',
            url: '/music/いつも何度でも (永远同在) - 木村弓(极高音质).mp3',
            cover: '/img/永远同在.jpg'
          },
          {
            name: '太阳照常升起',
            artist: '久石让',
            url: '/music/太阳照常升起 - 久石让(极高音质).mp3',
            cover: '/img/太阳照常升起.jpg'
          },
          {
            name: '卡农',
            artist: '无',
            url: '/music/卡农.mp3',
            cover: '/img/卡农.jpg'
          },
          {
            name: 'For the Damaged Coda',
            artist: 'Blonde Redhead',
            url: '/music/Blonde Redhead - For the Damaged Coda.mp3',
            cover: '/img/For the Damaged Coda.jpg'
          },
          {
            name: 'Колыбельная',
            artist: 'safer',
            url: '/music/Колыбельная - safer(极高音质).mp3',
            cover: '/img/Колыбельная.jpg'
          },
          {
            name: '为了你，祖国母亲',
            artist: '柳拜',
            url: '/music/为了你，祖国母亲.aac',
            cover: '/img/为了你，祖国母亲.jpg'
          },
          {
            name: '僕が死のうと思ったのは',
            artist: '中岛美嘉',
            url: '/music/僕が死のうと思ったのは (曾经我也想过一了百了) - 中岛美嘉(极高音质).mp3',
            cover: '/img/僕が死のうと思ったのは.jpg'
          },
          {
            name: '挪威的森林',
            artist: '伍佰',
            url: '/music/挪威的森林 - 伍佰(极高音质).mp3',
            cover: '/img/伍佰.jpg'
          },
          {
            name: 'someone you loved',
            artist: 'madilyn',
            url: '/music/someone you loved - madilyn(极高音质).mp3',
            cover: '/img/someone you loved.jpg'
          },
          {
            name: 'In The End',
            artist: 'Linkin Park',
            url: '/music/Linkin Park - In The End.flac',
            cover: '/img/Linkin Park.jpg'
          },
        ]
      });
    }
  })();
  