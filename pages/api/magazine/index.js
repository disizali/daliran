import magazine from "../../../static/data/magazine.json";
export default async (req, res) => {
  res.status(200).send(magazine);
};