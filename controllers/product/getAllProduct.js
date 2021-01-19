const db = require('../../db');

const getAllProduct = (req, res) => {
    db.query("SELECT * from product", (err, rows, fields) => {
        if(!err){
            return res.status(200).json({success: true, payload: rows})
        }else{
            return res.status(200).json({success: false, payload: err})
        }
    })
}

module.exports = getAllProduct