const express = require("express");
const router = express.Router();
const Project = require("../Schema/project.js");

router.post("/addnewproject", async (req, res) => {
  const { name, description, file } = req.body;

  if (!name || !description || !file) {
    return res.status(400).json("Error");
  }

  try {
    const project = new Project({ name, description, file });

    await project.save();

    return res.status(201).json({ message: "Project added successfully!" });
  } catch (error) {
    return res.status(422).json({ message: error });
  }
});

module.exports = router;
