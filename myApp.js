const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser

const app = express();
require('dotenv').config();

console.log("Hello World");

const absolutePath = __dirname + "/views/index.html";

// Use body-parser middleware for URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Use body-parser middleware for JSON data
app.use(bodyParser.json());

app.use("/public", express.static(__dirname + "/public"));

app.use(function middleware(req, res, next) {
  var logString = req.method + " " + req.path + " - " + req.ip;
  console.log(logString);
  next();
});

const customMiddleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.get("/now", customMiddleware, (req, res) => {
  res.send({
    time: req.time
  });
});

app.get('/json', customMiddleware, (req, res) => {
  let msgStyle = process.env.MESSAGE_STYLE;
  let msg;

  if (msgStyle === "uppercase") {
    msg = "Hello json".toUpperCase();
  } else {
    msg = "Hello json";
  }

  res.json({ "message": msg, "time": req.time });
});

app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});

app.get("/name", function (req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
});

app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

module.exports = app;
