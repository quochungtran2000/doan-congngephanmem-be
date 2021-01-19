const { Router } = require('express');
const router = Router();

const { getAllProduct, createProduct, updateProduct, deleteProduct,getProductDetail } = require('../controllers/product/index')

router.route('/').get(getAllProduct)

router.route('/:id').get(getProductDetail)

router.route('/add').post(createProduct)

router.route('/update/:id').post(updateProduct)

router.route('/delete/:id').post(deleteProduct)

module.exports = router;