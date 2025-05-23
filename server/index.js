"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const askQwen_1 = require("./askQwen");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/api", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const message = req.body.data;
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();
    try {
        yield (0, askQwen_1.completionStream)(message, (data) => {
            res.write(`data: ${data}\n\n`);
        });
        res.write("data: [DONE]\n\n");
        res.end();
    }
    catch (error) {
        console.error("Stream error:", error);
        res.write(`data: [ERROR]: ${JSON.stringify(error)}\n\n`);
        res.end();
    }
}));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
