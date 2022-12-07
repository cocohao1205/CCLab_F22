function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  background(220);
}

function draw() {
  background(255,0,0)
}

function buttonClicked() {
  console.log("Button Clicked!");
  background(random(255));
}
