const { default: axios } = require('axios');
const baseUrl = 'https://jsonplaceholder.typicode.com';

test('Get comments', async () => {
    const response = await axios.get(`${baseUrl}/posts/1/comments`);
    console.log(response.status);
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
    for (const comment of response.data) {
        expect(comment.postId).toBe(1);
        expect(comment).toHaveProperty('id');
        expect(comment).toHaveProperty('name');
        expect(comment).toHaveProperty('email');
        expect(comment).toHaveProperty('body');
    }
});

test('Add post', async () => {
    const response = await axios.post(
        `${baseUrl}/posts`,
        {
            userId: 1,
            title: 'added comment number 12',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry1.',
        },
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
    );
    console.log(response.status);
    console.log(response.data);
    expect(response.status).toBe(201);
    expect(response.data.userId).toBe(1);
    expect(response.data.title).toBe('added comment number 12');
    expect(response.data.body).toBe(
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry1.'
    );
});

test('Update post', async () => {
    const response = await axios.put(
        `${baseUrl}/posts/1`,
        {
            userId: 1,
            title: 'added comment number 123',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry123.',
        },
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
    );
    console.log(response.status);
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data.userId).toBe(1);
    expect(response.data.title).toBe('added comment number 123');
    expect(response.data.body).toBe(
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry123.'
    );
});

test('Update only title in post', async () => {
    const response = await axios.patch(
        `${baseUrl}/posts/1`,
        {
            title: 'added comment number 1234',
        },
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
    );
    console.log(response.status);
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data.userId).toBe(1);
    expect(response.data.title).toBe('added comment number 1234');
});

test('Delete post', async () => {
    const response = await axios.delete(`${baseUrl}/posts/1`);
    console.log(response.status);
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data).toEqual({});
});
