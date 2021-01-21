const db = require('../../db')

const forgotPassword = (req,res) => {
    const { username, password } = req.body;
    db.query('update user set ? where username = ?',[{password: password}, username], (err, result) => {
        if(err){
            res.status(200).json({success: false, payload: err})
        }
        else{
            res.status(200).json({success: true, payload: result})
        }
    } )
}

module.exports = forgotPassword;