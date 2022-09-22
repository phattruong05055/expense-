const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.SERVER_PORT || 3001;
app.use(cors("*"));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Welcome to expense app");
});
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
