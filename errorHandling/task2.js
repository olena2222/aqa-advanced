const axios = require('axios');
const { baseUrl } = require('../api/env.json');
const headerTestData = '12345';
const paramsTestData = { hello: 'Hello', world: 'world', postId: 1 };

async function testCustomHeadersAndParams() {
    const response = await axios.get(`${baseUrl}/comments`, {
        headers: { 'mycontent-type': headerTestData },
        params: paramsTestData,
    });
    return response;
}
module.exports = {
    testCustomHeadersAndParams,
    headerTestData,
    paramsTestData
};
