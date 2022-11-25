let x, y;
let xSpd, ySpd;
let dia;
let r, g, b;
let angle, angleVel;
let radDist;
let q;

function setup() {
  let canvas = createCanvas(windowWidth-15, windowHeight-140);
  canvas.parent("canvasContainer")
  background(30,10)
  x = 250;
  y = 200;
  xSpd = random(1, 3);
  ySpd = random(1, 3);
  dia = 70;
  r = 255;
  g = 255;
  b = 255;
  angle = 0;
  angleVel = 1;
  radDist = 10;
  q = 0;
}

function draw() {
  let freq = frameCount * 0.02;
  let amp = 200;
  let sinVal = sin(freq) * amp;
  let cosVal = cos(freq) * amp;

  if (x < 0 || x + 140 > width) {
    xSpd = xSpd * -1;
  }
  if (y - 40 < 0 || y + 50 > height) {
    ySpd = ySpd * -1;
  }
  if (x < 0 || x + 140 > width || y - 40 < 0 || y + 50 > height) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  if (mouseIsPressed) {
    x = x + q;
    y = y + q;
    noStroke();
    background(30,10)
    fill(230,230,230);
    circle(width / 2 + 0.5*cosVal, height / 2 + 0.5*sinVal, 30);
  } else {
    background(30);
    x = x + xSpd;
    y = y + ySpd;
    stroke(r, g, b);
    strokeWeight(2);
    fill(r, g, b);
    textSize(50);
    text("D V D", x, y);
    ellipse(x + 70, y + 30, 140, 40);
    textSize(25);
    fill(30);
    strokeWeight(1);
    textFont("Georgia");
    text("V I D E O", x + 20, y + 39);
  }
}

function buttonClicked() {
  console.log("Button Clicked!");
  background(random(255));
}
