import express from "express";
const router = express.Router();

import {
  getBuzzingCases,
  getLocalCases,
  getCaseById,
} from "../controllers/caseController.js";

// This has to be placed above getCaseById
// If not, the "inthenews" part gets read as the caseId params smh
router.get("/inthenews", getBuzzingCases);
router.get("/local", getLocalCases);

router.get("/:caseId", getCaseById);

export default router;
