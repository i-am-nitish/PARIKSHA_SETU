import { useState } from 'react';
import { getExamData } from '../../Examsdata/codes';

const useFormData = () => {
  const [formData, setFormData] = useState({
    examTarget: '',
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    nationality: '',
    domicile: '',
    course: '',
    yearSemester: '',
    caste: '',
    pwdStatus: '',
    examSector: '',
    percentageMarks: ''
  });
  
  const [examData, setExamData] = useState(null);
  const [requiredPercentage, setRequiredPercentage] = useState(null);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Update required percentage when caste changes
    if (name === 'caste' && examData?.eligibility_marks) {
      updateRequiredPercentage(value);
    }
  };

  // Update required percentage based on caste
  const updateRequiredPercentage = (caste) => {
    if (!examData?.eligibility_marks) return;
    
    if (caste === 'SC' || caste === 'ST' || formData.pwdStatus === 'Yes') {
      const requirement = examData.eligibility_marks['SC/ST/PH'] || '';
      setRequiredPercentage(requirement);
    } else {
      const requirement = examData.eligibility_marks['General'] || 
                         examData.eligibility_marks['OBC/EWS'] || '';
      setRequiredPercentage(requirement);
    }
  };

  // Handle exam selection
  const handleExamChange = (e) => {
    const examName = e.target.value;
    const data = getExamData(examName);
    setExamData(data);
    
    // Reset form data first with PWD status default
    const defaultPwdStatus = data?.pwd_status === "NOT APPLICABLE" ? "Not Applicable" : "";
    
    setFormData({
      examTarget: examName,
      dateOfBirth: '',
      gender: '',
      maritalStatus: '',
      nationality: '',
      domicile: data?.domicile || '',
      course: '',
      yearSemester: '',
      caste: '',
      pwdStatus: defaultPwdStatus,
      examSector: data?.exam_sector || '',
      percentageMarks: ''
    });
  };

  return {
    formData,
    setFormData,
    examData,
    setExamData,
    requiredPercentage,
    setRequiredPercentage,
    handleInputChange,
    updateRequiredPercentage,
    handleExamChange
  };
};

export default useFormData;