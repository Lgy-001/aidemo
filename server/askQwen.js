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
exports.completion = void 0;
const openai_1 = __importDefault(require("openai"));
const fs_1 = __importDefault(require("fs"));
const qianwen = JSON.parse(fs_1.default.readFileSync('qianwen.json', 'utf-8'));
console.log(qianwen);
const openai = new openai_1.default({
    apiKey: qianwen.id,
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
});
const completion = (message) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield openai.chat.completions.create({
        model: "qwen-plus",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: message }
        ],
    });
    console.log(res.choices[0].message.content);
    return res.choices[0].message.content;
});
exports.completion = completion;
