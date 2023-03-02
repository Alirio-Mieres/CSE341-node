const { Schema, model } = require('mongoose');

const ContactSchema = Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  favoriteColor: {
    type: String
  },
  birthday: {
    type: String
  }
});

module.exports = model('Contact', ContactSchema);
