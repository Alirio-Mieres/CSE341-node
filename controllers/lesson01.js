const { response } = require('express');

const find = async (_, res = response) => {
  // #swagger.ignore = true
  res.send('Alirio Mieres');
};

module.exports = {
  find
};
