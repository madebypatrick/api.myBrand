const mongoose = require("mongoose");
const axios= require("axios");
const api="http://localhost:3000/api/v1";

// testing get all messages 

describe("GET /api/messages", () => {
    it("should return all messages", async () => {
      const res = await axios.get(`${api}/message`);
      expect(res.status).toBe(200);
    });
  });

// testing get one message

  describe("GET one message", () => {
    it("should return one message", async () => {
      const res = await axios.get(`${api}/message/6408a22b9e652e77656ebcdc`);
      expect(res.status).toBe(200);
    });
  });
// testing delete one message

  describe("DELETE one message", () => {
    it("should delete one message", async () => {
      const res = await axios.delete(`${api}/message/6408a512f73cca801f4b34f8`);
      expect(res.status).toBe(200);
    });
  });

 
// testing send one message

  describe("SEND one message", () => {
    it("should send one message", async () => {
      const res = await axios.post(`${api}/message`,{
        fullname:"Mary Jane",
        email:"mary@gmail.com",
        from:"social media",
        message:"Hello from kicukiro"
      });
      expect(res.status).toBe(201);
    });
  });