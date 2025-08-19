import express, { json }  from "express";
// import { connectDB } from "./config/db";
import dotenv from "dotenv"


dotenv.config();

// connectDB();

const app = express();
const PORT = process.env.PORT || 5001;


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})




