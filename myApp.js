let express = require('express');
let app = express();
require('dotenv').config()

console.log("Hello World");


const absolutePath =__dirname + "/views/index.html"


app.use("/public", express.static(__dirname + "/public"));




app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });

  
  if (process.env.MESSAGE_STYLE === "allCaps") {
    responseObject.message = responseObject.message.toUpperCase();
  }

  // Send the modified response object
  res.json(responseObject);
});

app.get("/", function(req, res) {
     res.sendFile(absolutePath);
   });


// app.get("/", function(req, res) {
//      res.send("Hello Express");
//    });




  






















 module.exports = app;
