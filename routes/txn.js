const express = require('express');
const txnRouter = express.Router();
const txnControllers = require('../controllers/transaction');
const {protect} = require('../middlewares/authentication')
// const { errorWrapper } = require('../common/utility');


txnRouter.post('/payment-session/:walletCode', txnControllers.paymentSession)
txnRouter.post('/accept-payment/:transactionTraceId', txnControllers.acceptPayment)
txnRouter.post('/withdraw', protect, txnControllers.withdraw)
txnRouter.post('/transaction', protect, txnControllers.getTransaction)

module.exports = txnRouter;