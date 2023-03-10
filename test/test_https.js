const request = require('supertest');
const app = require('../app');

describe('HTTPS redirection', function() {
  it('should redirect HTTP requests to HTTPS', function(done) {
    request(app)
      .get('/')
      .set('Host', 'example.com')
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
      .set('Host', 'example.com')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.req.protocol).toBe('https');
        done();
      });
  });
});
