const db = require('../../db');

const getProductDetail = (req,res) => {
    const { id } = req.params;
    db.query(`select * from product where id = ?`, [id], (err, result) => {
        if(err){
            res.status(200).json({success: false, payload: err})
        }else{
            res.status(200).json({success: true, payload: result[0]})
        }
    })
}

module.exports = getProductDetail