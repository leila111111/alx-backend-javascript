const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('testing floats ', () => {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4);

    assert.strictEqual(calculateNumber(1.0, 1.4), 2);

    assert.strictEqual(calculateNumber(1.4, 1.4), 2);

    assert.strictEqual(calculateNumber(1.4, 1.0), 2);

    assert.strictEqual(calculateNumber(1.5, 2), 4);

    assert.strictEqual(calculateNumber(2.7, 2.6), 6);

    assert.strictEqual(calculateNumber(2.7, 2.0), 5);

    assert.strictEqual(calculateNumber(2.499999, 2.499999), 4);
});
