import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useMessageStore } from "../store";
import MessageBox from "../view/components/MessageBox";
import { useUpdateEffect } from "ahooks";

const Dialogues = () => {
  const currentRef = useRef<HTMLDivElement>(null);

  const messages = useMessageStore((state) => state.messages);
  const setMessage = useMessageStore((state) => state.setMessage);
  useEffect(() => {
    setMessage(JSON.parse(localStorage.getItem("message") || "[]"));
    // setTimeout(()=>{
    //     if(currentRef.current){
    //     currentRef.current.scrollTo=currentRef.current.scrollHeight
    //     }
    // },0)
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentRef.current) {
        const el = currentRef.current as HTMLDivElement;
        el.scrollTop = el.scrollHeight;
        clearTimeout(timer);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [messages]);
  useUpdateEffect(() => {
    localStorage.setItem("message", JSON.stringify(messages));
    console.log("messages", messages);
  }, [messages]);
  return (
    <div
      className="h-auto max-h-[80vh] min-w-[832px] px-[10px] py-[20px] flex flex-col overflow-y-auto"
      ref={currentRef}
    >
      {messages.map((items, index) => {
        return (
          <MessageBox
            message={items.message}
            role={items.role}
            isLoading={messages.length - 1 === index}
            key={index}
          ></MessageBox>
        );
      })}
    </div>
  );
};
export default Dialogues;
