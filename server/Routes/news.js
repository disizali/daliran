const express = require("express");
const router = express.Router();
const { sequelize: db } = require("../../models");
const { News } = db.models;

router.get("/", async (req, res) => {
  res.send(await News.findAll({ order: [["id", "DESC"]] }));
});

router.post("/", async (req, res) => {
  const { title, body, image } = req.body;
  if (!title || !body || !image) return res.status(400).send("wrong data");
  return res.send(await News.create(req.body));
});

router.delete("/", async (req, res) => {
  const { targetId } = req.body;
  if (!targetId || !(await News.findByPk(targetId))) return res.send("no news");
  await News.destroy({ where: { id: targetId } });
  res.status(200).send("deleted");
});

router.put("/", async (req, res) => {
  const { targetId, title, body, image } = req.body;
  if (
    !targetId ||
    !title ||
    !body ||
    !image ||
    !(await News.findByPk(targetId))
  )
    return res.send("no news");
  await News.update({ title, body, image }, { where: { id: targetId } });
  res.status(200).send("updated");
});

module.exports = router;
