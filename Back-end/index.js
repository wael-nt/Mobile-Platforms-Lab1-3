const path = require("path");
const db = require('./database.js');
const express = require('express');
const app = express();
const router = express.Router();
var cors = require('cors');
const setRouts = require('./restAPI.js');
const Book = require("./BookModel");
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());

setRouts(app,db);

const PORT = process.env.PORT||3000;

  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
  })