import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./Middleware/error.middleware.js";
import authRoute from "./routes/auth.route.js";
const app = express();

//cors
app.use(cors());

//json body
app.use(express.json());

//cookie-parser
app.use(cookieParser());

//Routes
app.use("/api/v1/auth", authRoute);

//Error middleware
app.use(notFound);
app.use(errorHandler);


export default app;
