
let express = require("express");
let bodyParser = require("body-parser");
const app = express();

let PostRoutes = require("./modelRoutes/PostRoutes");

let mongoose = require("mongoose");

mongoose.connect("mongodb://walkerlyle:dietcoke1@ds217350.mlab.com:17350/advanced-final-project");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use(PostRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
