import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext({});

export function Tabs({ defaultValue, value, onValueChange, children, ...props }) {
  const [selectedTab, setSelectedTab] = useState(value || defaultValue);

  const handleTabChange = (tabValue) => {
    setSelectedTab(tabValue);
    if (onValueChange) onValueChange(tabValue);
  };

  return (
    <TabsContext.Provider value={{ selectedTab, handleTabChange }}>
      <div className="tabs" {...props}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className, ...props }) {
  return (
    <div 
      className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className || ""}`} 
      role="tablist" 
      {...props}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, className, ...props }) {
  const { selectedTab, handleTabChange } = useContext(TabsContext);
  const isSelected = selectedTab === value;

  return (
    <button 
      role="tab" 
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${isSelected ? 'bg-background text-foreground shadow-sm' : 'hover:bg-background/50'} ${className || ""}`} 
      onClick={() => handleTabChange(value)}
      aria-selected={isSelected}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className, ...props }) {
  const { selectedTab } = useContext(TabsContext);
  
  if (selectedTab !== value) return null;

  return (
    <div 
      role="tabpanel" 
      className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className || ""}`} 
      {...props}
    >
      {children}
    </div>
  );
}
