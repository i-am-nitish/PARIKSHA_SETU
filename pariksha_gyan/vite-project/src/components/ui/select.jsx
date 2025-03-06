import React, { createContext, useContext, useState } from "react";

const SelectContext = createContext({});

export function Select({ value, onValueChange, children, ...props }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  const handleSelect = (newValue) => {
    setSelectedValue(newValue);
    if (onValueChange) onValueChange(newValue);
    setIsOpen(false);
  };

  return (
    <SelectContext.Provider value={{ isOpen, setIsOpen, selectedValue, handleSelect }}>
      <div className="relative" {...props}>{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({ className, children, ...props }) {
  const { isOpen, setIsOpen } = useContext(SelectContext);

  return (
    <button 
      className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className || ""}`} 
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {children}
      <span className="ml-1">▼</span>
    </button>
  );
}

export function SelectValue({ placeholder, children, ...props }) {
  const { selectedValue } = useContext(SelectContext);
  
  return <span {...props}>{selectedValue ? children : placeholder}</span>;
}

export function SelectContent({ className, children, ...props }) {
  const { isOpen } = useContext(SelectContext);
  
  if (!isOpen) return null;

  return (
    <div 
      className={`absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in mt-1 w-full ${className || ""}`} 
      {...props}
    >
      <div className="p-1">{children}</div>
    </div>
  );
}

export function SelectItem({ value, children, className, ...props }) {
  const { handleSelect } = useContext(SelectContext);

  return (
    <div 
      className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className || ""}`} 
      onClick={() => handleSelect(value)}
      {...props}
    >
      {children}
    </div>
  );
}
