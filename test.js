const axios = require("axios");
const { expect } = require("chai");

describe('API Test', async () => {
    let baseURL = 'https://reqres.in';
});
it('Test 1', async () => {
    try {
        const parameters = {
            name: "John",
            job: "Developer"
        };

        axios.interceptors.request.use(request => {
            console.log('Starting Request', JSON.stringify(request, null, 2))
            return request
          });

          let response = await axios.post(
              `https://reqres.in/api/users`,
              parameters
          );

          expect(response.status).to.be.equal(201);
    }
    catch (error) {
        expect.fail(error);
    }
})