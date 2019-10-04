import { sequelize as db } from "../../../models";

export default async (req, res) => {
  const { About } = db.models;
  const {
    query: { id }
  } = req;
  const data = await About.findByPk(id);

  res.send(data);
};
