const request = require('supertest');
const app = require('../server');


describe('Hello', () => {
    it('succeeds with greetings', async () => {
        const res = await get('/api/hello')
            .expect(200);
        expect(res.body.greeting).toBe('hello API');
    });

});



// a helper function to make a GET request
function get(url) {
    const httpRequest = request(app).get(url);
    // httpRequest.send(body);
    httpRequest.set('Accept', 'application/json')
    httpRequest.set('Origin', 'http://localhost:57306')
    return httpRequest;
}