const Contact = require("../../models/contacts");
const { createContactSchema } = require("../../validation/validation");

const addContact = async (req, res) => {
  const { error } = createContactSchema.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ error: { message: "missing required name field" } });
  }

  const { _id } = req.user;
  const result = await Contact.create({ ...req.body, owner: _id });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addContact;
