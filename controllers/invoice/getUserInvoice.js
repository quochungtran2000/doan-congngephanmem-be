const db = require('../../db')

const getUserInvoice = (req,res) => {
    const {username = -1} = req.query;
    const query = `select a.id , sum(b.quantity * c.salePrice) as total from invoice a, invoicedetail b, product c where a.username = ? and a.id = b.invoiceID and c.id = b.productID group by a.id`
    db.query(query,[username], (err,result) => {
        if(!err){
            res.status(200).json(result)
        }
        else{
            res.status(400).json(err)
        }
    })
}

module.exports = getUserInvoice