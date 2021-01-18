const db = require('../../db')
const { getPrice } = require('./utils/common')

const updateProduct = (req,res) => {
    const { id } = req.params;
    const {name, standardPrice, salePrice, price} = req.body
    const data = {
        name, 
        standardPrice: getPrice(standardPrice), 
        salePrice: getPrice(salePrice), 
        price: getPrice(price)
    }
    db.query('update product set ? where id = ? ', [data, id], (err,result) => {
            if(err){
                console.log(err)
                return res.status(400).json({success: false, payload: err})
            }
            return res.status(200).json(result)
        }
    )
}

module.exports = updateProduct