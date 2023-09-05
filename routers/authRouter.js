import express from "express";
const router = express.Router();

import { registerContributor } from "../controllers/authController.js";

router.post("/register", registerContributor);

export default router;
