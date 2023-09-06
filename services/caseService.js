import Cases from "../models/caseModel.js";

const getAllCases = async () => {
  const cases = await Cases.getAllCases();

  // Iterate over each case and retrieve
  // victims, suspects, caseTypes
  for (const [idx, value] of cases.entries()) {
    const victims = await getVictimsByCase(value.id);
    const suspects = await getSuspectsByCase(value.id);
    const caseTypes = await getCaseTypes(value.id);
    const simpliedCaseTypes = [];
    caseTypes.forEach((ct) => simpliedCaseTypes.push(ct.type));

    cases[idx] = { ...value, victims, suspects, caseTypes: simpliedCaseTypes };
  }

  return cases;
};

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

const getBuzzingCases = async () => {
  const cases = await Cases.getCasesBy({ buzzing: true });

  // Iterate over each case and retrieve
  // victims, suspects, caseTypes
  for (const [idx, value] of cases.entries()) {
    const victims = await getVictimsByCase(value.id);
    const suspects = await getSuspectsByCase(value.id);
    const caseTypes = await getCaseTypes(value.id);
    const simpliedCaseTypes = [];
    caseTypes.forEach((ct) => simpliedCaseTypes.push(ct.type));

    cases[idx] = { ...value, victims, suspects, caseTypes: simpliedCaseTypes };
  }

  return cases;
};

const getLocalCases = async () => {
  const cases = await Cases.getCasesBy({ location: "Oakland, CA, U.S." });

  // Iterate over each case and retrieve
  // victims, suspects, caseTypes
  for (const [idx, value] of cases.entries()) {
    const victims = await getVictimsByCase(value.id);
    const suspects = await getSuspectsByCase(value.id);
    const caseTypes = await getCaseTypes(value.id);
    const simpliedCaseTypes = [];
    caseTypes.forEach((ct) => simpliedCaseTypes.push(ct.type));

    cases[idx] = { ...value, victims, suspects, caseTypes: simpliedCaseTypes };
  }

  return cases;
};

export { getAllCases, getCaseById, getBuzzingCases, getLocalCases };
