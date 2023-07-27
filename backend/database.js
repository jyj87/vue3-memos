const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "jyj871102",
  connectionLimit: 5,
  database: "memo",
});
module.exports = {
  async run(query, params) {
    return new Promise((resolve) => {
      pool
        .getConnection()
        .then((conn) => {
          conn
            .query(query, params)
            .then((rows) => {
              resolve(rows);
              console.log(rows);
            })
            .then((res) => {
              console.log(res);
              conn.end();
            })
            .catch((err) => {
              console.log(err);
              conn.end();
            });
        })
        .catch((err) => {
          console.log(
            "===================== DB연결 실패 ===================== "
          );
          console.log(err);
        });
    });
  },
};
