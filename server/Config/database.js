const mysql = require("mysql2")
const dotenv = require('dotenv')

dotenv.config();

const pool = mysql.createPool({
    host:process.env.database_host,
    user:process.env.database_user,
    password:process.env.database_password,
    database:process.env.database_dbname,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})
module.exports= pool.promise()