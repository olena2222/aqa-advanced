const axios = require('axios');
const { baseUrl } = require('./env.json');
const { header } = require('./defaultHeader.json');
const data = require('./postData.json');
const updData = require('./updatedData.json');
const postID = 1;

axios.interceptors.request.use((config) => {
    console.log('Reuest: ' + config.url);
    return config;
});

axios.interceptors.response.use((response) => {
    console.log('Response: ' + response.status);
    return response;
});

async function getComments() {
    const response = await axios.get(`${baseUrl}/posts/${postID}/comments`);
    return response;
}

async function addPost() {
    const response = await axios.post(`${baseUrl}/posts`, data, {
        headers: header,
    });
    return response;
}
async function updatePost() {
    const response = await axios.put(`${baseUrl}/posts/${postID}`, updData, {
        headers: header,
    });
    return response;
}
async function updateOneValueOnly() {
    const response = await axios.patch(
        `${baseUrl}/posts/${postID}`,
        {
            title: 'added comment number 1234',
        },
        { headers: header }
    );
    return response;
}
async function deletePost() {
    const response = await axios.delete(`${baseUrl}/posts/${postID}`);
    return response;
}
module.exports = {
    getComments,
    addPost,
    updatePost,
    updateOneValueOnly,
    deletePost,
};
