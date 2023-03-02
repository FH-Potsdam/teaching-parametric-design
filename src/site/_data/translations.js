const translations = require('./_translations.json');

Object.keys(translations).forEach((key) => {
  if ('de' in translations[key]) {
    translations[key]['dg'] = translations[key].de;
  } else {
    Object.keys(translations[key]).forEach((subKey) => {
      translations[key][subKey]['dg'] = translations[key][subKey].de;
    });
  }
});

module.exports = translations;