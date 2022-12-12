let E6 = [];
let D6S = [];
let D6 = [];
let C6S = [];
let C6 = [];
let B6 = [];
let A6S = [];
let A6 = [];
let G5S = [];
let G5 = [];
let F5S = [];
let F5 = [];
let E5 = [];
let D5S = [];
let D5 = [];
let C5S = [];
let C5 = [];
let B5 = [];
let A5S = [];
let A5 = [];
let G4S = [];
let G4 = [];
let F4S = [];
let F4 = [];
let E4 = [];
let D4S = [];
let D4 = [];
let C4S = [];
let C4 = [];
let B4 = [];
let A4S = [];
let A4 = [];
let G3S = [];
let G3 = [];
let F3S = [];
let F3 = [];
let E3 = [];

let p1, p2, s;
let lineX, lineSpd;
let tempoSlider;
let tempo;
let SoundE6, SoundD6S, SoundD6, SoundC6S, SoundC6, SoundB6, SoundA6S, SoundA6
let SoundG5S, SoundG5, SoundF5S, SoundF5, SoundE5, SoundD5S, SoundD5, SoundC5S, SoundC5, SoundB5, SoundA5S, SoundA5
let SoundG4S, SoundG4, SoundF4S, SoundF4, SoundE4, SoundD4S, SoundD4, SoundC4S, SoundC4, SoundB4, SoundA4S, SoundA4
let SoundG3S, SoundG3, SoundF3S, SoundF3, SoundE3;
let canvas2

function preload() {
  SoundE6 = loadSound("assets/E6.m4a");
  SoundD6S = loadSound("assets/D6S.m4a");
  SoundD6 = loadSound("assets/D6.m4a")
  SoundC6S = loadSound("assets/C6S.m4a")
  SoundC6 = loadSound("assets/C6.m4a")
  SoundB6 = loadSound("assets/B6.m4a")
  SoundA6S = loadSound("assets/A6S.m4a")
  SoundA6 = loadSound("assets/A6.m4a")
  SoundG5S = loadSound("assets/G5S.m4a")
  SoundG5 = loadSound("assets/G5.m4a")
  SoundF5S = loadSound("assets/F5S.m4a")
  SoundF5 = loadSound("assets/F5.m4a")
  SoundE5 = loadSound("assets/E5.m4a");
  SoundD5S = loadSound("assets/D5S.m4a");
  SoundD5 = loadSound("assets/D5.m4a")
  SoundC5S = loadSound("assets/C5S.m4a")
  SoundC5 = loadSound("assets/C5.m4a")
  SoundB5 = loadSound("assets/B5.m4a")
  SoundA5S = loadSound("assets/A5S.m4a")
  SoundA5 = loadSound("assets/A5.m4a")
  SoundG4S = loadSound("assets/G4S.m4a")
  SoundG4 = loadSound("assets/G4.m4a")
  SoundF4S = loadSound("assets/F4S.m4a")
  SoundF4 = loadSound("assets/F4.m4a")
  SoundE4 = loadSound("assets/E4.m4a");
  SoundD4S = loadSound("assets/D4S.m4a");
  SoundD4 = loadSound("assets/D4.m4a")
  SoundC4S = loadSound("assets/C4S.m4a")
  SoundC4 = loadSound("assets/C4.m4a")
  SoundB4 = loadSound("assets/B4.m4a")
  SoundA4S = loadSound("assets/A4S.m4a")
  SoundA4 = loadSound("assets/A4.m4a")
  SoundG3S = loadSound("assets/G3S.m4a")
  SoundG3 = loadSound("assets/G3.m4a")
  SoundF3S = loadSound("assets/F3S.m4a")
  SoundF3 = loadSound("assets/F3.m4a")
  SoundE3 = loadSound("assets/E3.m4a")
}


