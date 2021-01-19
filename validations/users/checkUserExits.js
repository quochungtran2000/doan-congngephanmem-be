const db = require('../../db')

const checkUserExits = (req,res,next) => {
    db.query(`select * from user where username = ?`, [req.body.username], (err,result) => {
        if(err){
            res.status(200).json({success: false, payload: err})
        }else{
            if(result[[0]]?.username){
                res.status(200).json({success: false, payload: "User is exits"})
            }else{
                next()
            }
        }
    } )
}

module.exports = checkUserExits