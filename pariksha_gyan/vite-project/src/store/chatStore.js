import { create } from "zustand";

const useChatStore = create((set) => ({
  chats: [],
  addChat: (message, response) =>
    set((state) => ({ chats: [...state.chats, { message, response }] })),
  clearChats: () => set({ chats: [] }),
}));

export default useChatStore;
