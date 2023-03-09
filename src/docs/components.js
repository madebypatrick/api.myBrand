const components = {
    "paths": {
      "/": {
        "get": {
          "tags": ["Default"],
          "summary": "Default message on server",
          "operationId": "",
          "responses": {
            "200": {
              "description": "The request has succeeded"
            }
          },
          "x-codegen-request-body-name": "body"
        }
      }
    },
    "swagger": "2.0",
    "info": {
      "version": "v1",
      "title": "MyBrands API"
    }
  }
  
  export default components;