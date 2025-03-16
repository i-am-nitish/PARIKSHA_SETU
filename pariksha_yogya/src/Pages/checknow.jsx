import React, { useState } from 'react';
import styled from 'styled-components';

// Reusable input component that works with various input types
const FormInput = ({ label, type = "text", options = [], required = false, name }) => {
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
          <select className="input" required={required} name={name}>
            <option value="" disabled selected></option>
            {options.map((option, index) => (
              <option key={index} value={option.value || option}>
                {option.label || option}
              </option>
            ))}
          </select>
        );
      case 'date':
        return <input type="date" className="input" required={required} name={name} />;
      default:
        return <input type={type} className="input" required={required} name={name} />;
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  // Options for select inputs
  const genderOptions = ["Male", "Female", "Other"];
  const casteOptions = ["General", "OBC", "SC", "ST", "Other"];
  const pwdOptions = ["Yes", "No"];
  const maritalOptions = ["Single", "Married", "Divorced", "Widowed"];
  const examSectorOptions = ["Government", "Private", "Academic", "Other"];

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div className="container border-gradient p-5 mt-10 rounded-4xl">
      <h2>Personal Information</h2>
      
      {/* Row with 3 inputs */}
      <div className="form-row three-items">
        <div className="form-item">
          <FormInput label="" type="date" name="dateOfBirth" required />
        </div>
        
        <div className="form-item">
          <FormInput label="Gender" type="select" options={genderOptions} name="gender" required />
        </div>
        
        <div className="form-item">
          <FormInput label="Marital Status" type="select" options={maritalOptions} name="maritalStatus" required />
        </div>
      </div>
      
      {/* Row with 2 inputs */}
      <div className="form-row two-items">
        <div className="form-item">
          <FormInput label="Nationality" type="text" name="nationality" required />
        </div>
        
        <div className="form-item">
          <FormInput label="Domicile" type="text" name="domicile" required />
        </div>
      </div>
      
      {/* Row with 4 inputs */}
      <div className="form-row four-items">
        <div className="form-item">
          <FormInput label="Course" type="text" name="course" required />
        </div>
        
        <div className="form-item">
          <FormInput label="Stream" type="text" name="stream" required />
        </div>
        
        <div className="form-item">
          <FormInput label="Year/Semester" type="text" name="yearSemester" required />
        </div>
        
        <div className="form-item">
          <FormInput label="Caste/Category" type="select" options={casteOptions} name="caste" required />
        </div>
      </div>
      
      {/* Row with 3 inputs */}
      <div className="form-row three-items">
        <div className="form-item">
          <FormInput label="PWD/Disabled Status" type="select" options={pwdOptions} name="pwdStatus" required />
        </div>
        
        <div className="form-item">
          <FormInput label="ExamSector" type="select" options={examSectorOptions} name="examSector" required />
        </div>
        
        <div className="form-item">
          <FormInput label="ExamTarget" type="text" name="examTarget" required />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-btn">Submit</button>
      </div>

      </div>
    
    </StyledForm>
  );
};

