const express = require("express");
const router = express.Router();
const { sequelize: db } = require("../../models");
const { Slide } = db.models;

router.get("/", async (req, res) => {
  res.send(await Slide.findAll({}));
});

router.post("/", async (req, res) => {
  const { title, image, link, description } = req.body;
  if (!title || !image || !link || !description) return res.send("wrong data");
  return res.send(await Slide.create  (req.body));
});

router.delete("/", async (req, res) => {
  const { id } = req.body;
  await Slide.destroy({ where: { id } })
  res.status(200).send("deleted");
});

router.put("/", async (req, res) => {
  const { id, image, title, description, link } = req.body;
  if (!id || !image || !title || !description || !link)
    return res.send("no slide");
  await Setting.update({ image, title, description, link }, { where: { id } });
  res.status(200).send("updated");
});

module.exports = router;
