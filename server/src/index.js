// import express from "express"

// const app = express();
// app.get('/', (req, res) => {
//   const headers = req.headers;
//   res.status(200).send(headers)
// });

// app.listen(process.env.SERVER_PORT, () => {
//       console.log(`express listening on port ${process.env.SERVER_PORT}`)
// });
import express from "express"
import mysql from "mysql2"

const app = express();



const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || "db",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "password",
  database: process.env.MYSQL_DATABASE || "test",
});

app.get("/", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  connection.query("SELECT * FROM Users", (err, rows) => {
    if (err) {
      res.json({
        success: false,
        err,
      });
    } else {
      res.json({
        success: true,
        rows,
      });
    }
  });
});
app.listen(8888, () => console.log('Server is up and running'));

