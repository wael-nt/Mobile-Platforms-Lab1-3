const path = require("path");
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

const PORT = process.env.PORT||8080;

  app.listen(PORT, () => {
    console.log(process.env)
    console.log(`Listening on http://localhost:${PORT}`)
  })

