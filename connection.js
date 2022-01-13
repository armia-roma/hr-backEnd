const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "hr"
})
connection.connect(err => {
    if(err) throw err
    console.log("success")
})
module.exports = connection;