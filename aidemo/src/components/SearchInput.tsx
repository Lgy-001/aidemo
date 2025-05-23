import { useState } from "react";
import { sendMessageStream } from "../api";
import { useMessageStore } from "../store";

const SearchInput = () => {
  const [userMessage, setUserMessage] = useState("");
  const addMessage = useMessageStore((state) => state.addMessage);
  const appendLastAiMessage = useMessageStore((state) => state.appendLastAiMessage);

  const handleSend = async () => {
    if (!userMessage.trim()) return;

    // 添加用户消息
    addMessage({ role: "user", message: userMessage });

    // 清空输入框
    setUserMessage("");

    // 添加一个空的 ai 消息占位
    addMessage({ role: "ai", message: "" });

    // 处理流式 AI 回复
    await sendMessageStream(userMessage, (chunk) => {
      appendLastAiMessage(chunk);
    });
  };

  return (
    <div className="mx-auto flex items-center bg-white rounded-[24px] shadow px-4 py-2 border border-gray-200">
      <input
        type="text"
        placeholder="询问任何问题"
        className="flex-1 bg-transparent outline-none border-none text-base px-2"
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        onClick={handleSend}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition"
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-500">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <line
            x1="16.5"
            y1="16.5"
            x2="21"
            y2="21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchInput;
