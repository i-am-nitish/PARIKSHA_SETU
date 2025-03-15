import React, { useState, useMemo } from "react";

const examData = {
  "SSC Exams": [
    "SSC GD Constable", "SSC CGL", "SSC CHSL", "SSC CPO", "SSC MTS", 
    "Delhi Police Constable", "SSC Stenographer", "SSC JE CE", "SSC JE EE"
  ],
  "Banking Exams": [
    "SBI Clerk", "SBI PO", "IBPS PO", "IBPS Clerk", "RRB Office Assistant", 
    "RRB Officer Scale -I", "IDBI Executive", "RBI Grade B", "EPFO SSA"
  ],
  "Civil services Exams": [
    "UPSC Civil Services", "BPSC Exam", "UPPSC", "MPPSC", "RPSC RAS", 
    "UPSC CAPF AC", "MPSC State Service", "UPPSC RO ARO", "UPSC EPFO"
  ],
  "Railway Exams": [
    "RRB Group D", "RRB NTPC", "RPF Constable", "RRB ALP", "RRB Technician", 
    "RPF SI", "RRB JE", "RRB Ministerial and Isolated Categories"
  ],
  "Defence Exams": [
    "CDS", "NDA", "AFCAT", "Airforce Group X", "Airforce Group Y", "Indian Army Agniveer",
    "BSF Head Constable", "CISF Constable", "ITBP Constable", "Territorial Army"
  ],
  "Insurances Exams": [
    "LIC AAO", "LIC ADO", "LIC HFL", "NICL AO", "UIIC Assistant", 
    "Oriental Insurance", "NIACL Assistant", "NIACL AO", "GIC Assistant"
  ],
  "Nursing Exams": [
    "NEET Nursing", "AIIMS Nursing", "JIPMER Nursing", "RUHS Nursing", "PGIMER Nursing", 
    "DSSSB Staff Nurse", "UP Staff Nurse", "ESIC Staff Nurse", "RRB Staff Nurse"
  ],
  "PG Exams": [
    "UGC NET", "GATE", "CSIR NET", "JEST", "JGEEBILS", "TIFR", "NBHM", "IISc", "ICAR"
  ],
  "Campus Placement Exams": [
    "TCS NQT", "Infosys Certification", "Wipro NLTH", "Capgemini Tech", "Cognizant GenC", 
    "Accenture Assessment", "HCL TechBee", "IBM Cognitive", "Tech Mahindra SEED"
  ],
  "MBA Exams": [
    "CAT", "XAT", "MAT", "CMAT", "NMAT", "SNAP", "IIFT", "TISSNET", "GMAT"
  ],
  "Accounting and Commerce Exams": [
    "CA Foundation", "CA Intermediate", "CA Final", "CMA Foundation", "CMA Intermediate", 
    "CS Foundation", "CS Executive", "CFA", "FRM"
  ],
  "Judiciary Exams": [
    "Judicial Services", "APO", "Delhi Judicial Services", "UP Judicial Services", "MP Judicial Services", 
    "Bihar Judicial Services", "Rajasthan Judicial Services", "Gujarat Judicial Services", "Maharashtra Judicial Services"
  ],
  "CUET and UG Entrance Exams": [
    "CUET", "JEE Main", "JEE Advanced", "NEET UG", "CLAT", "AILET", "IPU CET", "AMU", "BHU"
  ],
  "Police Exams": [
    "Police Constable", "Police SI", "Police Inspector", "UPPRPB", "TNUSRB", "MPPRB", 
    "HSSC Police", "AP Police", "Telangana Police"
  ],
  "Regulatory Body Exams": [
    "SEBI Grade A", "SEBI Grade B", "NABARD Grade A", "NABARD Grade B", "IRDAI AO", 
    "PFRDA", "SIDBI Grade A", "IFSCA", "EXIM Bank"
  ],
  "Other Govt. Exams": [
    "UPSC CAPF", "UPSC IES", "UPSC CMS", "UPSC NDA", "Intelligence Bureau", "ACIO", 
    "UPSC CDS", "UPSC SCRA", "UPSC Geo-Scientist"
  ],
  "School Exams": [
    "CBSE 10th", "CBSE 12th", "ICSE 10th", "ISC 12th", "State Board 10th", 
    "State Board 12th", "NIOS", "IB Diploma", "Cambridge IGCSE"
  ],
  "Teaching Exams": [
    "CTET", "STET", "UPTET", "KVS", "NVS", "DSSSB Teacher", "SUPER TET", "B.Ed Entrance", "M.Ed Entrance"
  ],
  "Engineering Recruiting Exams": [
    "ISRO", "DRDO", "BARC", "SAIL", "BHEL", "IOCL", "ONGC", "NTPC", "GAIL"
  ],
  "State Government Exams": [
    "UPPSC", "BPSC", "MPPSC", "RPSC", "WBPSC", "TNPSC", "KPSC", "APPSC", "TSPSC"
  ]
};

function VerticalTabs() {
  const [selectedCategory, setSelectedCategory] = useState("SSC Exams");
  const [searchQuery, setSearchQuery] = useState("");

  // Function to chunk array into groups of 4
  const chunkArray = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    );
  };

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    
    const results = [];
    const lowerQuery = searchQuery.toLowerCase();
    
    Object.entries(examData).forEach(([category, exams]) => {
      exams.forEach(exam => {
        if (exam.toLowerCase().includes(lowerQuery)) {
          results.push(exam);
        }
      });
    });
    
    return results;
  }, [searchQuery]);

  // Group exams into rows of 4 - either search results or selected category
  const examRows = chunkArray(searchResults || examData[selectedCategory], 4);

  return (
    <div className="flex flex-col w-full">
      {/* Search bar */}
      <div className="self-end mb-2 max-w-5xl w-full flex justify-end">
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search exams..."
            className="w-full border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex justify-center w-full">
        <div className="flex flex-col md:flex-row max-w-5xl w-full border rounded-lg shadow-sm">
          


          {/* Left side - Categories */}
          <div className="w-full md:w-1/4 border-r">
            {Object.keys(examData).map((category) => (
              <div 
                key={category}
                className={`py-1.5 px-2.5 cursor-pointer text-xs transition-colors hover:bg-gray-100 ${
                  selectedCategory === category && !searchQuery ? "bg-blue-100 border-l-3 border-l-blue-500 font-medium" : ""
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setSearchQuery("");
                }}
              >
                {category}
              </div>
            ))}
          </div>
          
          {/* Right side - Exams in 4 columns */}
          <div className="w-full md:w-3/4 p-2">
            <h2 className="text-base font-semibold mb-1.5">
              {searchQuery ? `Search Results for "${searchQuery}"` : selectedCategory}
            </h2>
            {searchResults && searchResults.length === 0 ? (
              <p className="text-sm text-gray-500">No exams found matching your search.</p>
            ) : (
              <div className="w-full">
                {examRows.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex flex-wrap mb-1">
                    {row.map((exam, colIndex) => (
                      <div 
                        key={colIndex} 
                        className="w-full sm:w-1/4 p-0.5"
                      >
                        <div className="border rounded-md p-1.5 hover:bg-gray-50 cursor-pointer hover:shadow-sm transition-all text-xs">
                          {exam}
                        </div>
                      </div>
                    ))}
                    {/* Fill empty cells if row has less than 4 items */}
                    {row.length < 4 && 
                      Array(4 - row.length).fill().map((_, i) => (
                        <div key={`empty-${i}`} className="w-full sm:w-1/4 p-0.5"></div>
                      ))
                    }
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalTabs;