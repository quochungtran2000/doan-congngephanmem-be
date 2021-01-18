const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mssql = require('mssql');
const app = express();

const sql = new mssql.ConnectionPool({
    user: `hung1`,
    password: 'hung1',
    server: 'DESKTOP-S6GSUVJ',
    database: 'SLBH',
    options:{
        trustedConnection: true,
        enableArithAbort: true,
    },
    port: 1433
})

sql.connect(err => console.log(err))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const PORT = process.env.PORT || 1708;

app.listen(PORT, () => console.log(`server listening on port: ${PORT}`) );