if (!Detector.webgl) {
  Detector.addGetWebGLMessage();
} else {
  var container = document.getElementById('globe');
  var urls = {
    earth: 'assets/worldhd.jpg',
    bump: 'assets/bump.jpg',
    specular: 'assets/specular.jpg',
  };
  var globe = new Globe(container, urls);
  globe.init();

  var drawBlock = function() {
    globe.removeAllBlocks();
    setTimeout(function() {
      for (var i = 0; i < 100; i++) {
        globeData = {
          color: '#' + Math.floor(Math.random() * 16777215).toString(16),
          lat: Math.random() * 180 - 90,
          lon: Math.random() * 360 - 180,
          size: 0.5,
          magnitude: Math.random() * 200,
        };
        globe.addLevitatingBlock(globeData);
      }
    }, 300);
  };
  setInterval(drawBlock, 300);
}
