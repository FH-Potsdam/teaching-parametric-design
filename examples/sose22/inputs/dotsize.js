/*
  Inspired (typed, commented and changed. *psssst) by
    https://www.youtube.com/watch?v=RrSOv9FH6uo

  inspiration + explanation for golden ratio: 
    Numberphile - The Golden Ratio (why it is so irrational)
    https://www.youtube.com/watch?v=sj8Sg8qnjOg
*/

let sliderDotSize; //erstellt Variable Slider
let colorPicker; // erstellt Variable für Fabauswahl
let sliderB;

function setup() {
  const size = min(400);
  createCanvas(size, size);
  // Erstellt SLider für die größe der Kreise
  sliderDotSize = createSlider(0.01, 0.1, 0.01, 0.01);
  sliderDotSize.position(20, 460);
  sliderDotSize.size(100);
  //Erstellt slider B
  sliderB = createSlider(0.01, 0.1, 0.01, 0.01);
  sliderB.position(20, 480);
  sliderB.size(100);
  // Erstelllt Farbauswahlfeld
  colorPicker = createColorPicker('#aa3bff');
  colorPicker.position(20, 420);
  noStroke();

  //color
  colorMode(HSL, 1);
}


function cosn(v) { // noramlisierte cosinus funktion. 
  return sin(v * TWO_PI) * 0.5 + 0.5 //geht hoch, damit diese von oben nach unten geht und nicht wieder von unten nach oben wird innvertierte cos genutzt.
}
function invCosn(v) { //invertierte Cosinus Funktion 
  return 1 - cosn(v);
}

const spirale = 3
let dotSize = 0.01;//slider.sliderDotSize();//sliderDotSize.value(); //größe der punkte wird hier Definiert / wird beeinflusst durch den Slider über "sliderA.value()"
const radius = Math.sqrt(0.5) + dotSize; // größe der kreise + DotSize damit der Kreis von der mitte aus startet
const PHI = (1 + Math.sqrt(5)) / spirale; //phi = irationale nummer, daraus quadratwurzel aus (5)

let t;   // zeit
const frames = 600; //frames

function draw() {

  dotSize = sliderDotSize.value();
  
  t = fract(frameCount / frames); // fractional  wie viele Frames zum rendern, wird zum animieren benutzt
  //t = mouseX / width; per Maus steuern zum testen
  // X Y resize
  scale(width, height);
  background(0);
  fill(1);
  //polar koordinaten 

  //mehrere kreise in einem Kreis angeordnet
  const count = 3000 * invCosn(t); //anzahl der einzelnen Kreise * time (animation)
    //loop
  console.log(sliderDotSize.value());
  for (let i=0; i < count; i++) {

  // Kreise
    const f = i / count; // fraction
    const a = i / PHI; // anordnung im Kreis/spirale = PI oder PHI
    const dist = f * radius; // distance = fraction * radius
    const x = 0.5 + cos(a * TWO_PI) * dist;
    const y = 0.5 + sin(a * TWO_PI) * dist;
    const sig = pow(cosn(f + t * 6), 1.3);  // Signal für weniger Punkte in der mitte, fraction + time 
    const r = sig * f * dotSize;  // vorher war     const r = sig * f * dotSize;


    const hue = fract(f * 1.15 + t); //Farbe über zeit ändern. 
    const sat = 1;
    const light = 0.6 * sig + 0.1; 
    const clr = colorPicker.color();//use color Value from Colorpicker  //color(hue, sat, light);
    fill(clr);

    circle(x, y, r);
  }
}