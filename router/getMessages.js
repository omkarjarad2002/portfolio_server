const Contact = require("../Schema/contact");
const express = require("express");
const router = express.Router();

router.get("/getallmessages", async (req, res) => {
  const data = await Contact.find();
  return res.status(201).json({ message: data });
});

module.exports = router;
