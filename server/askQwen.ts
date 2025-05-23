// askQwen.ts
import OpenAI from "openai";
import fs from "fs";

const qianwen = JSON.parse(fs.readFileSync("qianwen.json", "utf-8"));
const openai = new OpenAI({
  apiKey: qianwen.id,
  baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1",
});

export const completionStream = async (message: string, onData: (data: string) => void) => {
  const stream = await openai.chat.completions.create({
    model: "qwen-plus",
    stream: true,
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: message },
    ],
  });

  for await (const chunk of stream) {
    const content = chunk.choices?.[0]?.delta?.content;
    if (content) {
      onData(content);
    }
  }
};
