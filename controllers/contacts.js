const { response, request } = require('express');
const Contact = require('../models/contacts');

const createContact = async (req, res = response) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint create a contact'

  const body = req.body;
  const user = new Contact(body);
  await user.save();

  res.status(201).json(user);

  /* #swagger.parameters['Contact'] = {
      in: 'body',
      description: 'Contact Information',
      required: true,
      schema: { 
        $firstName:"Andres", 
        $lastName:"Moffi", 
        $email:"andres@test.com", 
        $favoriteColor:"Brown", 
        $birthday:"06/19/2000"
      }
    } 
  */
};

const findAll = async (_, res = response) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint get all contacts'

  try {
    const users = await Contact.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error
    });
  }
};

const findOne = async (req = request, res = response) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint get a contact'

  try {
    const user = await Contact.findById(req.params.id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error
    });
  }
};

const deleteContact = async (req = request, res = response) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint delete a contact'

  try {
    const user = await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error
    });
  }
};

const updateContact = async (req = request, res = response) => {
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Endpoint update a contact'

  try {
    const { id } = req.params;
    const data = req.body;
    const user = await Contact.findByIdAndUpdate(id, data);
    res.status(204).json({
      user
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: error
    });
  }

  /* #swagger.parameters['Contact'] = {
      in: 'body',
      description: 'Contact Information',
      required: false,
      schema: { 
        $firstName:"Andres", 
        $lastName:"Moffi", 
        $email:"andres@test.com", 
        $favoriteColor:"Brown", 
        $birthday:"06/19/2000"
      }
    } 
  */
};

module.exports = {
  findAll,
  findOne,
  createContact,
  deleteContact,
  updateContact
};
