const db =require('../../db')

const createUser = (req,res) => {
    const {username, password, isAdmin = 0, phone, email, fullname} = req.body;
    console.log(req.body)
    db.query(`INSERT INTO USER SET ?`, {username, password, phone},(err1,rows,feilds) => {
        if(err1){
            res.status(200).json({success: false, payload: err1});
        }else{
            console.log(`not err`,rows)
        }
    })
    db.query(`insert into userdetail set ? `, {username, email, isAdmin, fullname}, (err2, result) => {
        if(err2){
            res.status(200).json({success: false, payload: err2});
        }else{
            res.status(200).json({success: true, payload: result});
        }
    })
}


module.exports = createUser;