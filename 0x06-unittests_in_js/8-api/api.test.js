const { expect } = require('chai');
const request = require('request');

describe('api test', () => {
  it('correct response', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
