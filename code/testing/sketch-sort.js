let img;
let kmeans;
let kmeansReady = false;
const imageSize = 60;
const offset = 10;

function preload() {
  img = loadImage('bunny.png');
}

function setup() {
  createCanvas(400, 400);

  img.resize(imageSize, imageSize);
  img.loadPixels();
  
  const data = [];

  for (let i = 0; i < img.pixels.length; i += 4) {
    data.push({
      r: img.pixels[i],
      g: img.pixels[i + 1],
      b: img.pixels[i + 2]
    });
  }

  const options = {
    k: 6, // number of clusters
    maxIter: 4, // number of optimization iterations
    threshold: 0.5,
  };

  // Initialize the magicFeature
  kmeans = ml5.kmeans(data, options, function () {
    kmeansReady = true;
  });
}

function draw() {
  if (kmeansReady) {
    console.log(kmeans.dataset);
    image(img, 0, 0);
    const cluster = {};
    for (let d = 0; d < kmeans.dataset.length; d += 1) {
      const id = kmeans.dataset[d].centroid;
      if (!(id in cluster)) {
        cluster[id] = [];
      }
      cluster[id].push([
        kmeans.dataset[d][0],
        kmeans.dataset[d][1],
        kmeans.dataset[d][2]
      ]);
    }
    noStroke();
    translate(0, imageSize + offset);
    const clusterKeys = Object.keys(cluster);
    for (let k = 0; k < clusterKeys.length; k += 1) {
      const key = clusterKeys[k];
      for (let c = 0; c < cluster[key].length; c += 1) {
        fill(cluster[key][c][0], cluster[key][c][1], cluster[key][c][2]);
        const y = floor(c / width);
        const x = c - y * width;
        rect(x, y, 1, 1);
      }
      translate(0, ceil(cluster[key].length / width) + offset);
    }
    noLoop();
  }
}