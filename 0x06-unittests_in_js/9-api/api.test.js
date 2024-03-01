const { expect } = require('chai');
const request = require('request');

describe('test api', () => {
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
});
