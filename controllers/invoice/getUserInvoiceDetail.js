const db = require('../../db');

const getUserInvoiceDetail = (req,res) => {
    const {username} = req.body;
    const { id } = req.params
    const query = `select c.id , b.quantity, c.name, c.price, c.salePrice, c.standardPrice  
        from invoice a ,invoicedetail b, product c 
        where a.username = ? and a.id = b.invoiceID and c.id = b.productId and a.id = ?`
    db.query(query,[username, id], (err,result) => {
        if(!err){
            res.status(200).json({success: true, payload: result})
        }
        else{
            res.status(200).json({success: false, payload: err})
        }
    } )
}

module.exports = getUserInvoiceDetail