let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World");


const absolutePath = __dirname + "/views/index.html"


app.use("/public", express.static(__dirname + "/public"));

app.use(function middleware(req, res, next) {
  // Do something
  // Call the next function in line:
  var logString = req.method + " " + req.path + " - " + req.ip;
  console.log(logString);

  next();
});

const middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.get("/now", middleware, (req, res) => {
  res.send({
    time: req.time
  });
});


app.get('/json', function (req, res) {
  let msgStyle = process.env.MESSAGE_STYLE;

  let msg

  if (msgStyle === "uppercase") {
    msg = "Hello json".toUpperCase();
  } else {
    msg = "Hello json";
  }

  res.json({ "message": msg });
});

app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});


// app.get("/", function(req, res) {
//      res.send("Hello Express");
//    });

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});


app.get("/name", function (req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`
  });
});



























module.exports = app;
