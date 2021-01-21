const db = require('../../db')

const getUserByUsername = (req, res) => {
    const { username } = req.body;
    db.query('select * from userdetail where username = ? ', [username], (err, result) => {
        if(err){
            res.status(200).json({success: false, payload: err})
        }else{
            res.status(200).json({success: true, payload: result[0]})
        }
    })
}

module.exports = getUserByUsername