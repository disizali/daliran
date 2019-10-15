import magazine from "../../../static/data/magazine.json";
import fs from "fs";

export default async (req, res) => {
  const {
    body: { faName, enName, image, targetId }
  } = req;
  if (req.method == "POST") {
    if (!faName || !enName || !image) return res.send("wrong data");
    magazine.push({ id: magazine.length + 1, faName, enName, image });
    fs.writeFileSync(
      "./static/data/magazine.json",
      JSON.stringify(magazine),
      "UTF-8"
    );
    return res.send("done");
  } else if (req.method == "DELETE") {
    if (!targetId || !magazine.some(item => item.id == targetId))
      return res.send("no magazine");
    fs.writeFileSync(
      "./static/data/magazine.json",
      JSON.stringify(magazine.filter(item => item.id != targetId)),
      "UTF-8"
    );
    return res.send("done");
  }
  const data = magazine.sort((a, b) => {
    return b.id - a.id;
  });
  return res.send(data);
};