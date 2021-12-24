**Parametric Design**

## Forces

### Setup

You will need to add [D3js](https://d3js.org/d3.v7.min.js) to your *libraries* folder.

### Setting up the simulation

The D3 library has a sophisticated simulation system for forces, elements attracting and repelling one another. To get started we need to create an array of nodes:

```js
const nodes = [];
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
```

Make sure the **nodes** variable is defined in the global scope, because the simulation will constantly modify this array and we can then use it later to draw our nodes. Besides the starting x/y position we can also make some nodes fixed in their position by defining fx/fy. Those nodes have forces towards other nodes in the simulation, but they cannot move themselve.

If you want to define relationships between you nodes, in other words nodes that should stick together, you can also define an array with links:

```js
const links = [
  {source: 0, target: 1},
  {source: 1, target: 2},
  {source: 2, target: 3}
];
```

Links only need to be defined in one direction, not both. The value of target and source are the id in the nodes array. You could also use strings as ids, they just need to match the nodes array.

When you have your nodes and links it is time to setup the simulation:

```js
simulation = d3.forceSimulation(nodes)
  .force("charge", d3.forceManyBody().strength(20)) // positive > everything attracts, negative > everything repells
  .force("link", d3.forceLink(links).strength(5).distance(5))
  .force('collision', d3.forceCollide().radius(function(d, index) {
    return d.radius / 2 + 4;
  }))
  .force("center", d3.forceCenter(sketchWidth/2, sketchHeight/2));
```

With *center* we anchor our network of elements to a certain position on the screen. *Collision* allows us to define when things should consider a collision. If you don't have any links, just remove the *link* force. Play around with the various strengths and distances. This heavily relies on the size and model of your network.

In the following example i am moving the first node in the network with the mouse pushing away other nodes. To restart the simulation i am resetting the *alpha* value. Alpha counts down to zero from 1 during active simulation:

```js
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
    //.force("charge", d3.forceManyBody().strength(20)) // positive > everything attracts, negative > everything repells
    //.force("link", d3.forceLink(links).strength(5).distance(5))
    .force('collision', d3.forceCollide().radius(function(d, index) {
      if (index === 0) {
        return 40;
      }
      return d.radius / 2 + 4;
    }))
    .force("center", d3.forceCenter(sketchWidth/2, sketchHeight/2));

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
```

### Circle Packing

If you simply add a very strong strength on forceManyBody and center the network, you will automatically have circle packing effect. As all nodes are drawn towards the center, while they keep a distance to one another:

```js
simulation = d3.forceSimulation(nodes)
  .force("charge", d3.forceManyBody().strength(200))
  .force('collision', d3.forceCollide().radius(function(d, index) {
    return d.radius / 2 + 4;
  }))
  .force("center", d3.forceCenter(sketchWidth/2, sketchHeight/2));
```