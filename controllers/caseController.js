import * as caseService from "../services/caseService.js";

// @desc Get all cases
// @route GET /api/cases
// @access Public
const getAllCases = async (req, res) => {
  try {
    const cases = await caseService.getAllCases();

    res.status(200).json(cases);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Unable to retrieve cases" });
  }
};

// @desc Get case by ID
// @route GET /api/cases/:caseId
// @access Public
const getCaseById = async (req, res) => {
  let { caseId } = req.params;

  try {
    const caseInfo = await caseService.getCaseById(caseId);

    res.status(200).json(caseInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Unable to retrieve case" });
  }
};

// @desc Get buzzing cases
// @route GET /api/cases/inthenews
// @access Public
const getBuzzingCases = async (req, res) => {
  try {
    const cases = await caseService.getBuzzingCases();

    res.status(200).json(cases);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Unable to retrieve cases" });
  }
};

// @desc Get local cases
// @route GET /api/cases/local
// @access Public
const getLocalCases = async (req, res) => {
  try {
    const cases = await caseService.getLocalCases();

    res.status(200).json(cases);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Unable to retrieve cases" });
  }
};

// @desc Get cases by all filter
// @route GET /api/cases/search
// @access Public
const getCasesBySearchFilter = async (req, res) => {
  const { filter } = req.query;
  const { query } = req.query;

  try {
    let cases;

    if (filter === "all") {
      cases = await caseService.getCasesByAllFilter(query);
    }

    if (filter === "location") {
      cases = await caseService.getCasesByLocationFilter(query);
    }

    res.status(200).json(cases);
  } catch (error) {
    console.log(error);
    res.status(500).json({ errMsg: "Unable to retrieve cases" });
  }
};

export {
  getAllCases,
  getCaseById,
  getBuzzingCases,
  getLocalCases,
  getCasesBySearchFilter,
};
