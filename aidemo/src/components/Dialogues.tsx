import { useEffect, useState } from "react";
import { useMessageStore } from "../store";
import MessageBox from "../view/components/MessageBox";
import {useUpdateEffect} from 'ahooks'
const Dialogues = () => {
  const messages =  useMessageStore((state)=>state.messages)
  const setMessage=useMessageStore((state)=>state.setMessage)
    useEffect(()=>{
        setMessage(JSON.parse(localStorage.getItem('message')||'[]'))

    },[])
    useUpdateEffect(()=>{
        localStorage.setItem('message',JSON.stringify(messages))
      console.log('messages',messages);
      
    },[messages])
    return(
        <div className="h-auto min-w-[832px] px-[10px] py-[20px] flex flex-col ">
            {
                messages.map((items,index)=>{
                    return(
                        <MessageBox  message={items.message} role={items.role} key={index}></MessageBox>
                    )
                })
            }
         
        </div>
    )
}
export default Dialogues;