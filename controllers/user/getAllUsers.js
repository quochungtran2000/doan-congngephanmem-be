const db = require('../../db')

const getAllUsers = (req,res) => {
    db.query("select * from user a, userdetail b where a.username = b.username", (err, rows, feilds) => {
        if(!err) {
            res.status(200).json({success: true, payload: rows})
        } else{
            res.status(200).json({success: false, payload: err})
        }
    })
}

module.exports = getAllUsers