import express from "express";
// import dotenv from "dotenv";
// dotenv.config()
import "dotenv/config";
import connectDB from "./dataBase/connectDb.js";

import { app } from "./app.js";

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is started on ${port}`);
    });
  })
  .catch((err) => {
    console.log(`db connection error ${err}`);
  });
