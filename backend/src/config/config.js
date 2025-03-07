import dotenv from 'dotenv';
import path from 'path';

// Tell dotenv where to find the .env file in the parent folder


dotenv.config({ path: path.resolve(new URL(import.meta.url).pathname, '..', '..','..','..', '.env') });
// Access your environment variable
// console.log(process.env.GEMINI_API_KEY); // Replace YOUR_VARIABLE with your actual variable name


dotenv.config();
