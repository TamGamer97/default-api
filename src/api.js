const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

// imports
require('encoding')
const fetch = require('cross-fetch');
// routes

router.get("/", async (req, res) => {

  data = await recData()

  res.json({
    data: data
  });

});

// functions

async function recData(abc)
{
    let data;
    await fetch('https://api-setup-js.netlify.app./.netlify/functions/api')
      .then(response => response.json())
      .then(res => {
        data = res
      })

    return data
}

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);

// startup
// hello from oneline vs code - codespaces

// npm install express netlify-lambda serverless-http encoding
// http://localhost:9000/.netlify/functions/api - /routename
// editing in vscode pc - vscode remote extention