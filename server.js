const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./APIRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("client/build"));
app.use(routes);

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://herokuhost/ds157325.mlab.com:57325/heroku_x9zm19gp",
  {
    useMongoClient: true
  }
);

app.listen(PORT, function() {
  console.log(`Listening on PORT ${PORT}`);
});
