// index.ts
import express from "express";
import cors from "cors";
import { completionStream } from "./askQwen";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api", async (req, res) => {
  const message = req.body.data;

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  try {
    await completionStream(message, (data) => {
      res.write(`data: ${data}\n\n`);
    });

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    console.error("Stream error:", error);
    res.write(`data: [ERROR]: ${JSON.stringify(error)}\n\n`);
    res.end();
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
