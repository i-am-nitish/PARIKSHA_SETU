import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Components/ui/tabs"; 
import { motion } from "framer-motion"; // Import animations

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
    <Tabs defaultValue="SSC Exams" orientation="vertical" className="flex w-full gap-6">
      {/* Left Panel - Categories */}
      <TabsList className="flex-col w-1/4 border-l border-gray-600 bg-opacity-20 backdrop-blur-lg p-4 rounded-xl shadow-md">
        {Object.keys(examData).map((category, index) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <TabsTrigger 
              value={category} 
              className="text-left w-full p-3 rounded-lg transition-all duration-300 bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white shadow-sm"
            >
              {category}
            </TabsTrigger>
          </motion.div>
        ))}
      </TabsList>

      {/* Right Panel - Sub Exams */}
      <div className="grow rounded-lg border border-gray-600 bg-opacity-20 backdrop-blur-lg p-6 shadow-lg">
        {Object.entries(examData).map(([category, subExams]) => (
          <TabsContent key={category} value={category}>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {subExams.map((exam, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-3 border border-gray-500 rounded-lg bg-gray-900 shadow-md text-gray-200 text-center hover:shadow-lg hover:bg-blue-600 transition-all duration-300 cursor-pointer"
                >
                  {exam}
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}

export default VerticalTabs;
