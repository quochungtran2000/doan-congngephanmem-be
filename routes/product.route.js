const { Router } = require('express');
const router = Router();

const { getAllProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product/index')

router.route('/').get(getAllProduct)

router.route('/add').post(createProduct)

router.route('/update/:id').post(updateProduct)

router.route('/delete/:id').post(deleteProduct)

module.exports = router;