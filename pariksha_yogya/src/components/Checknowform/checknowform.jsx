import { useState } from "react";
import styled from "styled-components";

// Styled components for animated inputs
const FormField = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  background-color: ${props => props.bgColor || "rgba(239, 246, 255, 0.6)"};
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  border-bottom: 2px #3b82f6 solid;
  display: block;
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  color: #333;

  &:focus,
  &:valid {
    outline: 0;
    border-bottom-color: #2563eb;
  }

  &:focus + label span,
  &:valid + label span {
    color: #2563eb;
    transform: translateY(-25px);
    background-color: white;
    padding: 0 4px;
    z-index: 5;
    position: relative;
  }
`;

const StyledSelect = styled.select`
  background-color: ${props => props.bgColor || "rgba(239, 246, 255, 0.6)"};
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  border-bottom: 2px #3b82f6 solid;
  display: block;
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  color: #333;

  &:focus,
  &:valid {
    outline: 0;
    border-bottom-color: #2563eb;
  }

  &:focus + label span,
  &:valid + label span {
    color: #2563eb;
    transform: translateY(-25px);
    background-color: white;
    padding: 0 4px;
    z-index: 5;
    position: relative;
  }
`;

const InputLabel = styled.label`
  position: absolute;
  top: 10px;
  left: 12px;
  pointer-events: none;
  z-index: 2;
`;

const LabelText = styled.span`
  display: inline-block;
  font-size: 16px;
  min-width: 5px;
  color: #555;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  margin-right: 1px;
`;

const HelpText = styled.p`
  font-size: 12px;
  color: #64748b;
  margin-top: 4px;
  padding-left: 2px;
