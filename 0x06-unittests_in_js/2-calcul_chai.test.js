const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe("calculateNumber", () => {
  it("testinf Somme", () => {
    expect(calculateNumber("SUM", 2, 3)).to.equal(5);
    expect(calculateNumber("SUM", 12, 3)).to.equal(15);
    expect(calculateNumber("SUM", 0, 4)).to.equal(4);
    expect(calculateNumber("SUM", 2, -5)).to.equal(-3);
  });

  it("testing substract", () => {
    expect(calculateNumber("SUBTRACT", 2, 3)).to.equal(-1);
    expect(calculateNumber("SUBTRACT", 1.3, 4.8)).to.equal(-4);
    expect(calculateNumber("SUBTRACT", 12, 4)).to.equal(8);
  });

  it("testing division", () => {
    expect(calculateNumber("DIVIDE", 8, 2)).to.equal(4);
    expect(calculateNumber("DIVIDE", 1.2, 4.6)).to.equal(0.2);
    expect(calculateNumber("DIVIDE", 12, 1.2)).to.equal(12);
    expect(calculateNumber("DIVIDE", 2.3, 0)).to.equal("Error");
  });
});
