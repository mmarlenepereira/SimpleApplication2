//code to test links

const request = require('supertest');
const app = require('../SimpleApplication2');

describe('Test Links', function () {
  it('should return 200 for the Home page', function (done) {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('should return 200 for the About page', function (done) {
    request(app)
      .get('/about')
      .expect(200, done);
  });

  it('should return 200 for the Contact page', function (done) {
    request(app)
      .get('/contact')
      .expect(200, done);
  });
});
