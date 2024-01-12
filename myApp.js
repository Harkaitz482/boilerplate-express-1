let express = require('express');
let app = express();

console.log("Hello World");


const absolutePath =__dirname + "/views/index.html"


app.use("/public", express.static(__dirname + "/public"));

if (process.env.VAR_NAME === "allCaps") {
  response = "Hello World".toUpperCase();
} else {
  response = "Hello World";
}


app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});

app.get("/", function(req, res) {
     res.sendFile(absolutePath);
   });


// app.get("/", function(req, res) {
//      res.send("Hello Express");
//    });




  






















 module.exports = app;
