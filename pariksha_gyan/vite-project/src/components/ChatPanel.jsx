import React, { useState } from "react";
import useChatStore from "@/store/chatStore";

function ChatPanel() {
  const { chats, addChat } = useChatStore();
  const [query, setQuery] = useState("");

  const sendMessage = () => {
    if (!query.trim()) return;
    addChat(query, "This is a placeholder response.");
    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <main className="flex-1 p-4 flex flex-col">
      <div className="flex-1 mt-4 overflow-y-auto p-4 border rounded">
        {chats.map((chat, index) => (
          <div key={index} className="mb-2">
            <p className="font-bold">You: {chat.message}</p>
            <p>Bot: {chat.response}</p>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          onKeyDown={handleKeyDown}
          placeholder="Ask NCERT chatbot..." 
          className="flex-1 p-2 border rounded" 
        />
        <button 
          onClick={sendMessage} 
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Send
        </button>
      </div>
    </main>
  );
}

export default ChatPanel;