const StyledForm = styled.form`
  max-width: 1200px;
  margin: 70px auto 0; /* Added top margin to position below navbar */
  padding: 1rem;
  
  .container {
    background-color: #fafafa;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    position: relative;
    overflow: hidden;
    border-radius: 1rem; /* Fixed rounded-4xl syntax */
  }
  
  .border-gradient {
    border: 1px solid;
    border-image: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%) 1;
  }
  
  h2 {
    margin-bottom: 1rem; /* Reduced from 1.5rem */
    color: #333;
    text-align: center;
    font-size: 20px; /* Reduced from 22px */
    font-weight: 600;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 50px; /* Reduced from 60px */
      height: 2px; /* Reduced from 3px */
      background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
      bottom: -6px; /* Reduced from -8px */
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2px;
    }
  }
  
  .form-row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.6rem; /* Reduced from 1rem */
    gap: 8px; /* Reduced from 15px */
  }
  
  .two-items .form-item {
    flex: 0 0 calc(50% - 4px); /* Reduced gap adjustment */
  }
  
  .three-items .form-item {
    flex: 0 0 calc(33.33% - 6px); /* Reduced gap adjustment */
  }
  
  .four-items .form-item {
    flex: 0 0 calc(25% - 6px); /* Reduced gap adjustment */
  }
  
  .form-item {
    margin-bottom: 0.4rem; /* Reduced from 0.8rem */
    border: 1px solid #e0e0e0;
    border-radius: 8px; /* Reduced from 10px */
    padding: 8px; /* Reduced from 12px */
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.03);
    transition: all 0.3s ease;
    
    &:hover {
      box-shadow: 0 3px 8px rgba(0,0,0,0.07);
      border-color: #d0d0d0;
    }
  }
  
  .form-actions {
    margin-top: 0.8rem; /* Reduced from 1.5rem */
    display: flex;
    justify-content: center;
  }
  
  .submit-btn {
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    color: white;
    border: none;
    padding: 0.5rem 1.8rem; /* Reduced from 0.7rem 2rem */
    font-size: 0.9rem; /* Reduced from 0.95rem */
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 3px 10px rgba(37, 117, 252, 0.2);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(37, 117, 252, 0.3);
    }
    
    &:active {
      transform: translateY(0);
    }
  }

  .wave-group {
    position: relative;
    z-index: 0;
  }

  .wave-group .input,
  .wave-group select {
    font-size: 13px;
    padding: 6px 6px 6px 5px; /* Reduced from 8px 8px 8px 5px */
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    z-index: 2;
    position: relative;
  }

  .wave-group .input:focus,
  .wave-group select:focus {
    outline: none;
  }

  .wave-group .label {
    color: #888;
    font-size: 14px; /* Reduced from 15px */
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 6px; /* Reduced from 8px */
    display: flex;
    z-index: 1;
  }

  .wave-group .label-char {
    transition: 0.2s ease all;
    transition-delay: calc(var(--index) * .05s);
  }

  .wave-group .input:focus ~ label .label-char,
  .wave-group .input:valid ~ label .label-char,
  .wave-group select:focus ~ label .label-char,
  .wave-group select:valid ~ label .label-char {
    transform: translateY(-15px); /* Reduced from -18px */
    font-size: 11px; /* Reduced from 12px */
    color: #2575fc;
  }

  .wave-group .bar {
    position: relative;
    display: block;
    width: 100%;
  }

  .wave-group .bar:before,
  .wave-group .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    transition: 0.2s ease all;
  }

  .wave-group .bar:before {
    left: 50%;
  }

  .wave-group .bar:after {
    right: 50%;
  }

  .wave-group .input:focus ~ .bar:before,
  .wave-group .input:focus ~ .bar:after,
  .wave-group select:focus ~ .bar:before,
  .wave-group select:focus ~ .bar:after {
    width: 50%;
  }

  /* For date input and select, ensure label is always moved up when populated */
  .wave-group input[type="date"] ~ label .label-char {
    transform: translateY(-15px); /* Reduced from -18px */
    font-size: 11px; /* Reduced from 12px */
    color: #2575fc;
  }

  .wave-group select {
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232575fc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 10px; /* Reduced from 12px */
    padding-right: 20px; /* Reduced from 24px */
  }

  /* Responsive adjustments */
  @media (max-width: 992px) {
    .form-row {
      flex-direction: column;
      gap: 6px; /* Reduced from 10px */
    }
    
    .form-item {
      width: 100%;
      margin-bottom: 0.4rem; /* Reduced from 0.5rem */
    }
    
    .two-items .form-item,
    .three-items .form-item,
    .four-items .form-item {
      flex: 0 0 100%;
    }
  }
`;

export default FormPage;