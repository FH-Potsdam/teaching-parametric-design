const sketchHeight = 400
const sketchWidth = 400
let count = 100;
let speed = 1;
const particles = [];
let audio;

let amplitude;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  
  getAudioContext().suspend();
  userStartAudio();

  audio = new p5.AudioIn();
  audio.start();

  // fft = new p5.FFT();
  // fft.setInput(audio);
  amplitude = new p5.Amplitude();
  amplitude.setInput(audio);

}

function draw() {
  background('#27273B');
  fill(random(155,175),random(145,170),random(240,250));


   //start
   for (let i = 0; i < count; i += 1) {
    particles.push({
      radius: random(4, 9),
      
      x: random(0,sketchWidth),
      y: random(0,sketchHeight),
      
      vx: random(-speed, speed), 
      vy: random(-speed, speed) 
    });
  }
  noStroke();

  let snap = amplitude.getLevel();
  console.log(snap);

  for (let i = 0; i < count; i += 1) {
    //move
    particles[i].x += particles[i].vx;
    particles[i].y += particles[i].vy;

    //draw
    circle(particles[i].x, particles[i].y, particles[i].radius);

   //richtungswechsel
    //let snap = fft.analyze();

    if (particles[i].x + particles[i].radius / 2 > sketchWidth) 
    {particles[i].vx *= -1;}
    else if (particles[i].x - particles[i].radius / 2 < 0) 
    {particles[i].vx *= -1;}

    if (particles[i].y + particles[i].radius / 2 > height) 
    {particles[i].vy *= -1;}
    else if (particles[i].y - particles[i].radius / 2 < 0) 
    {particles[i].vy *= -1;}

    if (snap > 0.2) {
      particles[i].vy *= -1;
    }

  }
}