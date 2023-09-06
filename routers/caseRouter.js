import express from "express";
const router = express.Router();

// Get case by ID
import { getCaseById } from "../controllers/caseController.js";

router.get("/:caseId", getCaseById);

export default router;
