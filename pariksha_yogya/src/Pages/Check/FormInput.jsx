import React from 'react';

// Reusable input component that works with various input types
const FormInput = ({ label, type = "text", options = [], required = false, name, onChange, value, disabled = false, darkMode = false }) => {
  // Simple static label text (more accessible and compact)
  const labelText = label;

  // Render appropriate input based on type
  const renderInput = () => {
    const darkModeClass = darkMode ? "dark:text-gray-200 dark:bg-transparent dark:border-gray-600" : "";
    
    switch (type) {
      case 'select':
        return (
          <div>
            <select 
              className={`input ${darkModeClass}`}
              required={required} 
              name={name} 
              onChange={onChange} 
              value={value || ""}
              disabled={disabled}
              aria-label={label}
              style={disabled ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
            >
              <option value="" disabled className={darkMode ? "dark:bg-gray-700 dark:text-gray-400" : ""}>Select</option>
              {options.map((option, index) => (
                <option 
                  key={index} 
                  value={option.value || option} 
                  className={darkMode ? "dark:bg-gray-700 dark:text-gray-200" : ""}
                >
                  {option.label || option}
                </option>
              ))}
            </select>
          </div>
        );
      case 'date':
        return (
          <input 
            type="date" 
            className={`input ${darkModeClass}`} 
            required={required} 
            name={name} 
            onChange={onChange} 
            value={value || ""} 
            disabled={disabled}
            style={disabled ? { opacity: 0.6, cursor: 'not-allowed' } : {}} 
          />
        );
      case 'number':
        return (
          <input 
            type="number" 
            min="0" 
            max="100" 
            step="0.01" 
            className={`input ${darkModeClass}`} 
            required={required} 
            name={name} 
            onChange={onChange} 
            value={value || ""} 
            disabled={disabled}
            style={disabled ? { opacity: 0.6, cursor: 'not-allowed' } : {}} 
          />
        );
      default:
        return (
          <input 
            type={type} 
            className={`input ${darkModeClass}`} 
            required={required} 
            name={name} 
            onChange={onChange} 
            value={value || ""} 
            disabled={disabled}
            style={disabled ? { opacity: 0.6, cursor: 'not-allowed' } : {}} 
          />
        );
    }
  };

  return (
    <div className={`wave-group ${darkMode ? 'dark' : ''}`}>
      <label className={`label ${darkMode ? 'dark:text-gray-300' : 'text-gray-700'}`}>{labelText}</label>
      {renderInput()}
    </div>
  );
};

export default FormInput;