const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "rinahafz",
  password: "liquidluck10",
  database: "todo_app"
});

connection.query("SELECT * FROM `users`", function(err, results, fields) {
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});

connection.query("SELECT * FROM `todos`", function(err, results, fields) {
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});
