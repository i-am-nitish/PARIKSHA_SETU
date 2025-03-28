import React, { useState } from 'react';
import { getExamNames, getExamData } from '../Examsdata/codes';
import '../Pages/FormStyles.css';

// Reusable input component that works with various input types
const FormInput = ({ label, type = "text", options = [], required = false, name, onChange, value, disabled = false }) => {
  // Create animated label characters
  const labelChars = label.split('').map((char, index) => (
    <span key={index} className="label-char" style={{"--index": index}}>
      {char}
    </span>
  ));

  // Render appropriate input based on type
  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <select 
            className="input" 
            required={required} 
            name={name} 
            onChange={onChange} 
            value={value || ""}
            disabled={disabled}
          >
            <option value="" disabled></option>
            {options.map((option, index) => (
              <option key={index} value={option.value || option}>
                {option.label || option}
              </option>
            ))}
          </select>
        );
      case 'date':
        return <input type="date" className="input" required={required} name={name} onChange={onChange} value={value || ""} disabled={disabled} />;
      case 'number':
        return <input type="number" min="0" max="100" step="0.01" className="input" required={required} name={name} onChange={onChange} value={value || ""} disabled={disabled} />;
      default:
        return <input type={type} className="input" required={required} name={name} onChange={onChange} value={value || ""} disabled={disabled} />;
    }
  };

  return (
    <div className="wave-group">
      {renderInput()}
      <span className="bar" />
      <label className="label">
        {labelChars}
      </label>
    </div>
  );
};

