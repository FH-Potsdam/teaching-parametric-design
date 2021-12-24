// https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.0/color-thief.umd.js
let img;

function preload() {
  img = loadImage('bunny.png');
}

let colorThief;

function setup() {
  colorThief = new ColorThief();
  createCanvas(400, 400);
}

function draw() {
  image(img, 0, 0);

  const canvas = document.querySelector('canvas');

  const color = colorThief.getColor(canvas);
  const palette = colorThief.getPalette(canvas);

  console.log(color, palette);
  noLoop();
}