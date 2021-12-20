**Parametric Design**

## Data

In p5js we can easily load data. The easiest to load is either JSON or CSV.

### JSON

The JSON-syntax is exactly as we would structure an **object** in JavaScript. We can create arrays and attributes as we like and nest them:

```json
{
  "data": [
    {
      "timestamp": "2021-12-03",
      "temperature": {
        "max":4.162572,
        "min":-2.337428,
        "avg":0.66673845
      }
    },
    ...
  ]
}
```

If you have a very small and simple JSON structure, you could simply add it directly to your code, without any need to load it:

```js
const data = {
    "array": [0,1,2,3,4],
    "nest": {
      "attribute": "Hello World"
    }
};
```

If you are building an **object** directly in code, you can also leave out the surrounding quotes of the keys:

```js
const data = {
    array: [0,1,2,3,4],
    nest: {
      attribute: "Hello World"
    }
};
```

For both data types, we load the data in the **preload** function. To access the data later on, make sure to define the variables in the global scope:

```js
let json;

function preload() {
  json = loadJSON('test.json');
}

function draw() {
  text(json.data[0].timestamp, 10, 10);
}
```

### CSV

A csv file is the most simple version of tabular data. While the header is optional, it makes it a lot easier to work with the data. As the name says (comma separated values), the columns are separated by commas. But sometimes (especially Excel) other separaters (often semicolons) are used:

```csv
id,timestamp,max,min,avg
1,2021-12-03,4.162572,-2.337428,0.66673845
2,2021-12-04,3.022572,0.3425719,1.4954885
```

If you want to add a text that includes a comma, add quotes around it:

```csv
1,"Hello, World!",2,3
```

To load the csv simply use the **loadTable** function in the **preload** function:

```js
let table;

function preload() {
  table = loadTable('test.csv', 'csv', 'header');
}
```

Sadly it isn't as simple as with the JSON object to access the data in the table:

```js

const numberOfRows = table.getRowCount();
const numberOfColumns = table.getColumnCount();

// Get an array of all values of a column
const timestamps = table.getColumn('timestamp');
// timestamps[0]

const rows = table.getRows();
for (let r = 0; r < rows.length; r += 1) {
  const timestamp = rows[r].getColumn('timestamp');
}
```
Unlike JSON, in a CSV table, all values are **strings**, so you might need to convert them to numbers:

```js
const num = parseInt(intString);
const num = parseFloat(floatString);
```

All the functions can be found [here](https://p5js.org/reference/#/p5.Table).

## Full example

The example JSON and CSV files can be found [here](https://github.com/FH-Potsdam/teaching-parametric-design/tree/main/code/testing): 

```js
const sketchWidth = 400;
const sketchHeight = 400;

function preload() {
  json = loadJSON('test.json');
  table = loadTable('test.csv', 'csv', 'header');
}

function setup () {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  background(255);

  noStroke();
  for(let j = 0; j < json.data.length; j += 1) {
    fill('black');
    rect(0, j, json.data[j].temperature.max * 10, 1);
  }

  const temperature_max = table.getColumn('temperature_max');
  for (let t = 0; t < temperature_max.length; t += 1) {
    fill('red');
    rect(0, t + 200, parseInt(temperature_max[t]) * 10, 1);
  }

  noLoop();
}
```