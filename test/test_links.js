//code to test links

const request = require('supertest');
const app = require('../app');

describe('Test Links', function () {
  it('should return 200 for the home page', function (done) {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('should return 200 for the about page', function (done) {
    request(app)
      .get('/about')
      .expect(200, done);
  });

  it('should return 200 for the contact page', function (done) {
    request(app)
      .get('/contact')
      .expect(200, done);
  });
});
