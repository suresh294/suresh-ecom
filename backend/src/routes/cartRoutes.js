const express = require('express');
const router = express.Router();
const { getCart, addToCart, clearCart } = require('../controllers/cartController');
const { validateCartInput } = require('../middleware/validationMiddleware');

router.route('/')
    .get(getCart)
    .post(validateCartInput, addToCart)
    .delete(clearCart);

module.exports = router;
