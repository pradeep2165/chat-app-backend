import express from "express";
import { createChatId } from "../controllers/chatId.js";

import { getPosts, createPost } from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/createPost", createPost);
router.post("/createChatId", createChatId);
export default router;
