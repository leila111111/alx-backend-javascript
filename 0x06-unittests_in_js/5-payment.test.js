const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendpaymentReqtoApi', () => {
  let calcul;

  beforeEach(() => {
    calcul = sinon.spy(console, 'log');
  });
  afterEach(() => {
    calcul.restore();
  });

  it('The Total is 120', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(calcul.calledOnce).to.be.true;
    expect(calcul.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('The Total is 20', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(calcul.calledOnce).to.be.true;
    expect(calcul.calledWithExactly('The total is: 20')).to.be.true;
  }); 
});
