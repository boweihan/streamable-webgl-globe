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
    globeData = {
      color: '#39ff14',
      lat: Math.random() * 180 - 90,
      lon: Math.random() * 360 - 180,
      size: 0.5,
      magnitude: Math.random() * 200,
    };
    setTimeout(function() {
      globe.addLevitatingBlock(globeData);
    }, 300);
  };
  setInterval(drawBlock, 300);
}
