var test = require('tape');
var frogRiverOne = require('../../src/counting_elements/FrogRiverOne');

test('FrogRiverOne', function (t) {
  t.equal(frogRiverOne(5, [1,3,1,4,2,3,5,4]), 6);
  t.end();
});
