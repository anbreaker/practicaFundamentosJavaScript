const fs = require('fs');
const {decomposingArabNumber} = require('./decomposingArabNumber');

const data = fs.readFileSync('dataRandom.csv', 'utf-8');
console.log('Data Read Successfully!');

const arrayRomanNumber = data.split(/\r?\n/).map(function (arabNum) {
  const res = decomposingArabNumber(arabNum);
  console.log(`Arabic Number -> ${arabNum} \t Roman Number -> ${res}`);
  return res;
});

// Observe the OS
fs.writeFileSync(
  'resultsArabic.csv',
  arrayRomanNumber.toString().replace(/,/g, '\n'),
  'utf-8'
);
