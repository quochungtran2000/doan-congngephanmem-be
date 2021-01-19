const db = require('../../db')

const login = (req,res) => {
    const {username, password} = req.body;
    db.query('select a.username, a.password, b.isAdmin from user a, userdetail b where a.username = ? and a.username = b.username', [username],(err, result, feilds ) => {
        // select * from user a, userdetail b where a.username = b.username
        if(err){
            return res.status(200).json({success: false, payload: "wrong username or password"})
        }else{
            if(result.length !== 0){
                if(password === result[[0]]?.password) {
                    return res.status(200).json({success: true, payload: result[0]})
                } else{
                    return res.status(200).json({success: false, payload: "wrong username or password"})
                } 
            }else{
                return res.status(200).json({success: false, payload: "wrong username or password"})
            }
        }
    }) 
}

module.exports = login
