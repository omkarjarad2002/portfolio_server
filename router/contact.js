const express = require("express");
const router = express.Router();
const Contact = require("../Schema/contact.js");
const Project = require("../Schema/project.js");

router.post("/contact", async (req, res) => {
  const { name, email, phone, msg } = req.body.formData;

  if (!name || !email || !phone || !msg) {
    return res.status(422).json({ message: "Unexpected error occured !!" });
  }

  if (phone.length != 10) {
    return res.status(422).json({ message: "Unexpected error occured !!" });
  }

  try {
    const userExist = await Contact.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ message: "User already exist !!" });
    } else {
      const user = new Contact({ name, email, phone, msg });

      await user.save();
      return res
        .status(201)
        .json({ message: "message received successfully!!" });
    }
  } catch (error) {
    return res.status(422).json({ message: "Error" });
  }
});

module.exports = router;
