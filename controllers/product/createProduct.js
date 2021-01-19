const db = require('../../db')
const { getPrice } = require('./utils/common')

const createProduct = (req,res) => {
    const { id, name, standardPrice, salePrice, price} = req.body
    const product = {
        id, name, standardPrice: getPrice(standardPrice), salePrice: getPrice(salePrice) ,price:getPrice(price)
    }
    db.query('INSERT INTO PRODUCT SET ?', product, (err, result) => {
        if(!err) {
            res.status(200).json({success: true, payload: result})
        }else{
            res.status(200).json({success: false, payload: err})
        }
    })
}

module.exports = createProduct