const express = require("express");
const Project = require("../Schema/project");
const router = express.Router();

router.get("/getallprojects", async (req, res) => {
  const projects = await Project.find();
  return res.json(projects);
});

module.exports = router;
