const dotenv = require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { routes } = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.SERVER_PORT || 3001;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});