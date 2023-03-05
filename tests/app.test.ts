// tests/app.test.ts
import request from 'supertest';
import { app, closeServer} from '../src/app';

describe('GET /', () => {
    afterAll( async () => {
        await closeServer()
    })

    it('Testing the start of the app should return 200 OK', async () => {
        const res = await request(app).get('/api/');
        expect(res.status).toBe(200);
    });
});
