const db = require('../../db')

const checkUser = (req,res,next) => {
    db.query(`select * from user where username = ?`, [req.body.username], (err,result) => {
        if(err){
            res.status(200).json({success: false, payload: err})
        }else{
            if(result[[0]]?.username){
                next()
            }else{
                res.status(200).json({success: false, payload: "User not found"})
            }
        }
    } )
}

module.exports = checkUser