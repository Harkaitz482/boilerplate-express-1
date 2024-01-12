let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World");


const absolutePath =__dirname + "/views/index.html"


app.use("/public", express.static(__dirname + "/public"));

app.use(function middleware(req, res, next) {
  // Do something
  // Call the next function in line:
  var logString = req.method + " " + req.path + " - " + req.ip;
  console.log(logString);

  next();
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

app.get("/", function(req, res) {
     res.sendFile(absolutePath);
   });


// app.get("/", function(req, res) {
//      res.send("Hello Express");
//    });




  






















 module.exports = app;
