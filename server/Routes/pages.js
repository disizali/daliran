const express = require("express");
const router = express.Router();
const { sequelize: db } = require("../../models");
const { Page } = db.models;

router.get("/", async (req, res) => {
  res.send(await Page.findAll());
});

router.post("/", async (req, res) => {
  const { title, link, order } = req.body;
  if (!title || !link || !order) return res.status(400).send("wrong data");
  return res.send(await Navbar.create(req.body));
});

router.delete("/", async (req, res) => {
  const { targetId } = req.body;
  if (!targetId || !(await Navbar.findByPk(targetId)))
    return res.send("no navbar");
  await Navbar.destroy({ where: { id: targetId } });
  res.status(200).send("deleted");
});

router.put("/", async (req, res) => {
  const { targetId, title, link, order } = req.body;
  if (
    !targetId ||
    !title ||
    !link ||
    !order ||
    !(await Navbar.findByPk(targetId))
  )
    return res.send("no navbar");
  await Navbar.update({ title, link, order }, { where: { id: targetId } });
  res.status(200).send("updated");
});

module.exports = router;