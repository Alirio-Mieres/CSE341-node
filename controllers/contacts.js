const { response, request } = require("express");
const Contact = require("../models/contacts");

const createContact = async (req, res = response) => {
  const body = req.body;
  const user = new Contact(body);
  await user.save();

  res.json({
    user,
  });
};

const findAll = async (req = request, res = response) => {
  const users = await Contact.find();
  res.json({
    users,
  });
};

const findOne = async (req = request, res = response) => {
  const user = await Contact.findById(req.params.id);
  res.json({
    user,
  });
};

module.exports = {
  findAll,
  findOne,
  createContact,
};
