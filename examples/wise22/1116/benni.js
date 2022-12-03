const circleSize = 20;
let Farbe_1 = ("#800080")
let Farbe_2 = ("#ff8c00")
let Farbe_3 = ("#808080")

const canvasWidth = 400;

function preload(){
  // preload assets
}

function setup() {
  createCanvas(canvasWidth, 400);
}

function draw() {
  background (0);
  fill(Farbe_3);
  stroke(Farbe_1)
  strokeWeight(2)
  rectMode(CENTER)

  const abstand = 30;
  let y = 0
  let yCounter = 0
  while (y <= 400) {
    let x = abstand
    if (yCounter%2 === 0) {
      x = abstand/2;
      stroke(Farbe_2)
    }
    while(x <= 400) {
      stroke(Farbe_1)
      if (x>=abstand*2.5) {
        stroke(Farbe_2);
      }
      if (yCounter%2 === 0) {
        stroke(Farbe_2)
        if (x>=abstand*2) {
          stroke(Farbe_1);
        }
      }
      circle (x, 20 + y, circleSize);
      x += abstand;
    }
    y += abstand;
    yCounter += 1;
  }

  /*stroke(Farbe_2)
  let a =0
  while(a <= 300) {
    let b =0
    while(b <=300) {
    circle (0 + a, 60 + b, circleSize);
    b +=80;
    }
    a += 60;

    if (a>=120) {
      stroke(Farbe_1);
    }
  }*/
  /*
  fill(Farbe_1)
  stroke(Farbe_2)
  let m =0;
  while(m<= 300) {
  rect(75 + m, 400, 50, 50);
  m += 50;

  if(m%20=== 0) {
    fill(Farbe_1);
  } 
   else {
    fill (Farbe_3);
  }
  }


  fill(Farbe_1)
  stroke(Farbe_2)
  let r =0;
  while(r<= 300) {
  rect(125 + r, 350, 50, 50);
  r += 50;

  if(r%20=== 0) {
    fill(Farbe_1);
  } 
   else {
    fill (Farbe_3);
  }
  }

  fill(Farbe_1)
  stroke(Farbe_2)
  let o =0;
  while(o<= 300) {
  rect(175 + o, 300, 50, 50);
  o += 50;

  if(o%20=== 0) {
    fill(Farbe_1);
  } 
   else {
    fill (Farbe_3);
  }
  }

  fill(Farbe_1)
  stroke(Farbe_2)
  let p =0;
  while(p<= 300) {
  rect(225 + p, 250, 50, 50);
  p += 50;

  if(p%20=== 0) {
    fill(Farbe_1);
  } 
   else {
    fill (Farbe_3);
  }
  }

  fill(Farbe_1)
  stroke(Farbe_2)
  let u =0;
  while(u<= 300) {
  rect(275 + u, 200, 50, 50);
  u += 50;

  if(u%20=== 0) {
    fill(Farbe_1);
  } 
   else {
    fill (Farbe_3);
  }
  }

  fill(Farbe_1)
  stroke(Farbe_2)
  let t =0;
  while(t<= 300) {
  rect(325 + t, 150, 50, 50);
  t += 50;

  if(t%20=== 0) {
    fill(Farbe_1);
  } 
   else {
    fill (Farbe_3);
  }
  }

  fill(Farbe_1)
  stroke(Farbe_2)
  let h =0;
  while(h<= 300) {
  rect(375 + h, 100, 50, 50);
  h += 50;

  if(h%20=== 0) {
    fill(Farbe_1);
  } 
   else {
    fill (Farbe_3);
  }
  }
  */

  const quadSize = 50;
  for (let zeile = 1; zeile < 8; zeile += 1) {
    for (let quadrat = 1; quadrat <= zeile; quadrat += 1) {
      fill(Farbe_3)
      if(quadrat%2 === 0) {
        fill(Farbe_1)
      }
      
      if (zeile%2 === 0) {
        fill(Farbe_1)
        if(quadrat%2 === 0) {
          fill(Farbe_3)
        }
      }
      rect(canvasWidth - quadrat * quadSize + quadSize/2, zeile * quadSize + 50, quadSize, quadSize);
    }
  }

  
  // stroke(Farbe_2);
  // line (50, 425, 425, 50);
  // stroke(Farbe_3);
  // line (0, 425, 425, 0);
  // stroke(Farbe_1);
  // line (-25, 400, 400, -25);
  // stroke(Farbe_2);
  // line (-25, 350, 350, -25);

  const strichstaerke = 36;

  strokeWeight (strichstaerke);

  strokeCap(PROJECT);

  let colorCounter = 1;
  for(let lineCounter = 0; lineCounter < 4; lineCounter += 1) {

    if (colorCounter === 1) {
      stroke(Farbe_1);
    } else if (colorCounter === 2) {
      stroke(Farbe_2);
    } else {
      stroke(Farbe_3);
    }

    line(
      -25 + lineCounter * (25.456 * 2),
      400,
      -25 + 400 + lineCounter * (25.456 * 2),
      0
    );

    colorCounter += 1;
    if (colorCounter > 3) {
      colorCounter = 1;
    }
  }

}