const db = require("mysql2");

const connection = db.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "shop",
});

function connectDataBase() {
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      return;
    } else {
      console.log("Connected to MySQL");
    }
  });
}

module.exports = {connection, connectDataBase};