const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('send Payment', () => {
    const calcul = sinon.spy(console);
    const num = sinon.stub(Utils, 'calculateNumber');
    num.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(num.calledWith('SUM', 100, 20)).to.be.true;
    expect(num.callCount).to.be.equal(1);
    expect(calcul.log.calledWith('The total is: 10')).to.be.true;
    expect(calcul.log.callCount).to.be.equal(1);
    num.restore();
    calcul.log.restore();
  });
});