function setup() {
  //song title input
  canvas2 = createCanvas(920, 1020);
  canvas2.parent("canvasContainer")

  //song title show
  input = createInput();
  input.parent("canvasContainer")
  input.position(200,50);
  button = createButton("submit");
  button.parent("canvasContainer")
  button.position(input.x + input.width, 50);
  button.mousePressed(write);
  title = createElement("h3", "Song Title: Unnamed");
  title.parent("canvasContainer")
  title.position(200, 5); 
 
  //tempo
  tempoSlider = createSlider(1, 10, 5);
  tempoSlider.position(500, 50);
  tempoSlider.parent("canvasContainer")

  textAlign(CENTER);
  textSize(50);

  //blocks
  for (let i = 0; i < 16; i++) {
    E6[i] = new Block(120 + (i * 1000) / 20, 90, SoundE6);
    D6S[i] = new Block(120 + (i * 1000) / 20, 115, SoundD6S);
    D6[i] = new Block(120 + (i * 1000) / 20, 140, SoundD6);
    C6S[i] = new Block(120 + (i * 1000) / 20, 165, SoundC6S);
    C6[i] = new Block(120 + (i * 1000) / 20, 190, SoundC6);
    B6[i] = new Block(120 + (i * 1000) / 20, 215, SoundB6);
    A6S[i] = new Block(120 + (i * 1000) / 20, 240, SoundA6S);
    A6[i] = new Block(120 + (i * 1000) / 20, 265, SoundA6);
    G5S[i] = new Block(120 + (i * 1000) / 20, 290, SoundG5S);
    G5[i] = new Block(120 + (i * 1000) / 20, 315, SoundG5);
    F5S[i] = new Block(120 + (i * 1000) / 20, 340, SoundF5S);
    F5[i] = new Block(120 + (i * 1000) / 20, 365, SoundF5);

    E5[i] = new Block(120 + (i * 1000) / 20, 390, SoundE5);
    D5S[i] = new Block(120 + (i * 1000) / 20, 415, SoundD5S);
    D5[i] = new Block(120 + (i * 1000) / 20, 440, SoundD5);
    C5S[i] = new Block(120 + (i * 1000) / 20, 465, SoundC5S);
    C5[i] = new Block(120 + (i * 1000) / 20, 490, SoundC5);
    B5[i] = new Block(120 + (i * 1000) / 20, 515, SoundB5);
    A5S[i] = new Block(120 + (i * 1000) / 20, 540, SoundA5S);
    A5[i] = new Block(120 + (i * 1000) / 20, 565, SoundA5);
    G4S[i] = new Block(120 + (i * 1000) / 20, 590, SoundG4S);
    G4[i] = new Block(120 + (i * 1000) / 20, 615, SoundG4);
    F4S[i] = new Block(120 + (i * 1000) / 20, 640, SoundF4S);
    F4[i] = new Block(120 + (i * 1000) / 20, 665, SoundF4);

    E4[i] = new Block(120 + (i * 1000) / 20, 690, SoundE4);
    D4S[i] = new Block(120 + (i * 1000) / 20, 715, SoundD4S);
    D4[i] = new Block(120 + (i * 1000) / 20, 740, SoundD4);
    C4S[i] = new Block(120 + (i * 1000) / 20, 765, SoundC4S);
    C4[i] = new Block(120 + (i * 1000) / 20, 790, SoundC4);
    B4[i] = new Block(120 + (i * 1000) / 20, 815, SoundB4);
    A4S[i] = new Block(120 + (i * 1000) / 20, 840, SoundA4S);
    A4[i] = new Block(120 + (i * 1000) / 20, 865, SoundA4);
    G3S[i] = new Block(120 + (i * 1000) / 20, 890, SoundG3S);
    G3[i] = new Block(120 + (i * 1000) / 20, 915, SoundG3);
    F3S[i] = new Block(120 + (i * 1000) / 20, 940, SoundF3S);
    F3[i] = new Block(120 + (i * 1000) / 20, 965, SoundF3);
    E3[i] = new Block(120 + (i * 1000) / 20, 990, SoundE3);
  }

  //playbutton
  p1 = new PlayButton(700, 50);

  //pausebutton
  p2 = new PauseButton(750, 50)

  //stopbutton
  s = new StopButton(800, 50)

  //line
  lineX = 93.5
  lineSpd = 0
}

