const db = require('../../db')
const jwt = require('jsonwebtoken')

const login = (req,res) => {
    const {username, password} = req.body;
    db.query('select a.username, a.password, b.isAdmin from user a, userdetail b where a.username = ? and a.username = b.username', [username],(err, result, feilds ) => {
        // select * from user a, userdetail b where a.username = b.username
        if(err){
            return res.status(200).json({success: false, payload: "wrong username or password"})
        }else{
            if(result.length !== 0){
                if(password === result[[0]]?.password) {
                    const data = {username: result[0].username, isAdmin : result[0].isAdmin}
                    // console.log(data);
                    var token = jwt.sign(data, 'shhhhh');
                    // console.log(token)
                    return res.status(200).json({success: true, payload: data, token: token})
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
