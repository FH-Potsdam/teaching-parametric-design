**Parametric Design**

## Sound

### Setup

For using sound you need to add a library to your folder structure. [Download](https://github.com/processing/p5.js-sound/blob/main/lib/p5.sound.js) (click on raw and then save) and add it to *code/libraries/p5js/libraries/* (if it does not already exist there). In your **index.html** file update to:

```html
<script src="../libraries/p5js/p5.min.js"></script>
<script src="../libraries/p5js/libraries/p5.svg.js"></script>
<script src="../libraries/p5js/libraries/p5.sound.min.js"></script>
```

The example sound can be found [here](https://github.com/FH-Potsdam/teaching-parametric-design/tree/main/code/testing).

### Modes

With the sound library we can also generate sounds, this document will focus on analysing sounds. Check the [documentation](https://p5js.org/reference/#/libraries/p5.sound) for all features.

For analysing sound, we have two options, we use a sound input (microphone) or and audio file. The easiest way and the highest quality is using an audio file.

There is a hack that passes the sound from your computer to a virtual input device. Which for example allows you to pass the audio output of any app the microphone, giving you high flexibility and input quality. But you need software to do so. For windows there is [VB-Audio](https://vb-audio.com/Cable/index.htm) and for mac there was [LineIn](https://www.rogueamoeba.com/freebies/), but they changed to Audio Hijack which now costs money.

### Audio Files

As all external resources, we preload our audio file(s):

```js
let audio;

function preload() {
  audio = loadSound('loop.wav');
}

function setup() {
  // Will loop the audio track forever
  audio.loop();
}
```

### Microphone Input

Some browsers will require you to give the website access to your microphone.

```js
let audio;

function setup() {
  // Browser hack for mic activation
  getAudioContext().suspend();
  userStartAudio();

  audio = new p5.AudioIn();
  audio.start();
}
```

### Audio Analysis

The audio analysis is the same for the audio file and the microphone input. There are three main analysis features:

- Amplitude: Loudness, Sound level
- FFT: Fast-Fourier-Transform > Output of sound channels
- Peak: Sound peaks (not perfect)

### Amplitude

```js
let amp;
function setup() {
  // audio activation...

  amp = new p5.Amplitude();
  amp.setInput(audio);
}

function draw() {
  const level = amp.getLevel();
  circle(width/2, height/2, level, level);
}
```

### FFT

In an FFT sounds are represented as channels, each channel or groups of channels can be use as input for a visualisation:

```js
let fft;
function setup() {
  // audio activation...

  fft = new p5.FFT();
  fft.setInput(audio);
}

function draw() {
  let spectrum = fft.analyze();
  noStroke();
  fill(255, 0, 255);
  for (let i = 0; i < spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h )
  }

  let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(20);
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
}
```

### Peak

The peak detection requires fft data:

```js
let peakDetect;
let fft;

function setup() {
  // audio activation...

  fft = new p5.FFT();
  fft.setInput(audio);

  peakDetect = new p5.PeakDetect();
}

function draw() {
  fft.analyze();
  peakDetect.update(fft);

  if ( peakDetect.isDetected ) {
    fill('rgba(255,0,0,0.5)');
  } else {
    fill('rgba(0,0,0,0.5)');
  }
}
```
