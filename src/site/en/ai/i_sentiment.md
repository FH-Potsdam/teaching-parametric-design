---
title: Artificial Design
eleventyNavigation:
  title: Intro
  key: en_ai_intro
  parent: en_ai
  navHide: true
  order: 1
---


<style>
body {
  font-family: 'Helvetica Neue', sans-serif;
  box-sizing: border-box;
  line-height: 1.5;
}

h1 {
  margin-bottom: 30px;
  font-size: 34px;
}

.description {
  margin-bottom: 60px;
}

#main {
  width: 1000px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}

.row {
  display: flex;
  flex-direction: row;
}

.row:nth-of-type(2n) {
  background: whitesmoke;
}

.row .text {
  flex: 1 1 auto;
}

.row .label {
  border-left: solid 1px #ccc;
  width: 60px;
  min-width: 60px;
  max-width: 60px;
}

.row:first-of-type .label {
  border: none;
}

.row:first-of-type .label, .row:first-of-type .text {
  font-weight: bold;
  text-transform: lowercase;
  line-height: 1.4;
  padding-bottom: 20px;
}

.positive {
  font-weight: bold;
  color: red;
}

.text, .label {
  padding: 10px;
}

#classify-new-text-input {
  border: none;
  border-bottom: solid 1px #ccc;
  cursor: pointer;
  font-size: 14px;
  line-height: 2;
  width: calc(100% - 127px);
  margin-right: 15px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 4px;
  padding-bottom: 4px;
}
#classify-new-text, #classify-new-text-input {
  display: inline-block;
  vertical-align: top;
}

#classify-new-text {
  border: none;
  text-transform: uppercase;
  padding: 9px 14px 9px 14px;
  font-size: 13px;
  border-radius: 3px;
  letter-spacing: 1px;
  background: #0277bd;
  color: white;
}

#table-wrapper {
  margin-bottom: 60px;
}

p {
  font-weight: bold;
}
</style>

<div id='main'>
  <h1>TensorFlow.js toxicity classifier demo</h1>
  <div class="description">This is a demo of the TensorFlow.js toxicity model, which classifies text according to whether it exhibits offensive attributes (i.e. profanity, sexual explicitness). The samples in the table below were taken from this <a href="https://www.kaggle.com/c/jigsaw-toxic-comment-classification-challenge/data">Kaggle dataset</a>.</div>
  <div id="table-wrapper"></div>
  <p>Enter text below and click 'Classify' to add it to the table.</p>
  <input id="classify-new-text-input" placeholder="i.e. 'you suck'" required="">
  <button id="classify-new-text">Classify</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/toxicity@1.2.2/dist/toxicity.min.js"></script>
<script>
const samples = [
  {
    'id': '002261b0415c4f9d',
    'text':
        'We\'re dudes on computers, moron.  You are quite astonishingly stupid.'
  },
  {
    'id': '0027160ca62626bc',
    'text':
        'Please stop. If you continue to vandalize Wikipedia, as you did to Kmart, you will be blocked from editing.'
  },
  {
    'id': '002fb627b19c4c0b',
    'text':
        'I respect your point of view, and when this discussion originated on 8th April I would have tended to agree with you.'
  }
];

let model, labels;

const classify = async (inputs) => {
  const results = await model.classify(inputs);
  return inputs.map((d, i) => {
    const obj = {'text': d};
    results.forEach((classification) => {
      obj[classification.label] = classification.results[i].match;
    });
    return obj;
  });
};

const addPredictions = (predictions) => {
  const tableWrapper = document.querySelector('#table-wrapper');

  predictions.forEach(d => {
    const predictionDom = `<div class="row">
      <div class="text">${d.text}</div>
      ${
        labels
            .map(
                label => {return `<div class="${
                                 'label' +
                    (d[label] === true ? ' positive' :
                                         '')}">${d[label]}</div>`})
            .join('')}
    </div>`;
    tableWrapper.insertAdjacentHTML('beforeEnd', predictionDom);
  });
};

const predict = async () => {
  model = await toxicity.load();
  labels = model.model.outputNodes.map(d => d.split('/')[0]);

  const tableWrapper = document.querySelector('#table-wrapper');
  tableWrapper.insertAdjacentHTML(
      'beforeend', `<div class="row">
    <div class="text">TEXT</div>
    ${labels.map(label => {
              return `<div class="label">${label.replace('_', ' ')}</div>`;
            }).join('')}
  </div>`);

  const predictions = await classify(samples.map(d => d.text));
  addPredictions(predictions);

  document.querySelector('#classify-new-text')
      .addEventListener('click', () => {
        const text = document.querySelector('#classify-new-text-input').value;
        const predictions = classify([text]).then(d => {
          addPredictions(d);
        });
      });
};

predict();
</script>