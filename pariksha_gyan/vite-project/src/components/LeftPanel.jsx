import React from "react";
import useChatStore from "@/store/chatStore";

function LeftPanel({ isOpen, onClose }) {
  const { chats, clearChats } = useChatStore();

  if (!isOpen) return null;

  return (
    <aside className="w-1/4 p-4 border-r overflow-y-auto relative">
      <div className="flex justify-between items-center mb-4">
        <button 
          className="px-2 py-1 border rounded" 
          onClick={clearChats}
        >
          Clear
        </button>
        <h2 className="text-lg font-semibold">Chat History</h2>
        <button 
          className="px-2 py-1"
          onClick={onClose}
        >
          &lt;
        </button>
      </div>
      <div className="h-[70vh] overflow-y-auto">
        {chats.map((chat, index) => (
          <div key={index} className="mb-2 p-2 border rounded">
            <p className="font-bold">You: {chat.message}</p>
            <p>Bot: {chat.response}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default LeftPanel;
