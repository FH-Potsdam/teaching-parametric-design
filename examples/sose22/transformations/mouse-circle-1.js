var circles = [];

const sketchWidth = 1440;
const sketchHeight = 720;

function setup() {
  createCanvas(sketchWidth, sketchHeight);

  // Try to get to 500
  while (circles.length < 500) {
    // Pick a random circle
    const randomRadius = random(6, 36);
    var dot = {
      x: random(sketchWidth),
      y: random(sketchHeight),
      r: randomRadius,
      originalR: randomRadius
    };

    // Does it overlap any previous circles?
    var overlapping = false;
    for (var j = 0; j < circles.length; j++) {
      var other = circles[j];
      var d = dist(dot.x, dot.y, other.x, other.y);
      if (d < dot.r + other.r + 10) {
        overlapping = true;
      }
    }

    // If not keep it!
    if (!overlapping) {
      circles.push(dot);
    }

    // Are we stuck?
    protection++;
    if (protection > 10000) {
      break;
    }
  }
}


var protection = 0;

function draw (){
  background(255);
  // Lets make sure we don't get stuck in infinite loop



  // Draw all the circles
  for (var i = 0; i < circles.length; i++) {
    fill(0);
    noStroke();
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);

    const mouseDist = dist(circles[i].x, circles[i].y, mouseX, mouseY);
    if (mouseDist < circles[i].r) {
      circles[i].r += 1;
    } else if (circles[i].r > circles[i].originalR) {
      circles[i].r -= 1;
    }
  }
}