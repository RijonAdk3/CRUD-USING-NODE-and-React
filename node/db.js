import mysql, { createConnection } from "mysql2"

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rij@N098',
    database: 'crud'
});

db.connect((err)=>{
    if(err) console.log(err)
        else(console.log("Database connected"));
})

export default db;
