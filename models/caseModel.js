import db from "../data/dbConfig.js";

const findCaseBy = (filter) => {
  return db("cases").select("*").where(filter).first();
};

const findVictimsByCase = (caseId) => {
  return db("victims").select("name", "fate").where("caseId", caseId);
};

const findSuspectsByCase = (caseId) => {
  return db("suspectAssignments as sa")
    .join("suspects as s", "s.id", "sa.suspectId")
    .select("s.name", "s.status")
    .where("sa.caseId", caseId);
};

const getCaseTypes = (caseId) => {
  return db("typeAssignments as ta")
    .join("caseTypes as ct", "ct.id", "ta.typeId")
    .select("ct.type")
    .where("ta.caseId", caseId);
};

export default {
  findCaseBy,
  findVictimsByCase,
  findSuspectsByCase,
  getCaseTypes,
};
