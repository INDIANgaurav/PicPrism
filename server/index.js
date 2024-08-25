const express = require("express");

const app = express();
const dotenv = require("dotenv");
// const { readdirSync } = require("fs");
const authRoute = require("./routes/authRoutes")
const { connectDb } = require("./connection");
const cors = require("cors")

const PORT = process.env.PORT || 5000;
dotenv.config()
connectDb();
app.use(express.json())
app.use(cors({
  origin:"http://localhost:5173" ,
  credentials: true,
 
}));
app.get("/", (req, res) => {
  res.send({ message: "server is working" });
});

// readdirSync("./routes").map((route) =>
  app.use("/api", authRoute)
// );

app.listen(PORT, () => {
  console.log("server listening on port", PORT);
});
