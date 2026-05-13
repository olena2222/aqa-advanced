const {
    getComments,
    addPost,
    updatePost,
    updateOneValueOnly,
    deletePost,
} = require('./axios.js');

const data = require('./postData.json');
const updData = require('./updatedData.json');

test('Get comments', async () => {
    const response = await getComments();
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
    const response = await addPost();
    console.log(response.status);
    console.log(response.data);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(data.title);
    expect(response.data.body).toBe(data.body);
});

test('Update post', async () => {
    const response = await updatePost();
    console.log(response.status);
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(updData.title);
    expect(response.data.body).toBe(updData.body);
});

test('Update only title in post', async () => {
    const response = await updateOneValueOnly();
    console.log(response.status);
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data.userId).toBe(1);
    expect(response.data.title).toBe('added comment number 1234');
});

test('Delete post', async () => {
    const response = await deletePost();
    console.log(response.status);
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data).toEqual({});
});
