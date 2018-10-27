require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const sessionRoutes = require("./routes/SessionRoutes");
const authenticationRoutes = require("./routes/AuthenticationRoutes");
const postRoutes = require("./modelRoutes/postRoutes");

mongoose.set("debug", true);
mongoose.connect("mongodb://walkerlyle:dietcoke1@ds125673.mlab.com:25673/final-project");
mongoose.Promise = global.Promise;

const app = express();

app.get("/publicinformation", function (req, res) {
  res.send("Anyone can see this");
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(userRoutes);
app.use(sessionRoutes);
app.use(authenticationRoutes);
app.use(postRoutes);

app.get("/canigetthis", function (req, res) {
  res.send("You got the data. You are authenticated");
});
app.get("/secret", function (req, res) {
  res.send(`The current user is ${req.user.username}`);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
