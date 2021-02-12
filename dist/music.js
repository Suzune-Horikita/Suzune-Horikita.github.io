const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: '200px',
    lrcType: 3,
    audio: [
      {
        name: "死ぬにはいい日だった",
        artist: '川下穷江',
        url: 'https://www.youtube.com/watch?v=SsTpO_jgFrw',
        cover: '/music/cover/兩隻老虎.jpg',
        lrc: '/music/lyrics/兩隻老虎.lrc',
      },
      {
        name: '君に最後の口づけを',
        artist: 'まじ娘',
        url: 'https://www.youtube.com/watch?v=ojG9C6L61oA',
        cover: '/music/cover/哥哥爸爸真偉大.jpg',
        lrc: '/music/lyrics/哥哥爸爸真偉大.lrc'
      }
    ]
});