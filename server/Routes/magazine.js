const express = require("express");
const router = express.Router();
const { sequelize: db } = require("../../models");
const { Magazine } = db.models;

router.get("/", async (req, res) => {
  res.send(await Magazine.findAll({ order: [["id", "DESC"]] }));
});

router.get("/:name", async (req, res) => {
  res.send(await Magazine.findOne({ where: { enName: req.params.name } }));
});

router.post("/", async (req, res) => {
  const { faName, enName, body, image } = req.body;
  if (!faName || !enName || !body || !image)
    return res.status(400).send("wrong data");
  return res.send(await Magazine.create(req.body));
});

router.delete("/", async (req, res) => {
  const { targetId } = req.body;
  if (!targetId || !(await Magazine.findByPk(targetId)))
    return res.send("no magazine");
  await Magazine.destroy({ where: { id: targetId } });
  res.status(200).send("deleted");
});

router.put("/", async (req, res) => {
  const { targetId, title, body, image } = req.body;
  if (
    !targetId ||
    !faName ||
    !enName ||
    !image ||
    !Body ||
    !(await Magazine.findByPk(targetId))
  )
    return res.send("no magazine");
  await Magazine.update({ title, body, image }, { where: { id: targetId } });
  res.status(200).send("updated");
});

module.exports = router;
