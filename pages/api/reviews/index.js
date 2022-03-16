// const mysql = require("mysql2/promise");

// export default async function (req, res) {
//   const conn = await mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     port: process.env.DB_PORT,
//   });
//   if (req.method === "GET") {
//     const alin = await conn.query("SELECT * FROM horus");
//     const alin2 = JSON.stringify(alin[0]);
//     res.json(alin2);
//   }
//   if (req.method === "POST") {
//     const picture = req.body.picture;
//     const name = req.body.name;
//     const review = req.body.review;
//     const rating = req.body.rating;
//     const alin = await conn.query(
//       "INSERT INTO horus (picture, name, review, rating) VALUES (?,?,?,?)",
//       [picture, name, review, rating]
//     );
//     conn.end();
//     res.json({ message: "Posting is done." });
//   }
//   if (req.method === "DELETE") {
//     const id = req.body;
//     const alin = await conn.query("DELETE FROM horus WHERE id = ?", id);
//     conn.end();
//     res.json({ message: "Deleted entry" });
//   }
// }
