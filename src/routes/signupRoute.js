import express from "express";
import {
  signupController,
  signupValidation,
} from "../controllers/signupController.js";

const router = express.Router();

router.post("/", signupValidation, signupController);

export default router;
