import express from "express";
import commentController from "../controllers/commentController.js";

const router = express.Router();

router.get("/", commentController.getComments);
router.get("/:id", commentController.getComment);
router.post("/", commentController.createComment);




export default router