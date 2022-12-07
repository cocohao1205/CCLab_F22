let img

function preload() {
  img = loadImage("assets/piano.jpg");
}

function setup() {
  let canvas = createCanvas(windowWidth, 0.15 * windowWidth);
  canvas.parent("canvasContainer2");
  background(250)
}

function windowResized() {
  resizeCanvas(windowWidth, 0.15* windowWidth);
}

function draw() {
  background(250);
  imageMode(CENTER);
  image(img, width / 2, height / 2, 0.8 * windowWidth, 0.15 * windowWidth);
}