const FormPage = () => {
  const [formData, setFormData] = useState({
    examTarget: '',
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    nationality: '',
    domicile: '',
    course: '',
    stream: '',
    yearSemester: '',
    caste: '',
    pwdStatus: '',
    examSector: '',
    percentageMarks: ''
  });
  
  const [examData, setExamData] = useState(null);
  const [eligibilityResult, setEligibilityResult] = useState(null);
  const [showResults, setShowResults] = useState(false);
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
      const requirement = examData.eligibility_marks.SC_ST_PH || '';
      setRequiredPercentage(requirement);
    } else {
      const requirement = examData.eligibility_marks.General_OBC || '';
      setRequiredPercentage(requirement);
    }
  };

  // Handle exam selection
  const handleExamChange = (e) => {
    const examName = e.target.value;
    const data = getExamData(examName);
    setExamData(data);
    
    // Reset form data first
    setFormData({
      examTarget: examName,
      dateOfBirth: '',
      gender: '',
      maritalStatus: '',
      nationality: '',
      domicile: data?.domicile || '',
      course: '',
      stream: '',
      yearSemester: '',
      caste: '',
      pwdStatus: '',
      examSector: data?.exam_sector || '',
      percentageMarks: ''
    });
  };

  // Check eligibility based on form data and exam criteria
  const checkEligibility = () => {
    if (!examData) return false;
    
    // Set of eligibility criteria
    let isEligible = true;
    const reasons = [];
    const examInfo = [];
    
    // Check percentage marks against eligibility criteria
    if (examData.eligibility_marks && formData.percentageMarks) {
      let requiredMarks = 0;
      let actualMarks = parseFloat(formData.percentageMarks);
      
      if (formData.caste === 'SC' || formData.caste === 'ST' || formData.pwdStatus === 'Yes') {
        const requirement = examData.eligibility_marks.SC_ST_PH || '';
        requiredMarks = parseInt(requirement.replace(/[^0-9]/g, ''), 10);
        reasons.push(`Required marks: ${requirement}`);
      } else {
        const requirement = examData.eligibility_marks.General_OBC || '';
        requiredMarks = parseInt(requirement.replace(/[^0-9]/g, ''), 10);
        reasons.push(`Required marks: ${requirement}`);
      }
      
      if (actualMarks < requiredMarks) {
        isEligible = false;
        reasons.push(`Your percentage (${actualMarks}%) is below the required minimum of ${requiredMarks}%`);
      } else {
        reasons.push(`Your percentage (${actualMarks}%) meets the required minimum of ${requiredMarks}%`);
      }
    }
    
    // Check education course requirement
    if (examData.education_course) {
      reasons.push(`Education requirement: ${examData.education_course}`);
    }
    
    // Check if the course/stream matches required departments (for IIT JAM)
    if (examData.posts_classes_courses_departments && 
        Array.isArray(examData.posts_classes_courses_departments) && 
        examData.posts_classes_courses_departments.length > 0) {
      if (formData.stream && !examData.posts_classes_courses_departments.includes(formData.stream.toUpperCase())) {
        isEligible = false;
        reasons.push(`Your stream (${formData.stream}) may not match required streams: ${examData.posts_classes_courses_departments.join(', ')}`);
      }
    }
    
    // Add exam info section
    if (examData.exam_sector) {
      examInfo.push(`Exam Sector: ${examData.exam_sector}`);
    }
    
    if (examData.exam_subjects) {
      examInfo.push(`Exam Subjects: ${Array.isArray(examData.exam_subjects) ? examData.exam_subjects.join(', ') : examData.exam_subjects}`);
    }
    
    if (examData.conducting_body) {
      examInfo.push(`Conducted by: ${examData.conducting_body}`);
    }
    
    return {
      isEligible,
      reasons,
      examInfo
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eligibility = checkEligibility();
    setEligibilityResult(eligibility);
    setShowResults(true);
  };

  // Get exam names for the dropdown
  const examTargetOptions = getExamNames();

  // Get options directly from exam data, with empty arrays as fallback
  const genderOptions = examData?.gender || [];
  const casteOptions = examData?.caste_category || [];
  const pwdOptions = examData?.pwd_disabled_status === "APPLICABLE" ? ["Yes", "No"] : [];
  const maritalOptions = examData?.marital_status || [];
  
  // Convert education_course to dropdown options
  const courseOptions = examData?.education_course ? 
    ['Bachelors Degree', 'Final Year Student', 'Related Subject Degree'] : [];
  
  // If exam data has streams/courses
  const streamOptions = examData?.posts_classes_courses_departments ? 
    (Array.isArray(examData.posts_classes_courses_departments) ? 
      examData.posts_classes_courses_departments : 
      [examData.posts_classes_courses_departments]) : [];
  
  // Convert nationality to dropdown options
  const nationalityOptions = examData?.nationality ? 
    (Array.isArray(examData.nationality) ? 
      examData.nationality : 
      [examData.nationality]) : [];
      
  // Create domicile options - ensure it's always an array
  const domicileOptions = examData?.domicile ? [examData.domicile] : [];

  return (
    <form className="styled-form" onSubmit={handleSubmit}>
      <div className="container border-gradient p-5 mt-10 rounded-4xl">
      <h2>Personal Information</h2>
      
      {/* Row with 4 inputs */}
      <div className="form-row four-items">
        <div className="form-item">
          <FormInput 
            label="ExamTarget" 
            type="select" 
            options={examTargetOptions} 
            name="examTarget" 
            required 
            value={formData.examTarget}
            onChange={handleExamChange}
          />
        </div>

        <div className="form-item">
          <FormInput 
            label="Date of Birth" 
            type="date" 
            name="dateOfBirth" 
            required 
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-item">
          <FormInput 
            label="Gender" 
            type="select" 
            options={genderOptions} 
            name="gender" 
            required 
            value={formData.gender}
            onChange={handleInputChange}
            disabled={!examData}
          />
        </div>
        
        <div className="form-item">
          <FormInput 
            label="Marital Status" 
            type="select" 
            options={maritalOptions} 
            name="maritalStatus" 
            required 
            value={formData.maritalStatus}
            onChange={handleInputChange}
            disabled={!examData}
          />
        </div>
      </div>
      
      {/* Row with 2 inputs */}
      <div className="form-row two-items">
        <div className="form-item">
          <FormInput 
            label="Nationality" 
            type="select" 
            options={nationalityOptions} 
            name="nationality" 
            required 
            value={formData.nationality}
            onChange={handleInputChange}
            disabled={!examData}
          />
        </div>
        
        <div className="form-item">
          <FormInput 
            label="Domicile" 
            type="select" 
            options={domicileOptions} 
            name="domicile" 
            required 
            value={formData.domicile}
            onChange={handleInputChange}
            disabled={true}
          />
        </div>
      </div>
      
      {/* Row with 4 inputs */}
      <div className="form-row four-items">
        <div className="form-item">
          <FormInput 
            label="Course" 
            type="select" 
            options={courseOptions} 
            name="course" 
            required 
            value={formData.course}
            onChange={handleInputChange}
            disabled={!examData}
          />
        </div>
        
        <div className="form-item">
          <FormInput 
            label="Stream" 
            type="select"
            options={streamOptions}
            name="stream" 
            required 
            value={formData.stream}
            onChange={handleInputChange}
            disabled={!examData}
          />
        </div>
        
        <div className="form-item">
          <FormInput 
            label="Year" 
            type="select" 
            options={["Final Year", "Completed"]} 
            name="yearSemester" 
            required 
            value={formData.yearSemester}
            onChange={handleInputChange}
            disabled={!examData}
          />
        </div>
        
        <div className="form-item">
          <FormInput 
            label="Caste/Category" 
            type="select" 
            options={casteOptions} 
            name="caste" 
            required 
            value={formData.caste}
            onChange={handleInputChange}
            disabled={!examData}
          />
        </div>
      </div>
      
      {/* Row with 3 inputs - Added percentage marks input */}
      <div className="form-row three-items">
        <div className="form-item">
          <FormInput 
            label="PWD/Disabled Status" 
            type="select" 
            options={pwdOptions} 
            name="pwdStatus" 
            required 
            value={formData.pwdStatus}
            onChange={handleInputChange}
            disabled={!examData}
          />
        </div>
        
        <div className="form-item">
          <FormInput 
            label="Percentage Marks" 
            type="number"
            name="percentageMarks" 
            required 
            value={formData.percentageMarks}
            onChange={handleInputChange}
            disabled={!examData}
          />
        </div>
        
        <div className="form-item">
          {/* Empty item to maintain layout */}
        </div>
      </div>

      <div className="form-actions">
        <button 
          type="submit" 
          className="submit-btn"
          disabled={!examData}
        >
          Check Eligibility
        </button>
      </div>

      {/* Eligibility Results Section */}
      {showResults && eligibilityResult && (
        <div className={`eligibility-result ${eligibilityResult.isEligible ? 'eligible' : 'not-eligible'}`}>
          <h3>{eligibilityResult.isEligible ? 'You are eligible for this exam!' : 'You may not be eligible for this exam'}</h3>
          <div className="result-sections">
            <div className="result-section">
              <h4>Eligibility Criteria</h4>
              <ul>
                {eligibilityResult.reasons.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
            </div>
            <div className="result-section">
              <h4>Exam Information</h4>
              <ul>
                {eligibilityResult.examInfo.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      </div>
    
    </form>
  );
};

export default FormPage;