const { response } = require('express');

const find = async (_, res = response) => {
  res.send('Alirio Mieres');
};

module.exports = {
  find
};
