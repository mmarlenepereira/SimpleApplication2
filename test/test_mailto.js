const request = require('supertest');
const app = require('../app');
const should = require('should');

describe('Test Mailto Link', function () {
  it('should return a contact page with a valid mailto link', function (done) {
    request(app)
      .get('/contact')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        res.text.should.containEql('mailto:');
        done();
      });
  });
});
