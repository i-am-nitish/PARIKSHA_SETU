import React, { useState } from 'react';
import { getExamNames } from '../../Examsdata/codes';
import FormInput from './FormInput';
import ResultNow from './resultnow';
import useFormData from './setformdata';
import { checkEligibility } from './checknow';
import './FormStyles.css';

const FormPage = () => {
  const {
    formData,
    examData,
    requiredPercentage,
    handleInputChange,
    handleExamChange
  } = useFormData();
  
  const [eligibilityResult, setEligibilityResult] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const eligibility = checkEligibility(formData, examData, getStreamOptions);
    setEligibilityResult(eligibility);
    setShowResults(true);
  };

  // Get exam names for the dropdown
  const examTargetOptions = getExamNames();

  // Get options directly from exam data, with empty arrays as fallback
  const genderOptions = examData?.gender || [];
  const casteOptions = examData?.caste_category || [];
  
  // Handle pwd_status instead of pwd_disabled_status
  const pwdOptions = examData?.pwd_status === "APPLICABLE" ? 
                     ["Yes", "No"] : 
                     ["Not Applicable"];
  
  // Handle complex marital_status structure
  const getMaritalOptions = () => {
    if (!examData?.marital_status) return [];
    
    // Handle different formats between exams
    if (Array.isArray(examData.marital_status)) {
      return examData.marital_status;
    } 
    else if (typeof examData.marital_status === 'object') {
      // If it's complex like CDS format, extract unique values
      const allOptions = new Set();
      
      Object.entries(examData.marital_status).forEach(([key, value]) => {
        if (typeof value === 'string') {
          allOptions.add(value);
        } else if (Array.isArray(value)) {
          value.forEach(option => allOptions.add(option));
        } else if (typeof value === 'object') {
          // For nested objects like CDS OTA
          Object.values(value).forEach(innerValue => {
            if (typeof innerValue === 'string') {
              allOptions.add(innerValue);
            } else if (Array.isArray(innerValue)) {
              innerValue.forEach(option => allOptions.add(option));
            }
          });
        }
      });
      
      return Array.from(allOptions);
    }
    
    return [];
  };
  
  const maritalOptions = getMaritalOptions();
  
  // Convert education_course to dropdown options from eligibility_education_course
  const getEducationRequirements = () => {
    if (!examData?.eligibility_education_course) return [];
    
    // Extract all unique education qualifications
    const allQualifications = new Set();
    
    if (typeof examData.eligibility_education_course === 'object') {
      // Collect all unique education requirements
      Object.values(examData.eligibility_education_course).forEach(value => {
        allQualifications.add(value);
      });
      return Array.from(allQualifications);
    } else {
      // Handle string value
      return [examData.eligibility_education_course];
    }
  };
  
  const courseOptions = getEducationRequirements();
  
  // Get eligible streams based on selected education qualification
  const getStreamOptions = () => {
    if (!examData?.posts_classes_courses_departments_academy) return [];
    
    if (examData.posts_classes_courses_departments_academy === "ALL COURSES") {
      // For exams that don't have specific streams/departments
      if (examData.exam_subjects && typeof examData.exam_subjects === 'object') {
        // Use the keys from exam_subjects as options
        const options = Object.keys(examData.exam_subjects).filter(key => key !== 'ALL COURSES');
        
        // If user has selected a course, filter streams based on eligibility
        if (formData.course && examData.eligibility_education_course) {
          return options.filter(stream => {
            // Get education requirement for this stream - with base name matching
            let requirement;
            
            if (typeof examData.eligibility_education_course === 'object') {
              // Direct match first
              if (examData.eligibility_education_course[stream]) {
                requirement = examData.eligibility_education_course[stream];
              } 
              // Check for partial match (e.g., "OTA(M)" should match with "OTA")
              else {
                // Extract base name without parentheses
                const baseStreamName = stream.split('(')[0].trim();
                if (examData.eligibility_education_course[baseStreamName]) {
                  requirement = examData.eligibility_education_course[baseStreamName];
                } else {
                  requirement = examData.eligibility_education_course['ALL COURSES'] || 
                               Object.values(examData.eligibility_education_course)[0];
                }
              }
            } else {
              requirement = examData.eligibility_education_course;
            }
            
            return requirement === formData.course;
          });
        }
        
        return options;
      }
      return ["General"];
    }
    
    if (typeof examData.posts_classes_courses_departments_academy === 'object') {
      const streams = Object.keys(examData.posts_classes_courses_departments_academy);
      
      // If user has selected a course, filter streams based on eligibility
      if (formData.course && examData.eligibility_education_course) {
        return streams.filter(stream => {
          // Get education requirement for this stream
          const requirement = examData.eligibility_education_course[stream] || 
                             examData.eligibility_education_course['ALL COURSES'];
          
          return requirement === formData.course;
        });
      }
      
      return streams;
    }
    
    return [examData.posts_classes_courses_departments_academy];
  };
  
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
              label="Education Qualification" 
              type="select" 
              options={courseOptions} 
              name="course" 
              required 
              value={formData.course}
              onChange={handleInputChange}
              disabled={!examData || courseOptions.length === 0}
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
        
        {/* Row with 3 inputs */}
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
              disabled={!examData || examData?.pwd_status === "NOT APPLICABLE"}
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

        {/* Display the results using the separate component */}
        {showResults && (
          <ResultNow 
            eligibilityResult={eligibilityResult}
            examData={examData}
            formData={formData}
            requiredPercentage={requiredPercentage}
          />
        )}
      </div>
    </form>
  );
};

export default FormPage;