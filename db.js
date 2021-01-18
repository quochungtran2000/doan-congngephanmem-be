const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0918266810',
    database: 'qlbd',
    multipleStatements: true
})

db.connect((err) => {
    !err ? console.log('connected') : console.log(`connected failed!`, err)
})

module.exports = db