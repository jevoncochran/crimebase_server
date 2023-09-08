import db from "../data/dbConfig.js";

const getAllCases = () => {
  return db("cases").select("*");
};

const getCasesBy = (filter) => {
  return db("cases").select("*").where(filter);
};

const findCaseBy = (filter) => {
  return db("cases").select("*").where(filter).first();
};

const findVictimsByCase = (caseId) => {
  return db("victims")
    .select("name", "fate", "mainImageUrl")
    .where("caseId", caseId);
};

const findVictimsByName = (name) => {
  return db("victims")
    .select("name", "fate", "mainImageUrl", "caseId")
    .where("name", "like", `%${name}%`);
};

const findSuspectsByCase = (caseId) => {
  return db("suspectAssignments as sa")
    .join("suspects as s", "s.id", "sa.suspectId")
    .select("s.name", "s.status", "s.mainImageUrl")
    .where("sa.caseId", caseId);
};

const findSuspectsByName = (name) => {
  return db("suspects")
    .select("id", "name", "status", "mainImageUrl")
    .where("name", "like", `%${name}%`);
};

const getCaseTypes = (caseId) => {
  return db("typeAssignments as ta")
    .join("caseTypes as ct", "ct.id", "ta.typeId")
    .select("ct.type")
    .where("ta.caseId", caseId);
};

const getCasesByAllFilter = (searchQuery) => {
  return db("cases")
    .select("*")
    .where("title", "like", `%${searchQuery}%`)
    .orWhere("location", "like", `%${searchQuery}%`);
};

const getCasesByLocationFilter = (searchQuery) => {
  return db("cases").select("*").where("location", "like", `%${searchQuery}%`);
};

const getCasesBySuspect = (suspectId) => {
  return db("cases as c")
    .join("suspectAssignments as sa", "sa.caseId", "c.id")
    .select(
      "c.id",
      "c.threadId",
      "c.title",
      "c.summary",
      "c.location",
      "c.mainImageUrl",
      "c.status",
      "c.buzzing"
    )
    .where("sa.suspectId", suspectId);
};

export default {
  getAllCases,
  getCasesBy,
  findCaseBy,
  findVictimsByCase,
  findVictimsByName,
  findSuspectsByCase,
  findSuspectsByName,
  getCaseTypes,
  getCasesByAllFilter,
  getCasesByLocationFilter,
  getCasesBySuspect,
};
