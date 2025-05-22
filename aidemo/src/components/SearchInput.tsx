import { useState } from "react";
import { send } from "../api";

const SearchInput = () => {
    const [message, setMessage] = useState("");
  return (
    <div className="w-[calc(100vh-200px)]  mx-auto flex items-center bg-white rounded-[24px] shadow px-4 py-2 border border-gray-200">
      <input
        type="text"
        placeholder="询问任何问题"
        className="flex-1 bg-transparent outline-none border-none text-base px-2"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button 
      onClick={async()=>{
      const res=  await send(message);
      console.log(res);
      
      }}
      className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition">
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-500">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
};

export default SearchInput;
