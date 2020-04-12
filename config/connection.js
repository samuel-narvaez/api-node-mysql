const mysql = require('mysql2/promise');

const Connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'school',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });


module.exports = Connection;
