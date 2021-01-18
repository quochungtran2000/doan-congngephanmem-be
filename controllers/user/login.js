const db = require('../../db')

const login = (req,res) => {
    const {username, password} = req.body;
    console.log(username, password)
    db.query('select username, password from user where username = ?', [username],(err, result, feilds ) => {
        if(err){
            return res.status(400).json({success: false, payload: "wrong username or password"})
        }
        if(password === result[[0]].password) {
            return res.status(400).json({success: true})
        } else{
            return res.status(400).json({success: false, payload: "wrong username or password"})
        } 
    }) 
}

module.exports = login