function draw() {
  background(250);
  //block
  for (let i = 0; i < E6.length; i++) {
    let e6 = E6[i];
    e6.display();
    e6.sound();
  }
  for (let i = 0; i < D6S.length; i++) {
    let d6S = D6S[i];
    d6S.display();
    d6S.sound();
  }
  for (let i = 0; i < D6.length; i++) {
    let d6 = D6[i];
    d6.display();
    d6.sound();
  }
  for (let i = 0; i < C6S.length; i++) {
    let c6S = C6S[i];
    c6S.display();
    c6S.sound();
  }
  for (let i = 0; i < C6.length; i++) {
    let c6 = C6[i];
    c6.display();
    c6.sound();
  }
  for (let i = 0; i < B6.length; i++) {
    let b6 = B6[i];
    b6.display();
    b6.sound();
  }
  for (let i = 0; i < A6S.length; i++) {
    let a6S = A6S[i];
    a6S.display();
    a6S.sound();
  }
  for (let i = 0; i < A6.length; i++) {
    let a6 = A6[i];
    a6.display();
    a6.sound();
  }
  for (let i = 0; i < G5S.length; i++) {
    let g5S = G5S[i];
    g5S.display();
    g5S.sound();
  }
  for (let i = 0; i < G5.length; i++) {
    let g5 = G5[i];
    g5.display();
    g5.sound();
  }
  for (let i = 0; i < F5S.length; i++) {
    let f5S = F5S[i];
    f5S.display();
    f5S.sound();
  }
  for (let i = 0; i < F5.length; i++) {
    let f5 = F5[i];
    f5.display();
    f5.sound();
  }

  for (let i = 0; i < E5.length; i++) {
    let e5 = E5[i];
    e5.display();
    e5.sound();
  }
  for (let i = 0; i < D5S.length; i++) {
    let d5S = D5S[i];
    d5S.display();
    d5S.sound();
  }
  for (let i = 0; i < D5.length; i++) {
    let d5 = D5[i];
    d5.display();
    d5.sound();
  }
  for (let i = 0; i < C5S.length; i++) {
    let c5S = C5S[i];
    c5S.display();
    c5S.sound();
  }
  for (let i = 0; i < C5.length; i++) {
    let c5 = C5[i];
    c5.display();
    c5.sound();
  }
  for (let i = 0; i < B5.length; i++) {
    let b5 = B5[i];
    b5.display();
    b5.sound();
  }
  for (let i = 0; i < A5S.length; i++) {
    let a5S = A5S[i];
    a5S.display();
    a5S.sound();
  }
  for (let i = 0; i < A5.length; i++) {
    let a5 = A5[i];
    a5.display();
    a5.sound();
  }
  for (let i = 0; i < G4S.length; i++) {
    let g4S = G4S[i];
    g4S.display();
    g4S.sound();
  }
  for (let i = 0; i < G4.length; i++) {
    let g4 = G4[i];
    g4.display();
    g4.sound();
  }
  for (let i = 0; i < F4S.length; i++) {
    let f4S = F4S[i];
    f4S.display();
    f4S.sound();
  }
  for (let i = 0; i < F4.length; i++) {
    let f4 = F4[i];
    f4.display();
    f4.sound();
  }

  for (let i = 0; i < E4.length; i++) {
    let e4 = E4[i];
    e4.display();
    e4.sound();
  }
  for (let i = 0; i < D4S.length; i++) {
    let d4S = D4S[i];
    d4S.display();
    d4S.sound();
  }
  for (let i = 0; i < D4.length; i++) {
    let d4 = D4[i];
    d4.display();
    d4.sound();
  }
  for (let i = 0; i < C4S.length; i++) {
    let c4S = C4S[i];
    c4S.display();
    c4S.sound();
  }
  for (let i = 0; i < C4.length; i++) {
    let c4 = C4[i];
    c4.display();
    c4.sound();
  }
  for (let i = 0; i < B4.length; i++) {
    let b4 = B4[i];
    b4.display();
    b4.sound();
  }
  for (let i = 0; i < A4S.length; i++) {
    let a4S = A4S[i];
    a4S.display();
    a4S.sound();
  }
  for (let i = 0; i < A4.length; i++) {
    let a4 = A4[i];
    a4.display();
    a4.sound();
  }
  for (let i = 0; i < G3S.length; i++) {
    let g3S = G3S[i];
    g3S.display();
    g3S.sound();
  }
  for (let i = 0; i < G3.length; i++) {
    let g3 = G3[i];
    g3.display();
    g3.sound();
  }
  for (let i = 0; i < F3S.length; i++) {
    let f3S = F3S[i];
    f3S.display();
    f3S.sound();
  }
  for (let i = 0; i < F3.length; i++) {
    let f3 = F3[i];
    f3.display();
    f3.sound();
  }
  for (let i = 0; i < E3.length; i++) {
    let e3 = E3[i];
    e3.display();
    e3.sound();
  }

  //tempo
  const t = tempoSlider.value();
  tempo = t
  textSize(16)
  stroke(0)
  strokeWeight(1)
  text('Tempo: ' + t, 565, 40)

  //design
  stroke(120)
  line(95, 77.5, 95, 1003)
  line(295, 77.5, 295, 1003)
  line(495, 77.5, 495, 1003)
  line(695, 77.5, 695, 1003)
  line(895, 77.5, 895, 1003)

  //line
  lineX = lineX + lineSpd
  if (lineX >= 895) {
    lineSpd = 0
  }
  strokeWeight(2);
  stroke(0)
  line(lineX, 90 - 1000 / 80, lineX, 1003);

  //key
  stroke(0)
  strokeWeight(1)
  noFill()
  rectMode(CENTER)

  fill(0)
  rect(55, 115, 80, 25)
  rect(55, 165, 80, 25)
  rect(55, 240, 80, 25)
  rect(55, 290, 80, 25)
  rect(55, 340, 80, 25)
  rect(55, 415, 80, 25)
  rect(55, 465, 80, 25)
  rect(55, 540, 80, 25)
  rect(55, 590, 80, 25)
  rect(55, 640, 80, 25)
  rect(55, 715, 80, 25)
  rect(55, 765, 80, 25)
  rect(55, 840, 80, 25)
  rect(55, 890, 80, 25)
  rect(55, 940, 80, 25)

  noFill()
  rect(55, 90, 80, 25)
  rect(55, 140, 80, 25)
  rect(55, 190, 80, 25)
  rect(55, 215, 80, 25)
  rect(55, 265, 80, 25)
  rect(55, 315, 80, 25)
  rect(55, 365, 80, 25)
  rect(55, 390, 80, 25)
  rect(55, 440, 80, 25)
  rect(55, 490, 80, 25)
  rect(55, 515, 80, 25)
  rect(55, 565, 80, 25)
  rect(55, 615, 80, 25)
  rect(55, 665, 80, 25)
  rect(55, 690, 80, 25)
  rect(55, 740, 80, 25)
  rect(55, 790, 80, 25)
  rect(55, 815, 80, 25)
  rect(55, 865, 80, 25)
  rect(55, 915, 80, 25)
  rect(55, 965, 80, 25)
  rect(55, 990, 80, 25)

  //keyText
  noStroke()
  fill(250)
  text("D6S", 75, 120)
  text("C6S", 75, 170)
  text("A6S", 75, 245)
  text("G5S", 75, 295)
  text("F5S", 75, 345)
  text("D5S", 75, 420)
  text("C5S", 75, 470)
  text("A5S", 75, 545)
  text("G4S", 75, 595)
  text("F4S", 75, 645)
  text("D4S", 75, 720)
  text("C4S", 75, 770)
  text("A4S", 75, 845)
  text("G3S", 75, 895)
  text("F3S", 75, 945)

  fill(0)
  text("E6", 75, 95)
  text("D6", 75, 145)
  text("C6", 75, 195)
  text("B6", 75, 220)
  text("A6", 75, 270)
  text("G5", 75, 320)
  text("F5", 75, 370)
  text("E5", 75, 395)
  text("D5", 75, 445)
  text("C5", 75, 495)
  text("B5", 75, 520)
  text("A5", 75, 570)
  text("G4", 75, 620)
  text("F4", 75, 670)
  text("E4", 75, 695)
  text("D4", 75, 745)
  text("C4", 75, 795)
  text("B4", 75, 820)
  text("A4", 75, 870)
  text("G3", 75, 920)
  text("F3", 75, 970)
  text("E3", 75, 995)
  stroke(2)

  //playbutton
  p1.display();

  //pausebutton
  p2.display()

  //stopbutton
  s.display()
}

