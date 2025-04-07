import React from 'react';

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

export default FormInput;