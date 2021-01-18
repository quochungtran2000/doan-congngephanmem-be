const db = require('../../db');

const getAllProduct = (req, res) => {
    db.query("SELECT * from product", (err, rows, fields) => {
        if(!err){
            return res.status(200).json(rows)
        }else{
            return res.status(400).json(err)
        }
    })
}

module.exports = getAllProduct