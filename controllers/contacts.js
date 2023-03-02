const { response, request } = require('express');
const Contact = require('../models/contacts');

const createContact = async (req, res = response) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint create a contact'

  const body = req.body;
  const user = new Contact(body);
  await user.save();

  res.json({
    user
  });
};

const findAll = async (_, res = response) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint get all contacts'

  const users = await Contact.find();
  res.status(201).json({
    users
  });
};

const findOne = async (req = request, res = response) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint get a contact'

  const user = await Contact.findById(req.params.id);
  res.json({
    user
  });
};

const deleteContact = async (req = request, res = response) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint delete a contact'

  const user = await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json({
    user
  });
};

const updateContact = async (req = request, res = response) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint update a contact'

  const { id } = req.params;
  const data = req.body;

  const user = await Contact.findByIdAndUpdate(id, data);

  res.status(204).json({
    user
  });
};

module.exports = {
  findAll,
  findOne,
  createContact,
  deleteContact,
  updateContact
};
