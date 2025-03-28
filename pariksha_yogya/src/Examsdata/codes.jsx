import cuetpgData from './PG_ED/cuetpg.json';
import iitjamData from './PG_ED/iitjam.json';
import cdsData from './DEFENCE_ED/cds.json';

// Map exam names to their data files
const examCodes = {
  "CUET PG Exam": {
    id: "CUETPG",
    data: cuetpgData.CUETPG
  },
  "IIT JAM Exam": {
    id: "IITJAM",
    data: iitjamData.IITJAM
  },
  "CDS Exam": {
    id: "CDS",
    data: cdsData.CDS
  },
};

// Get list of all exam names
export const getExamNames = () => Object.keys(examCodes);

// Get exam data by exam name
export const getExamData = (examName) => {
  if (!examCodes[examName]) {
    console.error(`Exam data not found for: ${examName}`);
    return null;
  }
  return examCodes[examName].data;
};

// Load exam data for a specific exam name
export const loadExamDataById = (examId) => {
  const exam = Object.values(examCodes).find(exam => exam.id === examId);
  if (!exam) {
    console.error(`Exam data not found for ID: ${examId}`);
    return null;
  }
  return exam.data;
};

export default examCodes;