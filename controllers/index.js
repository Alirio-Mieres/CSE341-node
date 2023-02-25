const { response } = require('express')

const getInfo = (req, res = response) => {
    res.send('Alirio Mieres')
  }

  module.exports = {
    getInfo,
  }