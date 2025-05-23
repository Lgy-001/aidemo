import { create } from 'zustand';

interface Message {
  role: 'user' | 'ai';
  message: string;
}

interface MessageState {
  messages: Message[];
  addMessage: (msg: Message) => void;
  appendLastAiMessage: (chunk: string) => void;
  setMessage:(msg:Message[])=>void;
}

export const useMessageStore = create<MessageState>((set) => ({
  messages: [],
  addMessage: (msg) =>
    set((state) => ({ messages: [...state.messages, msg] })),
  appendLastAiMessage: (chunk) =>
    set((state) => {
      const last = state.messages[state.messages.length - 1];
      if (!last || last.role !== 'ai') return state;
      const updated = [
        ...state.messages.slice(0, -1),
        { ...last, message: last.message + chunk },
      ];
      return { messages: updated };
    }),
    setMessage:(msg)=>set(()=>({messages:msg}))
}));
