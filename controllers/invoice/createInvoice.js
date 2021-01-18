const db = require('../../db')

const createInvoice = (req,res) => {
    db.beginTransaction(err => {
        if(err){
            db.rollback(() => {
                res.status(400).json(err)
            }) 
        }
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
                db.rollback(() => {
                    return res.status(400).json(err)
                }) 
            }
            else{
                const invoiceDetail = cart.map(item => [invoiceID = id, productID = item.id, quantity = item.quantity]) 
        
                db.query(`insert into invoicedetail (invoiceID, productID, quantity) values ?`,[invoiceDetail], (err,result) => {
                    if(err){
                        db.rollback(() => {
                            res.status(400).json(err)
                        }) 
                    }
                    res.status(200).json(result);
                })
            }
        })
        
    })
}

module.exports = createInvoice