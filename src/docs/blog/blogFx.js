const blogFx = {
    '/api/v1/blogs': {
        post: {
            tags: ['Blogs'],
            security: [ 
                {
                JWT: [],
            },
        ],
            summary: 'Create a new blog',
            parameters: [
                {
                    in: 'formData',
                    name: 'title',
                    required: true,
                },
                {
                    in: 'formData',
                    name: 'category',
                    required: true,
                },
            
                {
                    in: 'formData',
                    name: 'content',
                    required: true,
                },
                {
                    in: 'formData',
                    name: 'author',
                    required: true,
                },
                {
                    name: 'image',
                    in: 'formData',
                    required: true,
                    type: 'file',
                },
            ],
            consumes: ['application/json'],
            responses:{
                201: {
                    description: 'Created',
                },
                400: {
                    description: 'Bad Request'
                },
                401: {
                    description: 'Unauthorized'
                },
                500: {
                    description: 'Server Error'
                }
            }
        },
      
        get: {
            tags: ['Blogs'],
           security: [],
           summary: 'Get all blogs',
           parameters: [],
           consumes: ['application/json'],
           responses:{
            201: {
                description: 'Created',
            },
            400: {
                description: 'Bad Request'
            },
            401: {
                description: 'Unauthorized'
            },
            500: {
                description: 'Server Error'
            }
           }
       },

       

    },
    '/api/v1/blogs/{id}':{
        get: {
            tags: ['Blogs'],
            security: [],
            summary: 'Get one blog',
            parameters: [{
                    in: 'path',
                    name: 'id',
                    required: true,
                    schema: {
                    },
                },
            ],
            consumes: ['application/json'],
            responses:{
                200: {
                    description: 'OK',
                },
                
                400: {
                    description: 'Bad Request'
                },
                401: {
                    description: 'Unauthorized'
                },
                500: {
                    description: 'Server Error'
                }
            }
        },
        put: {
            tags: ['Blogs'],
            security: [
                {
                    JWT: [],
                },
            ],
            summary: 'Update a blog',
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    required: true,
                
                },
                {
                    in: 'formData',
                    name: 'title',
                    required: false,
                },
                {
                    in: 'formData',
                    name: 'category',
                    required: false,
                },
                {
                    in: 'formData',
                    name: 'content',
                    required: false,
                },
                {
                    name: 'image',
                    in: 'formData',
                    required: false,
                    type: 'file',
                },
            ],
           
            consumes: ['application/json'],
            responses:{
                200: {
                    description: 'OK',
                },
                
                400: {
                    description: 'Bad Request'
                },
                401: {
                    description: 'Unauthorized'
                },
                500: {
                    description: 'Internal Server Error'
                }
            }
            
        },
        delete: {
            tags: ['Blogs'],
            security: [{
                JWT: [],
            },],
            summary: 'Delete a blog',
            parameters: [{
                    in: 'path',
                    name: 'id',
                    required: true,
                    schema: {
                    },
                },
            ],
            consumes: ['application/json'],
            responses:{
                200: {
                    description: 'OK',
                },
                
                400: {
                    description: 'Bad Request'
                },
                401: {
                    description: 'Unauthorized'
                },
                500: {
                    description: 'Server Error'
                },
                404: {
                    description: 'Not Found'
                }
            }
            
        }

    },
   
};

export default blogFx;