const axios= require("axios");
const api="http://localhost:3000/api/v1";

// testing user login
describe("user login", () => {
    it("should log user into the database", async () => {
      const res = await axios.post(`${api}/login`,{
        email:"nina@gmail.com",
       password:"nina123"
      });
      expect(res.status).toBe(200);
    });
  });