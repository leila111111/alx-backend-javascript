const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('send payment', () => {
    const calcul = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    expect(calcul.calledWith('SUM', 100, 20)).to.be.true;
    expect(calcul.callCount).to.be.equal(1);
    calcul.restore();
  });
});
