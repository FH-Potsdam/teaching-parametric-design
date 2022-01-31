const fs = require('fs');
const path = require('path');
const postcss = require('postcss');

module.exports = class {
  fileName = null;

  constructor(_fileName) {
    this.fileName = _fileName;
  }

  async data () {
    const rawFilepath = path.join(__dirname, `../site/_includes/postcss/${this.fileName}`);
    return {
      permalink: `css/${this.fileName.replace('.scss', '.css')}`,
      rawFilepath,
      rawCss: await fs.readFileSync(rawFilepath)
    };
  };

  async render ({ rawCss, rawFilepath }) {
    return await postcss([
      require('postcss-normalize'),
      require('precss'),
      require('postcss-import'),
      require('postcss-mixins'),
      require('postcss-color-mix'),
      require('cssnano')
    ])
    .process(rawCss, { from: rawFilepath })
    .then(result => result.css);
  };
}
