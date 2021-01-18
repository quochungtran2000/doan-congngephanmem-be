const db = require('../../db')
const { getPrice } = require('./utils/common')

const createProduct = (req,res) => {
    const { id, name, standardPrice, salePrice, price} = req.body
    const product = {
        id, name, standardPrice: getPrice(standardPrice), salePrice: getPrice(salePrice) ,price:getPrice(price)
    }
    db.query('INSERT INTO PRODUCT SET ?', product, (err, rows, fields) => {
        if(!err) {
            res.status(200).json(rows)
        }else{
            res.status(400).json(err)
        }
    })
}

module.exports = createProduct