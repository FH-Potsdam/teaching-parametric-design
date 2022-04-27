const sketchWidth = 400;
const sketchHeight = 400;

const sterne = [];

const maxSize = 5;
const growValue = 0.1;

let offsetX = 0;


let audio;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  frameRate(30);

  getAudioContext().suspend();
  userStartAudio();

  audio = new p5.AudioIn();
  audio.start();

  fft = new p5.FFT();
  fft.setInput(audio);

  for (let sternCount = 0; sternCount < 100; sternCount += 1) {
    sterne.push({
      x: random(0, sketchWidth),
      y: random(0, sketchHeight),
      radius: random(1, maxSize),
      fade: random(0, 255),
      grow: Math.round(random(0,1))
    });
  }
}

let offset = 0;

function draw() {
  //background('#361C0C');
  //background('lightBlue');
  background('#040638');

  noStroke(); 

  
   //kosmos
    const size = 5;

    for (let nx = 0; nx < 400; nx += size) {
      for (let ny = 0; ny < 400; ny += size) {
      
        const colorValue = noise(
          nx / 40,
          ny / 40,
          offset
        );
        fill(25, colorValue * 100, 50);
        rect(nx, ny, size);
      }
    }

    offset += 0.03;



   //schein 1
   noStroke()
   fill('#1B1A38')
    
    circle(random(198,202),random(198,202),random(130,140))

   //schein 2
   noStroke()
   fill('#232338')
   
    circle(random(198,202),random(198,202),random(100,110))



   //strahlen
   stroke(random(240,250),random(230,240),random(120,140));
   strokeWeight(random(2,3));

   let spectrum = fft.analyze();

    beginShape();
    for(let angle = 0; angle < 360; angle += 15) {
     
     //Strahlenlaenge 
     const radius = spectrum[Math.round(angle/360*255)];
     const iradius = random(75,80);
     
        const x = radius * cos(Math.PI / 180 * angle);
        const y = radius * sin(Math.PI / 180 * angle);

        const ix = iradius * cos(Math.PI / 180 * angle);
        const iy = iradius * sin(Math.PI / 180 * angle);

     
     line(x+sketchWidth/2,y+sketchHeight/2,
     ix+sketchWidth/2,iy+sketchHeight/2);

   }
   endShape(CLOSE);

   
   
   //sterne
   noStroke()
      fill('grey')
  //  for (let y = 0; y < sketchHeight; y += 10) {
  //   const circleDiameter = random(1, 3);
  //   circle(random(10, 390), random(10, 390), circleDiameter);
    
  //  }
  for (let s = 0; s < sterne.length; s += 1) {
    fill(255, 255, 255, sterne[s].radius / 10 * 255);
    circle(sterne[s].x + offsetX, sterne[s].y, sterne[s].radius);

    if (sterne[s].grow) {
      sterne[s].radius += growValue;
      if (sterne[s].radius > maxSize) {
        sterne[s].grow = false;
      }
    } else {
      sterne[s].radius -= growValue;
      if (sterne[s].radius < 0) {
        // sterne[s].x = random(0, 400);
        // sterne[s].y = random(0, 400);
        sterne[s].grow = true;
      }
    }

    // sterne[s].x += random(-1, 1);
    // sterne[s].y += random(-1, 1);
  }

  // offsetX += 0.1

   
   //rand
    stroke(random(230,250),random(180,200),random(30,40));
    strokeWeight(random(4,8));
    fill(random(250,280),random(220,240),random(50,60));

    beginShape();
    for(let angle = 0; angle < 360; angle += 15) {
      const radius = random(35, 40);
      const x = radius * cos(Math.PI / 180 * angle);
      const y = radius * sin(Math.PI / 180 * angle);
      vertex(x + sketchWidth / 2, y + sketchHeight / 2);
    }
    endShape(CLOSE);

   
    //kern
    const pointCount = 90;
    
    stroke('#FFF8E6')
    strokeWeight(random(10,20));
    
    beginShape();
    for (let p = 0; p < pointCount; p += 1) {
      curveVertex(
        random(185, 215),
        random(185, 215)
      );
    }
    endShape();

    //noLoop()

    }
