import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";
import {adminSignin, adminSignup} from "../controllers/admin.js"

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/adminSignin", adminSignin);
router.post("/adminSignup", adminSignup);

export default router;