//song title input
function write() {
  const songName = input.value();
  title.html("Song Title: " + songName);
  input.value("");
}

function mouseClicked() {
  //block
  for (let i = 0; i < E6.length; i++) {
    let e6 = E6[i];
    e6.click();
  }
  for (let i = 0; i < D6S.length; i++) {
    let d6s = D6S[i];
    d6s.click();
  }
  for (let i = 0; i < D6.length; i++) {
    let d6 = D6[i];
    d6.click();
  }
  for (let i = 0; i < C6S.length; i++) {
    let c6S = C6S[i];
    c6S.click();
  }
  for (let i = 0; i < C6.length; i++) {
    let c6 = C6[i];
    c6.click();
  }
  for (let i = 0; i < B6.length; i++) {
    let b6 = B6[i];
    b6.click();
  }
  for (let i = 0; i < A6S.length; i++) {
    let a6S = A6S[i];
    a6S.click();
  }
  for (let i = 0; i < A6.length; i++) {
    let a6 = A6[i];
    a6.click();
  }
  for (let i = 0; i < G5S.length; i++) {
    let g5S = G5S[i];
    g5S.click();
  }
  for (let i = 0; i < G5.length; i++) {
    let g5 = G5[i];
    g5.click();
  }
  for (let i = 0; i < F5S.length; i++) {
    let f5S = F5S[i];
    f5S.click();
  }
  for (let i = 0; i < F5.length; i++) {
    let f5 = F5[i];
    f5.click();
  }

  for (let i = 0; i < E5.length; i++) {
    let e5 = E5[i];
    e5.click();
  }
  for (let i = 0; i < D5S.length; i++) {
    let d5S = D5S[i];
    d5S.click();
  }
  for (let i = 0; i < D5.length; i++) {
    let d5 = D5[i];
    d5.click();
  }
  for (let i = 0; i < C5S.length; i++) {
    let c5S = C5S[i];
    c5S.click();
  }
  for (let i = 0; i < C5.length; i++) {
    let c5 = C5[i];
    c5.click();
  }
  for (let i = 0; i < B5.length; i++) {
    let b5 = B5[i];
    b5.click();
  }
  for (let i = 0; i < A5S.length; i++) {
    let a5S = A5S[i];
    a5S.click();
  }
  for (let i = 0; i < A5.length; i++) {
    let a5 = A5[i];
    a5.click();
  }
  for (let i = 0; i < G4S.length; i++) {
    let g4S = G4S[i];
    g4S.click();
  }
  for (let i = 0; i < G4.length; i++) {
    let g4 = G4[i];
    g4.click();
  }
  for (let i = 0; i < F4S.length; i++) {
    let f4S = F4S[i];
    f4S.click();
  }
  for (let i = 0; i < F4.length; i++) {
    let f4 = F4[i];
    f4.click();
  }

  for (let i = 0; i < E4.length; i++) {
    let e4 = E4[i];
    e4.click();
  }
  for (let i = 0; i < D4S.length; i++) {
    let d4S = D4S[i];
    d4S.click();
  }
  for (let i = 0; i < D4.length; i++) {
    let d4 = D4[i];
    d4.click();
  }
  for (let i = 0; i < C4S.length; i++) {
    let c4S = C4S[i];
    c4S.click();
  }
  for (let i = 0; i < C4.length; i++) {
    let c4 = C4[i];
    c4.click();
  }
  for (let i = 0; i < B4.length; i++) {
    let b4 = B4[i];
    b4.click();
  }
  for (let i = 0; i < A4S.length; i++) {
    let a4S = A4S[i];
    a4S.click();
  }
  for (let i = 0; i < A4.length; i++) {
    let a4 = A4[i];
    a4.click();
  }
  for (let i = 0; i < G3S.length; i++) {
    let g3S = G3S[i];
    g3S.click();
  }
  for (let i = 0; i < G3.length; i++) {
    let g3 = G3[i];
    g3.click();
  }
  for (let i = 0; i < F3S.length; i++) {
    let f3S = F3S[i];
    f3S.click();
  }
  for (let i = 0; i < F3.length; i++) {
    let f3 = F3[i];
    f3.click();
  }
  for (let i = 0; i < E3.length; i++) {
    let e3 = E3[i];
    e3.click();
  }

  //playbutton
  p1.click();

  //pausebutton
  p2.click()

  //stopbutton
  s.click()
}

