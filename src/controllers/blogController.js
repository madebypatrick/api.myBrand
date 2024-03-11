import Blog from "../model/blog.js";
import dotenv from "dotenv";
import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
class blogController {
  // functions to get all blogs
  static async getBlogs(req, res) {
    try {
      const blogs = await Blog.find();
      res.status(200).json({
        data: blogs,
      });
    } catch (error) {
      res.status(500).json({
        message: "server error",
      });
    }
  }

  // get one blog
  static async getBlog(req, res) {
    const { id } = req.params;
    try {
      const blog = await Blog.findOne({ _id: id });
      if (!blog) {
        return res.status(404).json({
          message: `Blog with id: ${id} was not found`,
        });
      } else {
        return res.status(200).json({
          data: blog,
        });
      }
    } catch (error) {
      // Handle the error
      console.error(error);
      return res.status(500).json({
        message: "Server error",
      });
    }
  }

  // create a blog
  static async createBlog(req, res) {
    cloudinary.config({
      cloud_name: "ddbcekah4",
      api_key: "454378738612683",
      api_secret: "6cnT-kFv_EBtFWjmzwbC_1VI_i8",
    });

    try {
      const storage = new CloudinaryStorage({
        cloudinary,
        params: {
          folder: "blogs-image",
          allowed_formats: ["jpg", "png"],
        },
      });

      const upload = multer({ storage }).single("image");
      upload(req, res, async (err) => {
        if (err) {
          return res
            .status(400)
            .json({ message: "File upload failed", error: err });
        }

        const { title, category, content, author } = req.body;
        const imagePath = req.file ? req.file.path : null;

        try {
          const newBlog = await Blog.create({
            title,
            category,
            content,
            author,
            image: imagePath,
          });

          res.status(201).json({
            message: "New Blog Created Successfully",
            data: newBlog,
          });
        } catch (error) {
          res
            .status(500)
            .json({ message: "Failed to create blog", error: error });
        }
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error });
    }
  }

  // update blog
  static async updateBlog(req, res) {
    // console.log(req.params.id)
    try {
      // const id= req.params.id  //used in ES5
      const { id } = req.params; //used in ES6

      // body to be updated
      const { title, category, content } = req.body;
      // id
      const _id = id;
      const blogToBeUpdate = await Blog.findByIdAndUpdate(
        _id,
        { title, category, content },
        { new: true }
      );

      if (!blogToBeUpdate) {
        return res.status(404).json({
          message: `blog with id: ${id} was not found`,
        });
      } else {
        return res.status(200).json({
          message: "Blog updated successfully",
          data: blogToBeUpdate,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
      });
    }
  }

  // delete blog
  static async deleteBlog(req, res) {
    try {
      const { id } = req.params;
      // find the blog
      const _id = id;
      const blogToBeDeleted = await Blog.findByIdAndDelete(_id);

      if (!blogToBeDeleted) {
        return res.status(404).json({
          message: `blog with id: ${id} was not found`,
        });
      } else {
        return res.status(200).json({
          message: "Blog deleted successfully",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "server error",
      });
    }
  }
}

export default blogController;
