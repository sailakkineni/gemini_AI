
import "./src/config/config.js"
import { GoogleGenerativeAI } from "@google/generative-ai";


// console.log(process.env.GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "what is java";

const result = await model.generateContent(prompt);
console.log(result.response.text());
