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

const getCasesByAllFilter = async (searchQuery) => {
  // Initialize cases (this is array that will will be returned)
  let cases = [];
  // Initialize caseIds in order to keep track of which cases have already been retrieved
  // So as to rule out duplicates
  let caseIds = [];

  // Retrieve all cases where the searchQuery matches title or location
  const caseMatches = await Cases.getCasesByAllFilter(searchQuery);
  for (const [idx, value] of caseMatches.entries()) {
    const victims = await getVictimsByCase(value.id);
    const suspects = await getSuspectsByCase(value.id);
    const caseTypes = await getCaseTypes(value.id);
    const simpliedCaseTypes = [];
    caseTypes.forEach((ct) => simpliedCaseTypes.push(ct.type));

    // Add victims, suspects, caseTypes to case object
    caseMatches[idx] = {
      ...value,
      victims,
      suspects,
      caseTypes: simpliedCaseTypes,
    };
  }
  cases = caseMatches;
  caseMatches.forEach((cm) => caseIds.push(cm.id));

  // Retrieve all victims where the searchQuery matches victim name
  const victims = await Cases.findVictimsByName(searchQuery);
  for (const [idx, value] of victims.entries()) {
    // Get case by victim
    const victimCase = await Cases.findCaseBy({ id: value.caseId });
    // Ensure that case ID is not in caseIds array (so as to avoid duplicates)
    if (!caseIds.includes(victimCase.id)) {
      const victims = await getVictimsByCase(victimCase.id);
      const suspects = await getSuspectsByCase(victimCase.id);
      const caseTypes = await getCaseTypes(victimCase.id);
      const simpliedCaseTypes = [];
      caseTypes.forEach((ct) => simpliedCaseTypes.push(ct.type));

      // Add victims, suspects, caseTypes to case object
      cases.push({
        ...victimCase,
        victims,
        suspects,
        caseTypes: simpliedCaseTypes,
      });
      caseIds.push(victimCase.id);
    }
  }

  // Retrieve all suspects where the searchQuery matches suspect name
  const suspects = await Cases.findSuspectsByName(searchQuery);
  for (const [idx, value] of suspects.entries()) {
    // Get cases by suspect
    const suspectCases = await Cases.getCasesBySuspect(value.id);
    for (const [idx, value] of suspectCases.entries()) {
      // Ensure that case ID is not in caseIds array (so as to avoid duplicates)
      if (!caseIds.includes(value.id)) {
        const victims = await getVictimsByCase(value.id);
        const suspects = await getSuspectsByCase(value.id);
        const caseTypes = await getCaseTypes(value.id);
        const simpliedCaseTypes = [];
        caseTypes.forEach((ct) => simpliedCaseTypes.push(ct.type));

        // Add victims, suspects, caseTypes to case object
        cases.push({
          ...value,
          victims,
          suspects,
          caseTypes: simpliedCaseTypes,
        });
        caseIds.push(value.id);
      }
    }
  }

  return cases;
};

const getCasesByLocationFilter = async (searchQuery) => {
  const cases = await Cases.getCasesByLocationFilter(searchQuery);

  for (const [idx, value] of cases.entries()) {
    const victims = await getVictimsByCase(value.id);
    const suspects = await getSuspectsByCase(value.id);
    const caseTypes = await getCaseTypes(value.id);
    const simpliedCaseTypes = [];
    caseTypes.forEach((ct) => simpliedCaseTypes.push(ct.type));

    // Add victims, suspects, caseTypes to case object
    cases[idx] = {
      ...value,
      victims,
      suspects,
      caseTypes: simpliedCaseTypes,
    };
  }

  return cases;
};

export {
  getAllCases,
  getCaseById,
  getBuzzingCases,
  getLocalCases,
  getCasesByAllFilter,
  getCasesByLocationFilter,
};
