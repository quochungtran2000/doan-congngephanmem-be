const db = require('../../db')

const createInvoice = ( req, res) => {
    const {username,cart } = req.body;
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let mili = now.getSeconds();
    const getRandomNum = () => {
        return Math.floor(Math.random() * 90 ) + 10
    }
    let id = `${year}${month}${date}${mili}${getRandomNum()}`
    const data = {id: id, username, createAt: new Date().toISOString().split('T')[0]}
    db.query(`insert into invoice set ?`,data, (err, result) => {
        if(err){
           res.status(200).json({success: false, payload: err})
        }
    })

    const invoiceDetail = cart.map(item => [invoiceID = id, productID = item.id, quantity = item.quantity]) 
    
    db.query(`insert into invoicedetail (invoiceID, productID, quantity) values ?`,[invoiceDetail], (err,result) => {
        if(err){
            res.status(200).json({success: false, payload: err})
        }
        res.status(200).json({success: true, payload: result});
    })
}

module.exports = createInvoice