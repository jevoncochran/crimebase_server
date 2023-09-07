import express from "express";
const router = express.Router();

import {
  getAllCases,
  getBuzzingCases,
  getLocalCases,
  getCaseById,
  getCasesByAllFilter,
} from "../controllers/caseController.js";

router.get("/", getAllCases);

// This has to be placed above getCaseById
// If not, the "inthenews" part gets read as the caseId params smh
router.get("/inthenews", getBuzzingCases);
router.get("/local", getLocalCases);
router.get("/search", getCasesByAllFilter);

router.get("/:caseId", getCaseById);

export default router;
