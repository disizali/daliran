const express = require("express");
const app = express();
const routes = require("./Routes");
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/", routes);   
app.get("/", (req, res) => {
  res.send("done");
});

app.listen(3001, () => {
  console.log(`server is running on port 3001`);
});
