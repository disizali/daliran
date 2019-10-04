import news from "../../../static/data/news.json";

export default async (req, res) => {
  const {
    body: { count }
  } = req;
  const data = news.slice(0, count);
  res.send(data);
};
