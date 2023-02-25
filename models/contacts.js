const { Schema, model } = require("mongoose");

const ContactSchema = Schema({
  firstName: {
    type: String,
    required: [true, "First name is requiredo"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  favoriteColor: {
    type: String,
    required: [true, "Favorite coloer is required"],
  },
  birthday: {
    type: String,
  },
});

module.exports = model("Contact", ContactSchema);
