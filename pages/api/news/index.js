// import { sequelize as db } from "../../../models";
import news from "../../../static/data/news.json";

export default async (req, res) => {
  const {
    body: { count }
  } = req;
  // const { News } = db.models;
  // const data = await News.findAll({ limit: count });
  const data = news.slice(0, count);
  res.send(data);
};
