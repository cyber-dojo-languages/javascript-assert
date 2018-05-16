'use strict';

const hiker = require('./hiker.js');
const assert = require('assert');

assert.equal(hiker.answer(), 42 );

// - - - - - - - - - - - - - - - - - - - - - -

const greenTrafficLightPattern = function() {
  return 'All tests passed';
};
console.log(greenTrafficLightPattern());
