let express = require('express');
let app = express();
var response = "Hello World".toUpperCase();

console.log("Hello World");


const absolutePath =__dirname + "/views/index.html"


app.use("/public", express.static(__dirname + "/public"));




app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });

  if (process.env.VAR_NAME === "allCaps") {
    response = "Hello World".toUpperCase();
  } else {
    response = "Hello World";
  }
});

app.get("/", function(req, res) {
     res.sendFile(absolutePath);
   });


// app.get("/", function(req, res) {
//      res.send("Hello Express");
//    });




  






















 module.exports = app;
