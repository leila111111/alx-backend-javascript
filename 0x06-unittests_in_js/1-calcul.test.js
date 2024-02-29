const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('testing somme', () => {
    assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
    assert.strictEqual(calculateNumber('SUM', 11, 2), 13);
    assert.strictEqual(calculateNumber('SUM', 0, 2), 2);
    assert.strictEqual(calculateNumber('SUM', -3, 2), -1);
    assert.strictEqual(calculateNumber('SUM', -3.4, 2.4), -1);
  });

  it('testing substraction', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', -1, 1), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', 9, 1), 8);
    assert.strictEqual(calculateNumber('SUBTRACT', -2.1, 1.1), -1);
    assert.strictEqual(calculateNumber('SUBTRACT', -2, -2), 0);
  });

  it('testing divisio,', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 6, 2), 3);
    assert.strictEqual(calculateNumber('DIVIDE', 6.4, 2), 3.2);
    assert.strictEqual(calculateNumber('DIVIDE', 5, 0.2), 25);
    assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 5, -0.1), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
  });
