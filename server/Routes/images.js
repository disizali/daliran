const express = require("express");
const router = express.Router();
const fs = require("fs");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./static/uploads/images/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
var upload = multer({ storage: storage });

router.get("/", (req, res) => {
  return res.send(fs.readdirSync("./static/uploads/images"));
});

router.post("/", upload.single("image"), (req, res) => {
  res.send(req.file ? req.file.filename : "not uploaded");
});

router.delete("/", (req, res) => {
  const { targetFileName } = req.body;
  res.send(fs.unlinkSync(`./static/uploads/images/${targetFileName}`));
});

module.exports = router;
