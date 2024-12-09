const request = require('supertest');

const createServer= require('../server'); // The server to be tested
describe("POST / - Root Endpoint", () => {

    const app = createServer();
    
    test("It should respond with the 'content' field from the JSON body", async () => {
        const response = await request(app)
            .post('/')
            .send({ content: "Hello, world!" })
            .set('Accept', 'application/json');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ content: "Hello, world!" });
    });//end of test 

    test("It should return a 400 error if 'content' field is missing", async () => {
        
        const response = await request(app)
            .post('/')
            .send({ noContent: "Oops!" })
            .set('Accept', 'application/json');

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: "'content' field is required" });
   
    });//end of test 

});//end of describe 
