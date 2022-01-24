const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(bodyParser.json({limit: '50mb'}));

app.post('/upload/png', async (req, res) => {
  if (!req.body.filename) {
    return res.status(400).send({message: 'missing "filename"'});
  }

  if (!req.body.png) {
    return res.status(400).send({message: 'missing "png"'});
  }

  const base64Data = req.body.png.replace(/^data:image\/png;base64,/, '');
  const buffer = Buffer.from(base64Data, 'base64');
  try {
    fs.writeFileSync(req.body.filename.toString(), buffer, 'utf8');
  } catch (error) {
    res.status(500).send({message: 'error writing image'});
  }
  res.status(200).send({message: 'ok'});
});

app.post('/upload/svg', async (req, res) => {
  if (!req.body.filename) {
    return res.status(400).send({message: 'missing "filename"'});
  }

  if (!req.body.svg) {
    return res.status(400).send({message: 'missing "png"'});
  }

  try {
    fs.writeFileSync(req.body.filename.toString(), req.body.svg.toString(), 'utf8');
  } catch (error) {
    res.status(500).send({message: 'error writing image'});
  }
  res.status(200).send({message: 'ok'});
});

// This is the port for our server http://localhost:3000
const server = app.listen(3001);