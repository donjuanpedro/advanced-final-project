
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const postRoutes = require("./modelRoutes/postRoutes");

const mongoose = require("mongoose");

mongoose.connect("mongodb://walkerlyle:dietcoke1@ds125673.mlab.com:25673/final-project");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(postRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
