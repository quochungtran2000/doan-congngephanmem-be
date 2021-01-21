const db = require('../../db')

const checkMatchPassword = (req,res,next) => {

    const { username, oldPassword } = req.body;

    db.query(`select * from user where username = ?`, [username], (err,result) => {
        if(err){
            res.status(200).json({success: false, payload: err})
        }else{
            if(result[[0]]?.username){
                if(result[[0]]?.password === oldPassword){
                    next()
                }else{
                    res.status(200).json({success: false, payload: "password not match"})
                }
            }else{
                res.status(200).json({success: false, payload: "User not found"})
            }
        }
    } )
}

module.exports = checkMatchPassword