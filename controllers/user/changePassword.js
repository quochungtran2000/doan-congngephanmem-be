const db = require('../../db')

const changePassword = (req, res) => {
    const { oldPassword, newPassword, username } = req.body;

    // db.query('select * from user where username = ?', [username], (err, result) => {
    //     if(err){
    //         res.status(200).json({success: false, payload: err})
    //     }
    //     else{
    //     }
    // })

    db.query(`update user set password = ? where username = ? `, [newPassword, username], (err, result) => {
        if(err) {
            res.status(200).json({success: false, payload: err})
        }
        else{
            res.status(200).json({success: true, payload: result})
        }
    })

}

module.exports = changePassword;