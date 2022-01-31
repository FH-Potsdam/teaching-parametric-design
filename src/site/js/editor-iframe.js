window.addEventListener("message", (event) => {
  if (event.origin !== '/') { // TODO: stop script
    console.log('foreign request', event.origin);
  }

  const oldScript = document.querySelector('#script');
  if (oldScript) { oldScript.remove(); }

  var script = document.createElement('script');
  script.setAttribute('id', 'script');

  // const/var are very strict, var allows us to set a variable multiple times
  let code = event.data;

  code = code.replaceAll(/(?<=[\s]|^)(const|let)(?=[\s])/gm, 'var');

  // p5js calls setup only once its loaded, so we need to call the updated setup ourselves
  code = code.replace('function setup', 'function setup_____alt');
  if (code.indexOf('function setup_____alt') >= 0) {
    code += 'setup_____alt();';
  }

  // create canvas can only be called once, so createCanvas(width, height) is translated to resizeCanvas(width, height)
  const createRegex = /createCanvas\([\s]*([0-9]*)[\s]*,[\s]*([0-9]*)[\s]*[,]*[\s]*(SVG|WEBGL)*[\s]*\)[;]*/gm;
  const createMatch = createRegex.exec(code);
  if (createMatch && createMatch.length > 0) {
    code = code.replace(createRegex, 'resizeCanvas(' + createMatch[1] + ',' + createMatch[2] + ')');
  }

  try {
    script.appendChild(document.createTextNode(code));
    document.body.appendChild(script);
  } catch (e) {
    script.text = code;
    document.body.appendChild(script);
  }
}, false);

function setup() {
  createCanvas(400, 400);
}