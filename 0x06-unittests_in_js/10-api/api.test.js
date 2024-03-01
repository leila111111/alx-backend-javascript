const request = require('request');
const { expect } = require('chai');

describe('api test', () => {

  it('correct response', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('status code 200 and correct response', (done) => {
    request('http://localhost:7865/cart/16', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 16');
      done();
    });
  });

  it('status 404', (done) => {
    request('http://localhost:7865/cart/quiqiw', (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('status 404 negative', (done) => {
    request('http://localhost:7865/cart/-16', (err, res) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('correct response', (done) => {
    request('http://localhost:7865/login', {json: {userName: 'samanta'}}, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome samanta');
      done();
    });
  });

  it('correct response available payments', (done) => {
    request('http://localhost:7865/available_payments', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
