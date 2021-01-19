const db = require('../../db')

const deleteInvoice = (req,res) => {
    const {id} = req.body
    db.query(`delete from invoice where id = ${id}`, (err, result) => {
        if(!err){
            res.status(200).json(result)
        }else{
            res.status(200).json(err)
        }
    })
}

module.exports = deleteInvoice