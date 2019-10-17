const express = require("express");
const router = express.Router();
const { sequelize: db } = require("../../models");
const { Data } = db.models;

router.get("/", async (req, res) => {
  res.send(await Data.findAll({}));
});

router.put("/", async (req, res) => {
  const { targetId, body } = req.body;
  if (!targetId || !body || !(await Data.findByPk(targetId)))
    return res.send("no data");
  await Data.update({ body }, { where: { id: targetId } });
  res.status(200).send("updated");
});

module.exports = router;
