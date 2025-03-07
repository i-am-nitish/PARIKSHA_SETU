import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Components/ui/tabs"; 

const examData = {
  "SSC Exams": [
    "SSC GD Constable", "SSC CGL", "SSC CHSL", "SSC CPO", "SSC MTS", 
    "Delhi Police Constable", "SSC Stenographer", "SSC JE CE", "SSC JE EE"
  ],
  "Banking Exams": [
    "SBI Clerk", "SBI PO", "IBPS PO", "IBPS Clerk", "RRB Office Assistant", 
    "RRB Officer Scale -I", "IDBI Executive", "RBI Grade B", "EPFO SSA"
  ],
  "Civil Services Exams": [
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
  ]
};

function VerticalTabs() {
  return (
    <div className="w-full">
      <Tabs 
        defaultValue="SSC Exams" 
        className="flex flex-row w-full gap-2"
      >
        {/* Categories - vertical panel on both mobile and desktop */}
        <TabsList className="flex flex-col h-auto w-1/4 border-l border-gray-600 bg-opacity-20 backdrop-blur-lg p-1 sm:p-2 rounded-lg overflow-y-auto max-h-[70vh]">
          {Object.keys(examData).map((category) => (
            <TabsTrigger 
              key={category}
              value={category} 
              className="text-left text-[10px] sm:text-xs md:text-sm p-1 sm:p-2 rounded-lg transition-colors bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white focus:outline-none"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Exam content */}
        <div className="grow rounded-lg border border-gray-600 bg-opacity-20 backdrop-blur-lg p-2 sm:p-3 md:p-4 shadow-md">
          {Object.entries(examData).map(([category, subExams]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-1 sm:gap-2 md:gap-3">
                {subExams.map((exam, index) => (
                  <div 
                    key={index}
                    className="p-1 sm:p-2 border border-gray-500 rounded-lg bg-gray-900 shadow-sm text-gray-200 text-center text-[10px] sm:text-xs md:text-sm hover:bg-blue-600 hover:border-blue-600 transition-colors cursor-pointer focus:outline-none focus:ring-0 active:outline-none"
                  >
                    {exam}
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}

export default VerticalTabs;