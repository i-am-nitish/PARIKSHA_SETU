import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaGraduationCap, FaCalendarAlt, FaUniversity, FaUserGraduate } from 'react-icons/fa';
import { MdSubject, MdSchool } from 'react-icons/md';
import './FormStyles.css';

const ResultNow = ({ 
  eligibilityResult, 
  examData, 
  formData, 
  requiredPercentage,
  darkMode = false 
}) => {
  if (!eligibilityResult) return null;

  return (
    <div className={`eligibility-result ${eligibilityResult.isEligible ? 'eligible' : 'not-eligible'} ${darkMode ? 'dark:bg-opacity-20 dark:border-opacity-50' : ''}`}>
      <div className="result-header">
        {eligibilityResult.isEligible ? 
          <FaCheckCircle className="result-icon eligible-icon" /> : 
          <FaTimesCircle className="result-icon not-eligible-icon" />
        }
        <h3 className={darkMode ? "dark:text-gray-100" : ""}>{eligibilityResult.isEligible ? 'You are eligible for this exam!' : 'You may not be eligible for this exam'}</h3>
      </div>
      
      <div className="result-sections-layout">
        {/* Left column - Summary and Streams */}
        <div className="result-left-column">
          {/* Main Eligibility Status */}
          <div className={`result-section-card primary-section ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600' : ''}`}>
            <div className="section-header">
              <FaInfoCircle className={`section-icon ${darkMode ? 'dark:text-blue-400' : ''}`} />
              <h4 className={darkMode ? 'dark:text-gray-200' : ''}>Eligibility Summary</h4>
            </div>
            <div className="summary-content">
              <div className={`summary-item ${darkMode ? 'dark:border-gray-600' : ''}`}>
                <span className={`summary-label ${darkMode ? 'dark:text-gray-400' : ''}`}>Exam:</span>
                <span className={`summary-value ${darkMode ? 'dark:text-gray-200' : ''}`}>{formData.examTarget}</span>
              </div>
              <div className={`summary-item ${darkMode ? 'dark:border-gray-600' : ''}`}>
                <span className={`summary-label ${darkMode ? 'dark:text-gray-400' : ''}`}>Education:</span>
                <span className={`summary-value ${darkMode ? 'dark:text-gray-200' : ''}`}>{formData.course}</span>
              </div>
              {requiredPercentage && (
                <div className={`summary-item ${darkMode ? 'dark:border-gray-600' : ''}`}>
                  <span className={`summary-label ${darkMode ? 'dark:text-gray-400' : ''}`}>Required Marks:</span>
                  <span className={`summary-value ${darkMode ? 'dark:text-gray-200' : ''}`}>{requiredPercentage}</span>
                </div>
              )}
              <div className={`summary-item ${darkMode ? 'dark:border-gray-600' : ''}`}>
                <span className={`summary-label ${darkMode ? 'dark:text-gray-400' : ''}`}>Your Marks:</span>
                <span className={`summary-value ${eligibilityResult.marksEligible ? 'eligible-text' : 'not-eligible-text'}`}>
                  {formData.percentageMarks}%
                </span>
              </div>
              <div className={`summary-item ${darkMode ? 'dark:border-gray-600' : ''}`}>
                <span className={`summary-label ${darkMode ? 'dark:text-gray-400' : ''}`}>Category:</span>
                <span className={`summary-value ${darkMode ? 'dark:text-gray-200' : ''}`}>{formData.caste}</span>
              </div>
              {examData?.conducting_body && (
                <div className={`summary-item ${darkMode ? 'dark:border-gray-600' : ''}`}>
                  <span className={`summary-label ${darkMode ? 'dark:text-gray-400' : ''}`}>Conducted by:</span>
                  <span className={`summary-value ${darkMode ? 'dark:text-gray-200' : ''}`}>{examData.conducting_body}</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Eligible Streams */}
          {eligibilityResult.eligibleStreams && eligibilityResult.eligibleStreams.length > 0 && (
            <div className={`result-section-card streams-section ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600' : ''}`}>
              <div className="section-header">
                <FaGraduationCap className={`section-icon ${darkMode ? 'dark:text-blue-400' : ''}`} />
                <h4 className={darkMode ? 'dark:text-gray-200' : ''}>Eligible Streams ({eligibilityResult.eligibleStreams.length})</h4>
              </div>
              <div className="streams-grid">
                {eligibilityResult.eligibleStreams.map((stream, index) => {
                  // Get course data from new structure
                  const courseData = examData.courses || examData.academies || {};
                  const course = courseData[stream.name];
                  
                  return (
                    <div key={index} className={`stream-card ${darkMode ? 'dark:bg-gray-800 dark:border-blue-700' : ''}`}>
                      <div className="stream-title">
                        <FaUserGraduate className={`stream-icon ${darkMode ? 'dark:text-blue-400' : ''}`} /> 
                        <span className={darkMode ? 'dark:text-gray-200' : ''}>{course?.full_form || stream.name}</span>
                      </div>
                      {course?.exam_subjects && (
                        <div className="stream-detail">
                          <MdSubject className={`detail-icon ${darkMode ? 'dark:text-gray-400' : ''}`} /> 
                          <span className={darkMode ? 'dark:text-gray-400' : ''}>
                            {Array.isArray(course.exam_subjects.subjects) ? 
                              course.exam_subjects.subjects.join(', ') : 
                              course.exam_subjects.subjects || 'Not specified'}
                          </span>
                        </div>
                      )}
                      <div className="stream-detail">
                        <MdSchool className={`detail-icon ${darkMode ? 'dark:text-gray-400' : ''}`} /> 
                        <span className={darkMode ? 'dark:text-gray-400' : ''}>
                          Education: {course?.eligibility_education_course || stream.educationRequirement}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        
        {/* Right column - Age Eligibility */}
        <div className="result-right-column">
          {/* Age Eligibility */}
          {eligibilityResult.ageResults && eligibilityResult.ageResults.length > 0 && (
            <div className={`result-section-card age-section ${darkMode ? 'dark:bg-gray-700 dark:border-gray-600' : ''}`}>
              <div className="section-header">
                <FaCalendarAlt className={`section-icon ${darkMode ? 'dark:text-blue-400' : ''}`} />
                <h4 className={darkMode ? 'dark:text-gray-200' : ''}>Age Eligibility</h4>
              </div>
              <div className={`age-summary ${darkMode ? 'dark:text-gray-300' : ''}`}>
                <span className={`dob-label ${darkMode ? 'dark:text-gray-400' : ''}`}>Your Date of Birth:</span>
                <span className={`dob-value ${darkMode ? 'dark:bg-gray-800 dark:text-gray-200' : ''}`}>
                  {new Date(formData.dateOfBirth).toLocaleDateString()}
                </span>
              </div>
              <div className={`age-table ${darkMode ? 'dark:border-gray-600' : ''}`}>
                <div className={`age-table-header ${darkMode ? 'dark:bg-gray-800 dark:text-gray-300' : ''}`}>
                  <div className="age-cycle">Exam Cycle</div>
                  <div className="age-stream">Stream</div>
                  <div className="age-status">Status</div>
                </div>
                {eligibilityResult.ageResults.map((result, index) => (
                  <div 
                    key={index} 
                    className={`age-table-row ${result.eligible ? 'eligible-row' : 'not-eligible-row'} ${
                      darkMode 
                        ? result.eligible 
                          ? 'dark:bg-green-900 dark:bg-opacity-20' 
                          : 'dark:bg-red-900 dark:bg-opacity-20'
                        : ''
                    }`}
                  >
                    <div className={`age-cycle ${darkMode ? 'dark:text-gray-300' : ''}`}>{result.cycle}</div>
                    <div className={`age-stream ${darkMode ? 'dark:text-gray-300' : ''}`}>{result.stream}</div>
                    <div className="age-status">
                      {result.eligible ? 
                        <><FaCheckCircle className="status-icon eligible-icon" /> <span className={darkMode ? 'dark:text-green-400' : ''}>Eligible</span></> : 
                        <><FaTimesCircle className="status-icon not-eligible-icon" /> <span className={darkMode ? 'dark:text-red-400' : ''}>Not Eligible</span></>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultNow;