const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "/uploads"));
  },

  filename: (req, file, cb) => {
    const uniqueFileName = `${Date.now()}-${crypto
      .randomBytes(6)
      .toString("hex")}${path.extname(file.originalname)}`;
    cb(null, uniqueFileName);
  },
});

const upload = multer({ storage });

router.post("/uploadfile", upload.single("file"), (req, res) => {
  return res.json({ file: req.file });
});

module.exports = router;
