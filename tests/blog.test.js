const mongoose = require("mongoose");
const axios= require("axios");
const api="http://localhost:3000/api/v1";

// testing get all blogs function

describe("GET /api/blogs", () => {
    it("should return blogs", async () => {
      const res = await axios.get(`${api}/blogs`);
      expect(res.status).toBe(200);
    });
  });

// testing get one blog function

  describe("GET one blog", () => {
    it("should return one blog", async () => {
      const res = await axios.get(`${api}/blogs/63ff41f591e9dfa12a6dc900`);
      expect(res.status).toBe(200);
    });
  });

// testing delete one blog function

  describe("DELETE one blog", () => {
    it("should delete one blog", async () => {
      const res = await axios.delete(`${api}/blogs/640705e8e0157a7d55145cc0`);
      expect(res.status).toBe(200);
    });
  });

// testing one blog update

  describe("UPDATE one blog", () => {
    it("should update one blog", async () => {
      const res = await axios.put(`${api}/blogs/64070f293e1ac3f35b4382f8`,{
        title:"new blog again",
        category:"IoT",
        content:"hek out my new blog"
      });
      expect(res.status).toBe(200);
    });
  });

// testing create one blog

  describe("POST one blog", () => {
    it("should create one blog", async () => {
      const res = await axios.post(`${api}/blogs`,{
        title:"new blog again222333444555",
        category:"IoT",
        content:"chek out my new blog444555",
        author:"Patrick1"
      });
      expect(res.status).toBe(201);
    });
  });