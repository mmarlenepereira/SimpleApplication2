const request = require('supertest');
const app = require('../app');

describe('HTTPS redirection', function() {
  it('should redirect HTTP requests to HTTPS', function(done) {
    request(app)
      .get('/')
      .set('Host', '3.238.150.122:8443')
      .expect(301)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.header.location).toMatch(/^https:/);
        done();
      });
  });

  it('should return HTTPS response', function(done) {
    request(app)
      .get('/')
      .set('Host', '3.238.150.122:8443')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.req.protocol).toBe('https');
        done();
      });
  });
});
