// import fauna from "faunadb";
// var client = new faunadb.Client({ secret: "246280646936232468" });
// var createP = client.query(
//   q.Create(q.Collection("test"), { data: { testField: "testValue" } })
// );
// console.log(createP);
// import news from "../../../tmp/news.json";
// import fs from "fs";

// export default async (req, res) => {
//   const {
//     body: { title, body, image, targetId }
//   } = req;
//   if (req.method == "POST") {
//     if (!title || !body || !image) return res.send("wrong data");
//     news.push({ id: news.length + 1, title, body, image });
//     fs.writeFileSync("./tmp/news.json", JSON.stringify(news), "UTF-8");
//     return res.send("done");
//   } else if (req.method == "DELETE") {
//     if (!targetId || !news.some(item => item.id == targetId))
//       return res.send("no news");
//     fs.writeFileSync(
//       "./tmp/news.json",
//       JSON.stringify(news.filter(item => item.id != targetId)),
//       "UTF-8"
//     );
//     return res.send("done");
//   }
//   const data = news.sort((a, b) => {
//     return b.id - a.id;
//   });
//   return res.send(data);
// };
