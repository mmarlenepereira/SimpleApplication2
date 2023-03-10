const request = require('supertest');
const app = require('../app');

describe('HTTPS requests', function() {
  it('should return a 200 status code for HTTPS requests to the homepage', function(done) {
    request(app)
      .get('/')
      .set('Host', '3.238.150.122/8443')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
