const sketchWidth = 400;
const sketchHeight = 400;
let simulation;
const nodes = [];

function setup () {
  createCanvas(sketchWidth, sketchHeight);

  for (let n = 0; n < 10; n += 1) {
    nodes.push({
      id: n,
      radius: random(5, 20),
      x: random(0, sketchWidth),
      y: random(0, sketchHeight),
      // fx: 0, // fixed position
      // fy: 0,
    });
  }

  nodes[0].fx = sketchWidth/2;
  nodes[0].fy = sketchHeight/2;
  nodes[0].x = sketchWidth/2;
  nodes[0].y = sketchHeight/2;

  const links = [
    {source: 0, target: 1},
    {source: 1, target: 2},
    {source: 2, target: 3}
  ];

  simulation = d3.forceSimulation(nodes)
    //.force("charge", d3.forceManyBody().strength(5)) // positive > everything attracts, negative > everything repells
    //.force("link", d3.forceLink(links).strength(5).distance(5))
    .force('collision', d3.forceCollide().radius(function(d, index) {
      if (index === 0) {
        return 40;
      }
      return d.radius / 2 + 4;
    }));
    //.force("center", d3.forceCenter(sketchWidth/2, sketchHeight/2));

  ellipseMode(CENTER);
}

function draw() {
  background(255);
  noStroke();
  fill('black');
  for (let n = 0; n < nodes.length; n += 1) {
    circle(nodes[n].x, nodes[n].y, nodes[n].radius);
  }
}

function mouseMoved() {
  nodes[0].fx = mouseX;
  nodes[0].fy = mouseY;
  simulation.alpha(1);
}