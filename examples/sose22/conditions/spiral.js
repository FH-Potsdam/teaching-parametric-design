function preload() {
    // preload assets
  }
  
  function setup() {
    createCanvas(sketchWidth, sketchHeight);
  }
  
  const sketchWidth = 400;
  const sketchHeight = 400;
  const angleDistance = 3;
  const maxAngle = 320;
  
  const points = [];
  
  function setup() {
    createCanvas(sketchWidth, sketchHeight);
    for (let p = 0; p < 100; p += 1) {
      points.push({
        layer: random(100, 120),
        angle: random(0, maxAngle)
      });
    }
  }
  
  function draw() {
    background(255);
  
    noFill();
    beginShape();
    for (let x = 0; x < sketchWidth; x += 1) {
      vertex(x, sin(((Math.PI * 10) / sketchWidth) * x) * 10 + sketchHeight / 2);
    }
    endShape();
  
    stroke(0);
    fill(255);
    circle(200, 200, 100);
  
    for (let p = 0; p < points.length; p += 1) {
        const angle = points[p].angle;
        const layer = points[p].layer;
  
        // each layer the angle is offset
        const rad = (Math.PI / 180) * (angle + layer * 4);
  
        // we use the angle also as a radius in the polar function
        // so the bigger the angle, the bigger the radius
        const x = angle * cos(rad);
        const y = angle * sin(rad);
  
        // we also use the angle for the circle size
        // growing angle, radius and size
        circle(
          x + sketchWidth / 2 + 100,
          y + sketchHeight / 2,
          angle / 100);
  
          points[p].angle += 1;
          if (points[p].angle > maxAngle) {
            points[p].angle = 0;
          }
    }
  }