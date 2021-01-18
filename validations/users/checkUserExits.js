const checkUserExits = (req,res,next) => {
    console.log('validate')
    db.query(`select * from user where username = ?`, [req.body.username], (err,result) => {
        if(err){
            return res.status(400).json(err)
        }
        if(result.length){
            console.log(result)
            return res.status(400).json({success: false, payload: "User is exits"})
        }
        next()
    } )
}

module.exports = checkUserExits