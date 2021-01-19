const db = require('../../db');

const deleteProduct = (req,res) => {
    const {id} = req.params;
    if(id){
        db.query(`delete from product where id = ? `, +id,(err, result) => {
            if(err){
                return res.status(200).json({success: false,payload: err})
            }
            return res.status(200).json({success: true, payload: result})
        })
    }else{
        return  res.status(200).json({success: false,payload: "id not found"})
    }
}

module.exports = deleteProduct
