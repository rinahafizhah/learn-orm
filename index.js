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

connection.execute(
  'SELECT name, text FROM `users`,`todos` WHERE `name` = "Rina" AND `text` = "Learn SQL syntax"',
  ["Rick C-137", 53],
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available

    // If you execute same statement again, it will be picked form a LRU cache
    // which will save query preparation time and give better performance
  }
);
