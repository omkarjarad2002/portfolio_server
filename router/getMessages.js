const Contact = require("../Schema/contact");
const express = require("express");
const router = express.Router();

router.get("/getallmessages", async (req, res) => {
  const data = await Contact.find();
  return res.status(201).json({ message: data });
});

router.delete("/deleteMSG/:id", async (req, res) => {
  console.log(req.params.id);
  const _id = req.params.id;
  await Contact.findByIdAndRemove(_id);
});

module.exports = router;
