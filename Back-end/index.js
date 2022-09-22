const path = require("path");
const PORT = process.env.PORT||3000;
const db = require('./database.js');
const express = require('express');
const app = express();
const router = express.Router();
var cors = require('cors');
const setRouts = require('./restAPI.js')

app.use(cors());

setRouts(app,db);

  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
  })