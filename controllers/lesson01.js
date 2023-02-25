const { response, request } = require("express");

const find = async (req = request, res = response) => {
  res.send('Alirio Mieres');
};

module.exports = {
  find,
};
