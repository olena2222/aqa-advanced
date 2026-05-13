const { wrongUrl } = require('./task1.js');

test('Error handling url', async () => {
    const response = await wrongUrl();
    expect(response.status).toBe(404);
});
