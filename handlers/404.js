'use strict'

module.exports = (req, res) => {
  res.status(404).send({
    error: 404,
    message: 'route not found - please go to route /',
    route: req.path
  })
}