const db = require('../../db')

const updateUser = (req, res) => {
    const { username, email, isAdmin = false, fullname } = req.body;

    const data = {
        email,
        isAdmin,
        fullname
    }

    db.query('update userdetail set ? where username = ?', [data, username], (err, result) => {
        if(err){
            res.status(200).json({ success: false, payload: err})
        }
        else{
            res.status(200).json({ success: true, payload: result})
        }
    })
}

module.exports = updateUser;
