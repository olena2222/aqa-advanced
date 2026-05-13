const axios = require('axios');
const { baseUrl } = require('../api/env.json');

async function getPosts() {
    const response = await axios.get(`${baseUrl}/posts`);
    return response;
}

module.exports = getPosts;
