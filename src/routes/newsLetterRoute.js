import express from "express";
import newsLetterController from "../controllers/newsLetterController.js";

const router = express.Router();

router.get("/", newsLetterController.getnewsLetters);
router.get("/:id", newsLetterController.getnewsLetter);
router.post("/", newsLetterController.createnewsLetter);




export default router