`;

// Function to create animated label
const AnimatedLabel = ({ text }) => {
  return (
    <>
      {text.split('').map((char, i) => (
        <LabelText key={i} style={{ transitionDelay: `${i * 30}ms` }}>
          {char}
        </LabelText>
      ))}
    </>
  );
};

// Rest of your component remains the same...

export default function FormPage() {
  const [formData, setFormData] = useState({
    dob: "",
    educationCourse: "",
    educationStream: "",
    educationYear: "",
    caste: "",
    gender: "",
    pwd: "",
    maritalStatus: "",
    domicile: "",
    nationality: "",
    examSector: "",
    examTarget: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // You can add logic here to process the form data and show eligibility results
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Fill Your Details</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-wrap -mx-2">
            {/* Date of Birth */}
            <div className="px-3 w-full md:w-1/4 mb-4">
              <FormField>
                <StyledInput 
                  type="date" 
                  name="dob" 
                  value={formData.dob} 
                  onChange={handleChange} 
                  required 
                  bgColor="rgba(219, 234, 254, 0.3)"
                />
                <InputLabel>
                  <AnimatedLabel text="Date of Birth" />
                </InputLabel>
              </FormField>
              <HelpText>Enter your date of birth for age eligibility criteria</HelpText>
            </div>
            
            {/* Gender */}
            <div className="px-3 w-full md:w-1/3 mb-4">
              <FormField>
                <StyledSelect 
                  name="gender" 
                  value={formData.gender} 
                  onChange={handleChange} 
                  required
                  bgColor="rgba(220, 252, 231, 0.3)"
                >
                  <option value=""></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </StyledSelect>
                <InputLabel>
                  <AnimatedLabel text="Gender" />
                </InputLabel>
              </FormField>
              <HelpText>Some exams have gender-specific criteria and relaxations</HelpText>
            </div>

            {/* Category */}
            <div className="px-3 w-full md:w-5/12 mb-4">
              <FormField>
                <StyledSelect 
                  name="caste" 
                  value={formData.caste} 
                  onChange={handleChange} 
                  required
                  bgColor="rgba(243, 232, 255, 0.3)"
                >
                  <option value=""></option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="EWS">EWS</option>
                </StyledSelect>
                <InputLabel>
                  <AnimatedLabel text="Category" />
                </InputLabel>
              </FormField>
              <HelpText>Category determines fee relaxation and reservation benefits</HelpText>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            {/* PwD Status */}
            <div className="px-3 w-full md:w-1/5 mb-4">
              <FormField>
                <StyledSelect 
                  name="pwd" 
                  value={formData.pwd} 
                  onChange={handleChange} 
                  required
                  bgColor="rgba(254, 249, 195, 0.3)"
                >
                  <option value=""></option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </StyledSelect>
                <InputLabel>
                  <AnimatedLabel text="PwD Status" />
                </InputLabel>
              </FormField>
              <HelpText>Persons with Disabilities qualify for additional benefits</HelpText>
            </div>

            {/* Marital Status */}
            <div className="px-3 w-full md:w-1/4 mb-4">
              <FormField>
                <StyledSelect 
                  name="maritalStatus" 
                  value={formData.maritalStatus} 
                  onChange={handleChange} 
                  required
                  bgColor="rgba(253, 242, 248, 0.3)"
                >
                  <option value=""></option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </StyledSelect>
                <InputLabel>
                  <AnimatedLabel text="Marital Status" />
                </InputLabel>
              </FormField>
              <HelpText>Required for certain defense and government positions</HelpText>
            </div>

            {/* Domicile */}
            <div className="px-3 w-full md:w-1/4 mb-4">
              <FormField>
                <StyledInput 
                  type="text" 
                  name="domicile" 
                  value={formData.domicile} 
                  onChange={handleChange} 
                  required
                  bgColor="rgba(238, 242, 255, 0.3)"
                  placeholder=" "
                />
                <InputLabel>
                  <AnimatedLabel text="Domicile" />
                </InputLabel>
              </FormField>
              <HelpText>Enter state of permanent residence for state quota eligibility</HelpText>
            </div>
            
            {/* Nationality */}
            <div className="px-3 w-full md:w-3/10 mb-4">
              <FormField>
                <StyledInput 
                  type="text" 
                  name="nationality" 
                  value={formData.nationality} 
                  onChange={handleChange} 
                  required
                  bgColor="rgba(204, 251, 241, 0.3)"
                  placeholder=" "
                />
                <InputLabel>
                  <AnimatedLabel text="Nationality" />
                </InputLabel>
              </FormField>
              <HelpText>Most government exams require Indian citizenship</HelpText>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            {/* Education Course */}
            <div className="px-3 w-full md:w-3/5 mb-4">
              <FormField>
                <StyledInput 
                  type="text" 
                  name="educationCourse" 
                  value={formData.educationCourse} 
                  onChange={handleChange} 
                  required
                  bgColor="rgba(255, 237, 213, 0.3)"
                  placeholder=" "
                />
                <InputLabel>
                  <AnimatedLabel text="Education Course" />
                </InputLabel>
              </FormField>
              <HelpText>Enter your degree (e.g., BA, B.Tech, BSc, MCom)</HelpText>
            </div>

            {/* Year/Semester */}
            <div className="px-3 w-full md:w-2/5 mb-4">
              <FormField>
                <StyledInput 
                  type="text" 
                  name="educationYear" 
                  value={formData.educationYear} 
                  onChange={handleChange} 
                  required
                  bgColor="rgba(207, 250, 254, 0.3)"
                  placeholder=" "
                />
                <InputLabel>
                  <AnimatedLabel text="Year/Semester" />
                </InputLabel>
              </FormField>
              <HelpText>Current academic year or semester if still studying</HelpText>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            {/* Education Stream */}
            <div className="px-3 w-full mb-4">
              <FormField>
                <StyledInput 
                  type="text" 
                  name="educationStream" 
                  value={formData.educationStream} 
                  onChange={handleChange} 
                  required
                  bgColor="rgba(236, 252, 203, 0.3)"
                  placeholder=" "
                />
                <InputLabel>
                  <AnimatedLabel text="Education Stream" />
                </InputLabel>
              </FormField>
              <HelpText>Your major/specialization (e.g., Computer Science, Economics, Mechanical Engineering)</HelpText>
            </div>
          </div>

          <div className="flex flex-wrap -mx-2">
            {/* Exam Sector */}
            <div className="px-3 w-full md:w-2/5 mb-4">
              <FormField>
                <StyledSelect 
                  name="examSector" 
                  value={formData.examSector} 
                  onChange={handleChange} 
                  required
                  bgColor="rgba(251, 243, 219, 0.3)"
                >
                  <option value=""></option>
                  <option value="Banking">Banking</option>
                  <option value="SSC">SSC</option>
                  <option value="Railway">Railway</option>
                  <option value="Defence">Defence</option>
                  <option value="Teaching">Teaching</option>
                  <option value="State PSC">State PSC</option>
                  <option value="Others">Others</option>
                </StyledSelect>
                <InputLabel>
                  <AnimatedLabel text="Exam Sector" />
                </InputLabel>
              </FormField>
              <HelpText>Select the general sector of your target exam</HelpText>
            </div>

            {/* Target Exam */}
            <div className="px-3 w-full md:w-3/5 mb-4">
              <FormField>
                <StyledInput 
                  type="text" 
                  name="examTarget" 
                  value={formData.examTarget} 
                  onChange={handleChange} 
                  required
                  bgColor="rgba(224, 242, 254, 0.3)"
                  placeholder=" "
                />
                <InputLabel>
                  <AnimatedLabel text="Target Exam" />
                </InputLabel>
              </FormField>
              <HelpText>Specific exam you're targeting (e.g., SBI PO, SSC CGL, UPSC CSE)</HelpText>
            </div>
          </div>

          <button type="submit" 
            className="w-full p-3 mt-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition-colors">
            Check Eligibility
          </button>
        </form>
      </div>
    </div>
  );
}