import express from "express";
import messageController from "../controllers/messageController.js";
import restrictDelete from "../middleware/restrictDelete.js";

const router = express.Router();

router.get("/", messageController.getMessages);
router.get("/:id", messageController.getMessage);
router.post("/", messageController.createMessage);
router.put("/:id", messageController.updateMessage )
router.delete("/:id",restrictDelete, messageController.deleteMessage )




export default router