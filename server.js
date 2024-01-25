require("dotenv").config();

const http = require("http");
const route = require("./routes");
const bodyParser = require("body-parser");

const express = require("express");
const connectDB = require("./db/dbConnect");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use("/v1", route);

app.set("view engine" , "ejs");

app.get("/", (req,res)=>{
  res.render("./index.ejs");
})

app.get("/login", (req,res)=>{
  res.render("./login")
})
app.get("/signup", (req,res)=>{
  res.render("./signup")
})
//database connection
connectDB();

http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started successfully");
});
