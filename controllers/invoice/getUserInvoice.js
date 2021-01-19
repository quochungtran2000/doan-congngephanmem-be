const db = require('../../db')

const getUserInvoice = (req,res) => {
    const {username} = req.body;
    console.log(`user`, username)
    const query = `select a.id , sum(b.quantity * c.salePrice) as total, a.createAt from invoice a, invoicedetail b, product c where a.username = ? and a.id = b.invoiceID and c.id = b.productID group by a.id`
    db.query(query,[username], (err,result) => {
        if(!err){
            res.status(200).json({success: true, payload: result})
        }
        else{
            res.status(200).json({success: true, payload: err})
        }
    })
}

module.exports = getUserInvoice