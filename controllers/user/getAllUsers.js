const db = require('../../db')

const getAllUsers = (req,res) => {
    db.query("select * from qlbd.user", (err, rows, feilds) => {
        console.log('row',rows);
        console.log('err',err);
        console.log('feilds',feilds);
        if(!err) {
            console.log(rows) ,
            res.status(200).json(rows)
        } else{
            console.log(err)
        }
    })
}

module.exports = getAllUsers