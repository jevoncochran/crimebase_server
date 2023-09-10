import express from "express";
const router = express.Router();

import {
  registerContributor,
  loginContributor,
} from "../controllers/authController.js";

router.post("/register", registerContributor);
router.post("/login", loginContributor);

export default router;
