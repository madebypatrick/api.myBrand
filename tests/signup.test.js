const axios= require("axios");
const api="http://localhost:3000/api/v1";

// testing signup

describe("user signup", () => {
    it("should signup the user", async () => {
      const res = await axios.post(`${api}/signup`,{
        fullname:"Jane Doe",
        email:"jane1234567890abc@gmail.com",
       password:"jane1234567890abc"
      });
      expect(res.status).toBe(201);
    });
  });