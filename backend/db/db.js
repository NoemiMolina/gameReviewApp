const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'localhost',
    database: 'localhost'
});

db.connect((err) => {
  if (err) {
    console.log(err, 'erreur de connexion à la db');
  } else {
    console.log('connecté à la db');
  }
});

module.exports = db;