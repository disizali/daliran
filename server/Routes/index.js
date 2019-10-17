const express = require("express");
const router = express.Router();

const navbarRouter = require("./navbar");
const newsRouter = require("./news");
const imagesRouter = require("./images");
const magazineRouter = require("./magazine");
const pagesRouter = require("./pages");

router.use("/navbar", navbarRouter);
router.use("/news", newsRouter);
router.use("/images", imagesRouter);
router.use("/magazine", magazineRouter);
router.use("/pages", pagesRouter);

module.exports = router;
