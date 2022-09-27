const mysql = require("mysql2")

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2022London1201./',
    database: 'employees_db'
}

);

module.exports = database