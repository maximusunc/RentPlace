const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

var Storage = multer.diskStorage({
  destination: function(req, file, callback) {
      callback(null, "./Images");
  },
  filename: function(req, file, callback) {
      callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});

var upload = multer({
  storage: Storage
}).single("uploadLease"); //Field name and max count


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);



// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/rentplace",
  {
    useMongoClient: true
  }
);

app.post("/api/lease", function(req, res) {
  upload(req, res, function(err) {
      if (err) {
          return res.end("Something went wrong!");
      }
      return res.end("File uploaded sucessfully!.");
  });
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
