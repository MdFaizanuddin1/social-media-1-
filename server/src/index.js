import express from "express";
// import dotenv from "dotenv";
// dotenv.config()
import "dotenv/config";

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`server is started on ${port}`);
});
