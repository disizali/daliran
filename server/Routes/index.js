const express = require("express");
const router = express.Router();

const navbarRouter = require("./navbar");

router.use("/navbar", navbarRouter);

module.exports = router;
