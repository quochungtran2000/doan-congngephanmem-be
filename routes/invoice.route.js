const { Router } = require('express');

const { getUserInvoice, getUserInvoiceDetail, createInvoice, deleteInvoice} = require('../controllers/invoice')

const router = Router();

router.route('/').get(getUserInvoice)

router.route('/:id').get(getUserInvoiceDetail)

router.route('/add').post(createInvoice)

router.route('/delete').post(deleteInvoice)

module.exports = router;