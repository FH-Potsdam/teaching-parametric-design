let audio;

function preload(){
  // preload assets
  audio = loadSound('music.mp3');
}

const canvasWidth = 400;
const canvasHeight = 400;

let fft;
let amp;
  
function setup() {
  createCanvas(400, 400);
  audio.loop();
  fft = new p5.FFT();
  fft.setInput(audio);
  amp = new p5.Amplitude();
  amp.setInput(audio);
}

let time = 0;

function draw() {
  // background(255);
  // let spectrum = fft.analyze();
  // noStroke();
  // fill(255, 0, 255);
  // for (let i = 0; i < spectrum.length; i++){
  //   let x = map(i, 0, spectrum.length, 0, width);
  //   let h = -height + map(spectrum[i], 0, 255, height, 0);
  //   rect(x, height, width / spectrum.length, h )
  // }

  // let waveform = fft.waveform();
  // noFill();
  // beginShape();
  // stroke(20);
  // for (let i = 0; i < waveform.length; i++){
  //   let x = map(i, 0, waveform.length, 0, width);
  //   let y = map( waveform[i], -1, 1, 0, height);
  //   vertex(x,y);
  // }
  // endShape();

  noStroke();

  fill(255, 0, 0, 100);
  const level = amp.getLevel() * 400;
  circle(time, 200 + level, 5, 5);

  time += 0.1;
}