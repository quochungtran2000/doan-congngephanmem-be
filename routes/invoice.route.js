const { Router } = require('express');

const router = Router();

const { getUserInvoice, getUserInvoiceDetail, createInvoice, deleteInvoice} = require('../controllers/invoice')

router.route('/add').post(createInvoice)

router.route('/').post(getUserInvoice)

router.route('/:id').post(getUserInvoiceDetail)

//createInvoice
router.route('/delete').post(deleteInvoice)

module.exports = router;