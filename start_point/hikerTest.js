'use strict';

const answer  = require('./hiker.js');
const assert = require('assert');

assert.equal(answer(), 42 );

// - - - - - - - - - - - - - - - - - - - - - -

const greenTrafficLightPattern = function() {
  return 'All tests passed';
};
console.log(greenTrafficLightPattern());
