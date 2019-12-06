'use strict';

const handleBars = require('handlebars');

const subjects = ['shark', 'popcorn', 'poison', 'fork', 'cherry', 'toothbrush', 'cannon'];
const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];

const randomSubjectIndex = Math.floor(Math.random() * subjects.length);
const randomPunchlinesIndex = Math.floor(Math.random() * punchlines.length);

const resultPhrase = '{{rndSubject}} is great to {{rndPunchlines}}';
const template = handleBars.compile(resultPhrase);

const data = {
  rndSubject: subjects[randomSubjectIndex],
  rndPunchlines: punchlines[randomPunchlinesIndex],
};

var result = template(data);
console.log(result);
