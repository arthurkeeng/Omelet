const express = require("express");
const multer = require("multer");
const router = express.Router();
const fs = require("fs");
router.route("/upload").post((req, res) => {
  const uploaded = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const splitted = originalname.split(".");

    const newPath = path + "." + `${splitted[splitted.length - 1]}`;
    fs.renameSync(path, newPath);
    uploaded.push(newPath);
  }
  res.json(uploaded);
});

module.exports = router;
