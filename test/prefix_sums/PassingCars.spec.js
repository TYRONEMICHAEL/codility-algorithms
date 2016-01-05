var test = require('tape');
var passingCars = require('../../src/prefix_sums/PassingCars');

test('PassingCars', function (t) {
  t.equal(passingCars([0,1,0,1,1]), 5);
  t.equal(passingCars([0,1,0,1,1,1]), 7);
  t.equal(passingCars([0,1,0,1,1,1,0,1]), 10);
  
  t.end();
});
