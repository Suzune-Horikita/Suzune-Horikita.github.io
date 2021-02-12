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
        url: 'https://drive.google.com/uc?export=download&id=16SoH7j_Ocl6c2Lz0uULiMODAyhMHsXV1'
      },
      {
        name: '君に最後の口づけを',
        artist: 'まじ娘',
        url: 'https://drive.google.com/uc?export=download&id=1aT3IsDppZDKUSJATR0Txbaocz3YlHLNS'
      }
    ]
});