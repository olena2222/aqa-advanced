const axios = require('axios');
const getPosts = require('./task.3.js');
jest.mock('axios');

test('get mocked posts', async () => {
    const mockedPosts = [
        {
            userId: 1,
            id: 1,
            title: 'mocked title1',
            body: 'test1',
        },
        {
            userId: 1,
            id: 2,
            title: 'mocked title2',
            body: 'test2',
        },
    ];
    axios.get.mockResolvedValue({
        data: mockedPosts,
        status: 200,
    });
    const response = await getPosts();
    expect(response.status).toBe(200);
    expect(response.data).toEqual(mockedPosts);
});

test('get mocked error when attempt to posts', async () => {
    axios.get.mockRejectedValue(new Error('Page Not Found'));
    await expect(getPosts()).rejects.toThrow('Page Not Found');
});
