const createUser = (req,res) => {
    const {username, password, isAdmin = false, role = false} = req.body;
    console.log(username, password);
    db.query(`INSERT INTO USER SET ?`, {username, password},(err,rows,feilds) => {
        if(!err){
            console.log(rows)
            return res.status(200).json({'Success': true});
        }else{
            return res.status(400).json(err.code)
        }
    } )
}

module.exports = createUser;