//block
class Block {
  constructor(x, y, snd) {
    this.x = x;
    this.y = y;
    this.snd = snd
    this.width = 1000 / 20;
    this.height = 1000 / 40;
    this.color = 250;
  }
  display() {
    push();
    strokeWeight(1)
    stroke(220)
    fill(this.color);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
  click() {
    if (dist(mouseX, mouseY, this.x, this.y) < 12.5) {
      if (this.color === 250) {
        this.color = 220;
        this.snd.play();
      } else {
        this.color = 250;
      }
    }
  }
  sound() {
    if (lineX >= this.x - 26 && lineX <= this.x - 24 && this.color === 220) {
      this.color = 100
      this.snd.play();
    }
    if (lineX >= this.x + 24 && lineX <= this.x + 26 && this.color === 100) {
      this.color = 220
      this.snd.stop();
    }
  }
}


//play button
class PlayButton {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = 250
  }
  click() {
    if (dist(this.x, this.y, mouseX, mouseY) < 500 / 30) {
      if (lineSpd === 0) {
        lineSpd = map(tempo, 1, 10, 1, 2);
      }
    }
  }

  display() {
    rectMode(CENTER);
    if (dist(this.x, this.y, mouseX, mouseY) < 500 / 30) {
      fill(220);
      if (mouseIsPressed) {
        fill(190);
      }
    } else {
      fill(250);
    }
    rect(this.x, this.y, 1000 / 30, 1000 / 30);
    fill(0);
    triangle(
      this.x - 1000 / 80,
      this.y - 1000 / 80,
      this.x - 1000 / 80,
      this.y + 1000 / 80,
      this.x + 1000 / 80,
      this.y
    );
  }
}

class PauseButton {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.color = 250
  }
  click() {
    if (dist(this.x, this.y, mouseX, mouseY) < 500 / 30) {
      if (lineSpd > 0) {
        lineSpd = 0
      }
    }
  }
  display() {
    rectMode(CENTER);
    if (dist(this.x, this.y, mouseX, mouseY) < 500 / 30) {
      fill(220);
      if (mouseIsPressed) {
        fill(190);
      }
    } else {
      fill(250);
    }
    rect(this.x, this.y, 1000 / 30, 1000 / 30);
    fill(0)
    rect(this.x - 7, this.y, 5, 20)
    rect(this.x + 7, this.y, 5, 20)
  }
}

class StopButton {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  click() {
    if (dist(this.x, this.y, mouseX, mouseY) < 500 / 30) {
      lineX = 93.5
      lineSpd = 0
    }
  }

  display() {
    rectMode(CENTER);
    if (dist(this.x, this.y, mouseX, mouseY) < 500 / 30) {
      fill(220);
      if (mouseIsPressed) {
        fill(190);
      }
    } else {
      fill(250);
    }
    rect(this.x, this.y, 1000 / 30, 1000 / 30);
    fill(0)
    rect(this.x, this.y, 20, 20)
  }
}