const Contact = require("../../models/contacts");
const listContacts = async (req, res) => {
  const { _id } = req.user;
  try {
    const contacts = await Contact.find({ owner: _id }).populate(
      "owner",
      "_id name email subscription"
    );

    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

module.exports = listContacts;
