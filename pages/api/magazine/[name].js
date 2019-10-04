import { sequelize as db } from "../../../models";

export default async (req, res) => {
  const { Magazine } = db.models;
  const {
    query: { name }
  } = req;
  const magazines = await Magazine.findOne({ where: { name } });
  res.status(200).send(magazines);
};
