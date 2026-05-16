const { default: axios } = require('axios');
const { testCustomHeadersAndParams, headerTestData, paramsTestData } = require('./task2.js');

test('Test custom headers and params', async () => {

    axios.interceptors.request.use((config) => {
        expect(config.headers['mycontent-type']).toBe(headerTestData);
        console.log(config.headers);
        expect(config.params).toEqual(paramsTestData);
        console.log(config.params);
        return config;
    });
    await testCustomHeadersAndParams();
});
