const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");

const mongoose = require("mongoose");

// database connected
mongoose
  .connect("mongodb://127.0.0.1:27017/mynodeblog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // console.log(appRoot)
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
const PORT = 2000;
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });
const routes = require("./server/route/route");
// app.use(express.json());

// app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log("Server stated at port" + PORT);
});
