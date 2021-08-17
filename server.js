'user strict'

const express = require('express');
const app = express();
const stamper = require('./middleware/stamper.js');
const notFound = require('./handlers/404.js');

app.use(express.json())

app.get('/data', stamper, (req, res) => {
  let output = {
    10: "even",
    5: "odd",
    timestamp: req.timestamp
  }
  res.status(200).json(output);
})

function start(port) {
  app.listen(port, () => {
    console.log(`server up on ${port}`)
  })
}

app.use('*', notFound)

module.exports = {
  app: app,
  start: start
}