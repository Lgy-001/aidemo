import OpenAI from "openai";
import fs from "fs";
const qianwen= JSON.parse(fs.readFileSync('qianwen.json', 'utf-8'));
    console.log(qianwen);
    const openai = new OpenAI(
        {
            apiKey: qianwen.id,
            baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
        }
    );
  export  const completion = async (message: string)=>{
       const res= await openai.chat.completions.create({
        model: "qwen-plus", 
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: message }
        ],
    })
    console.log(res.choices[0].message.content);
    return res.choices[0].message.content;
    
}
    

