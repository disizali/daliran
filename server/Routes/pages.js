const express = require("express");
const router = express.Router();
const { sequelize: db } = require("../../models");
const { Page } = db.models;

router.get("/", async (req, res) => {
  res.send(await Page.findAll());
});

router.get("/:name", async (req, res) => {
  res.send(await Page.findOne({ where: { name: req.params.name } }));
});


router.post("/", async (req, res) => {
  const { name, body } = req.body;
  if (!name || !body) return res.status(400).send("wrong data");
  return res.send(await Page.create(req.body));
});

router.delete("/", async (req, res) => {
  const { targetId } = req.body;
  if (!targetId || !(await Page.findByPk(targetId))) return res.send("no page");
  await Page.destroy({ where: { id: targetId } });
  res.status(200).send("deleted");
});

router.put("/", async (req, res) => {
  const { targetId, title, body, order } = req.body;
  if (
    !targetId ||
    !title ||
    !body ||
    !order ||
    !(await Page.findByPk(targetId))
  )
    return res.send("no page");
  await Page.update({ title, body, order }, { where: { id: targetId } });
  res.status(200).send("updated");
});

module.exports = router;
