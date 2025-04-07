import React, { useState } from 'react';
import { getExamNames, getExamData } from '../../Examsdata/codes';
import FormInput from './FormInput';
import ResultNow from './ResultNow';
import './FormStyles.css';

// Function to check age eligibility
const checkAgeEligibility = (examData, dateOfBirth) => {
  if (!examData?.age_criteria || !dateOfBirth) return [];
  
  const birthDate = new Date(dateOfBirth);
  const results = [];
  
  // Loop through each exam cycle
  Object.entries(examData.age_criteria).forEach(([cycleName, cycleData]) => {
    // For exams with NO AGE LIMIT
    if (cycleData['ALL COURSES'] === "NO AGE LIMIT") {
      results.push({
        cycle: cycleName,
        stream: 'ALL COURSES',
        eligible: true,
        message: 'No age limit applies'
      });
      return;
    }
    
    // For NEET format
    if (cycleData['Minimum Age'] && cycleData['Born on or before']) {
      const cutoffYear = cycleData['Born on or before'].split('.')[2];
      const userBirthYear = birthDate.getFullYear();
      const eligible = userBirthYear <= parseInt(cutoffYear);
      
      results.push({
        cycle: cycleName,
        stream: 'ALL COURSES',
        eligible,
        message: eligible ? 
          `Eligible (born before ${cycleData['Born on or before']})` : 
          `Not eligible (must be born on/before ${cycleData['Born on or before']})`
      });
      return;
    }
    
    // For CDS and other similar formats (date ranges)
    Object.entries(cycleData).forEach(([stream, dateRange]) => {
      if (stream === 'Minimum Age' || stream === 'Maximum Age' || stream === 'Born on or before') {
        return; // Skip these fields for NEET
      }
      
      // Parse date range (format: "02 Jan 2000 - 01 Jan 2005")
      const matches = dateRange.match(/(\d{2} \w{3} \d{4}) - (\d{2} \w{3} \d{4})/);
      
      if (matches) {
        const minDate = new Date(matches[1]);
        const maxDate = new Date(matches[2]);
        const eligible = birthDate >= minDate && birthDate <= maxDate;
        
        results.push({
          cycle: cycleName,
          stream: stream,
          eligible,
          message: eligible ? 
            `Eligible (${dateRange})` : 
            `Not eligible (must be born between ${matches[1]} and ${matches[2]})`
        });
      }
    });
  });
  
  return results;
};

// Check eligibility based on form data and exam criteria
const checkEligibility = (formData, examData, getStreamOptions) => {
  if (!examData) return false;
  
  // Set of eligibility criteria
  let isEligible = false;
  const reasons = [];
  const examInfo = [];
  const ageResults = checkAgeEligibility(examData, formData.dateOfBirth);
  const eligibleStreams = [];
  
  // Get all possible streams
  const allStreams = getStreamOptions();
  
  // Check each possible stream for eligibility
  allStreams.forEach(stream => {
    // Check age eligibility for this stream
    const streamAgeEligible = ageResults.some(result => 
      (result.stream === stream || result.stream === 'ALL COURSES') && result.eligible
    );
    
    // Check education requirement for this stream
    let educationEligible = false;
    
    if (examData.eligibility_education_course) {
      // First check for direct match
      let courseInfo = null;
      
      if (typeof examData.eligibility_education_course === 'object') {
        // Direct match
        if (examData.eligibility_education_course[stream]) {
          courseInfo = examData.eligibility_education_course[stream];
        } 
        // Check for partial match (e.g., "OTA(M)" should match with "OTA")
        else {
          // Extract base name without parentheses
          const baseStreamName = stream.split('(')[0].trim();
          if (examData.eligibility_education_course[baseStreamName]) {
            courseInfo = examData.eligibility_education_course[baseStreamName];
          } else {
            courseInfo = examData.eligibility_education_course['ALL COURSES'] || 
                        Object.values(examData.eligibility_education_course)[0];
          }
        }
      } else {
        courseInfo = examData.eligibility_education_course;
      }
      
      educationEligible = (formData.course === courseInfo);
    }
    
    // If eligible for both age and education, add to eligible streams
    if (streamAgeEligible && educationEligible) {
      // Get the actual education requirement used for this stream
      let actualRequirement;
      if (typeof examData.eligibility_education_course === 'object') {
        // First try direct match
        if (examData.eligibility_education_course[stream]) {
          actualRequirement = examData.eligibility_education_course[stream];
        } 
        // Then try partial match
        else {
          const baseStreamName = stream.split('(')[0].trim();
          actualRequirement = examData.eligibility_education_course[baseStreamName] || 
                            examData.eligibility_education_course['ALL COURSES'];
        }
      } else {
        actualRequirement = examData.eligibility_education_course;
      }
      
      eligibleStreams.push({
        name: stream,
        educationRequirement: actualRequirement
      });
    }
  });
  
  // At least one stream is eligible
  isEligible = eligibleStreams.length > 0;
  
  // Check percentage marks against eligibility criteria
  let marksEligible = true;
  if (examData.eligibility_marks && formData.percentageMarks) {
    let requiredMarks = 0;
    let actualMarks = parseFloat(formData.percentageMarks);
    
    if (formData.caste === 'SC' || formData.caste === 'ST' || formData.pwdStatus === 'Yes') {
      const requirement = examData.eligibility_marks['SC/ST/PH'] || '';
      requiredMarks = parseInt(requirement.replace(/[^0-9]/g, ''), 10) || 0;
      reasons.push(`Required marks: ${requirement}`);
    } else {
      const requirement = examData.eligibility_marks['General'] || 
                         examData.eligibility_marks['OBC/EWS'] || '';
      requiredMarks = parseInt(requirement.replace(/[^0-9]/g, ''), 10) || 0;
      reasons.push(`Required marks: ${requirement}`);
    }
    
    if (actualMarks < requiredMarks) {
      marksEligible = false;
      isEligible = false;
      reasons.push(`Your percentage (${actualMarks}%) is below the required minimum of ${requiredMarks}%`);
    } else {
      reasons.push(`Your percentage (${actualMarks}%) meets the required minimum of ${requiredMarks}%`);
    }
  }
  
  // Add exam info section
  if (examData.exam_sector) {
    examInfo.push(`Exam Sector: ${examData.exam_sector}`);
  }
  
  if (examData.conducting_body) {
    examInfo.push(`Conducted by: ${examData.conducting_body}`);
  }
  
  // Add PWD status check
  if (examData.pwd_status === "NOT APPLICABLE" && 
      formData.pwdStatus !== "Not Applicable") {
    isEligible = false;
    reasons.push("PWD status is not applicable for this exam");
  }
  
  return {
    isEligible,
    reasons,
    examInfo,
    ageResults,
    eligibleStreams,
    marksEligible
  };
};

// Main Form Component
const FormPage = () => {
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