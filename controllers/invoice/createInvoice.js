const db = require('../../db')
const { getRandomNum, getDatetime } = require('./utils/common')

const createInvoice = ( req, res) => {
    const {username,cart } = req.body;
    const { year, month, date, mili } = getDatetime();
    
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
        }else{
            res.status(200).json({success: true, payload: result});
        }
    })
}

module.exports = createInvoice