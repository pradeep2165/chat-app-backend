import express from "express";
import { createChatId, getChatId } from "../controllers/chatId.js";

import { getPosts, createPost } from "../controllers/post.js";

const router = express.Router();

router.post("/", getPosts);
router.post("/createPost", createPost);
router.post("/createChatId", createChatId);
router.post("/getChatId", getChatId);
export default router;
