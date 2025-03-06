import { useState } from 'react';
import { BOOKS } from '@/store/constants';
import useDarkMode from '@/store/darkModeStore';
import LeftPanel from '@/components/LeftPanel';
import ChatPanel from '@/components/ChatPanel';
import RightPanel from '@/components/RightPanel';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);
  const [selectedBook, setSelectedBook] = useState("6");

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen flex flex-col`}> 
      <header className="p-4 flex justify-between items-center border-b">
        <h1 className="text-xl font-bold">NCERT AI Chatbot</h1>
        <div className="flex items-center gap-4">
          <select 
            value={selectedBook} 
            onChange={(e) => setSelectedBook(e.target.value)}
            className="p-2 border rounded"
          >
            {Object.keys(BOOKS).map((key) => (
              <option key={key} value={key}>{BOOKS[key]}</option>
            ))}
          </select>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded hover:bg-gray-200"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>
      <div className="flex flex-1">
        {leftPanelOpen ? (
          <LeftPanel isOpen={leftPanelOpen} onClose={() => setLeftPanelOpen(false)} />
        ) : (
          <button 
            className="m-2 p-2 border rounded" 
            onClick={() => setLeftPanelOpen(true)}
          >
            &gt;
          </button>
        )}

        <ChatPanel />

        {rightPanelOpen ? (
          <RightPanel isOpen={rightPanelOpen} onClose={() => setRightPanelOpen(false)} />
        ) : (
          <button 
            className="m-2 p-2 border rounded" 
            onClick={() => setRightPanelOpen(true)}
          >
            &lt;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
