import Cases from "../models/caseModel.js";

const getCaseById = async (id) => {
  // Retrive the case by the ID
  // Unfortunately, 'case' is a reserved keyword
  const file = await Cases.findCaseBy({ id });

  // Retrive the victims
  const victims = await getVictimsByCase(file.id);

  // Retrieve the suspects
  const suspects = await getSuspectsByCase(file.id);

  // Retrive the case types
  const caseTypes = await getCaseTypes(file.id);
  const simpliedCaseTypes = [];
  caseTypes.forEach((ct) => simpliedCaseTypes.push(ct.type));

  return { ...file, victims, suspects, caseTypes: simpliedCaseTypes };
};

const getVictimsByCase = async (caseId) => {
  return Cases.findVictimsByCase(caseId);
};

const getSuspectsByCase = async (caseId) => {
  return Cases.findSuspectsByCase(caseId);
};

const getCaseTypes = (caseId) => {
  return Cases.getCaseTypes(caseId);
};

export { getCaseById };