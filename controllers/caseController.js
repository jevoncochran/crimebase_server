import * as caseService from "../services/caseService.js";

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

export { getCaseById, getBuzzingCases };
