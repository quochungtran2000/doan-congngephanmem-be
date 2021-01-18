const db = require('../../db')

const deleteInvoice = (req,res) => {
    const {id} = req.body
    db.query(`delete from invoice where id = ${id}`, (err, result) => {
        if(!err){
            console.log(result)
            res.status(200).json(result)
        }else{
            console.log(err)
            res.status(200).json(err)
        }
    })
}

module.exports = deleteInvoice