const express = require("express");

const app = express();
const dotenv = require("dotenv");
const { readdirSync } = require("fs");
const { connectDb } = require("./connection");

const PORT = process.env.PORT || 5000;
dotenv.config()
connectDb();

app.get("/", (req, res) => {
  res.send({ message: "server is working" });
});

readdirSync("./routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);

app.listen(PORT, () => {
  console.log("server listening on port", PORT);
});
