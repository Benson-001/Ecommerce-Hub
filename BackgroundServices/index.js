import express from "express";
const app = express();
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";
import cron from "node-cron";

dotenv.config();

const PORT = process.env.PORT;

//SCHEDULE SERVICES

const services = () => {
  cron.schedule("* * * * * *", () => {
    
  });
};

services();

app.listen(PORT, () => {
  console.log(`Backgroundservice is running on port ${PORT}`);
  dbConnection();
});
