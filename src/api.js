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

async function recData()
{
  let data;
  await fetch('https://api-setup-js.netlify.app./.netlify/functions/api')
    .then(res => {
      data = res
    })

  return data.json()
}

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
// npm install express netlify-lambda serverless-http 
// http://localhost:9000/.netlify/functions/api
