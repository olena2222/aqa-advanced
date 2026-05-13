const axios = require("axios");
const { baseUrl } = require("../api/env.json");

async function wrongUrl() {
    try {
         const response= await axios.get(`${baseUrl}/posts/1/commmments`)
    return response;
    } catch (error) {
       return error.response;
    }
 
}
module.exports={wrongUrl};