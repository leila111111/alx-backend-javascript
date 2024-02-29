const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('testing float numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
    assert.strictEqual(calculateNumber(1.0, 3.2), 3);
    assert.strictEqual(calculateNumber(3.2, 1.0), 3);
    assert.strictEqual(calculateNumber(1.2, 3.2), 3);
    assert.strictEqual(calculateNumber(1.6, 2.2), 5);
  });
});
