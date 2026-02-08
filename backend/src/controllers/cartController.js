// In-memory cart storage (Reset on server restart)
let cartItems = [];

/**
 * @desc    Get cart items
 * @route   GET /api/cart
 * @access  Public
 */
const getCart = (req, res) => {
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    res.status(200).json({
        count: cartItems.length,
        totalAmount: parseFloat(totalAmount.toFixed(2)),
        items: cartItems,
    });
};

/**
 * @desc    Add or update item in cart
 * @route   POST /api/cart
 * @access  Public
 */
const addToCart = (req, res) => {
    const { productId, name, price, quantity, image } = req.body;

    const existingItemIndex = cartItems.findIndex((item) => item.productId === productId);

    if (existingItemIndex > -1) {
        // Update quantity if item exists
        cartItems[existingItemIndex].quantity += quantity;

        // Remove item if quantity becomes 0 or less
        if (cartItems[existingItemIndex].quantity <= 0) {
            cartItems.splice(existingItemIndex, 1);
            return res.status(200).json({ message: 'Item removed from cart', cart: cartItems });
        }
    } else {
        // Add new item if doesn't exist and quantity > 0
        if (quantity > 0) {
            cartItems.push({ productId, name, price, quantity, image });
        } else {
            return res.status(400).json({ message: 'Quantity must be greater than 0 for new items' });
        }
    }

    res.status(200).json({
        message: 'Cart updated successfully',
        cart: cartItems,
    });
};

/**
 * @desc    Clear cart
 * @route   DELETE /api/cart
 * @access  Public
 */
const clearCart = (req, res) => {
    cartItems = [];
    res.status(200).json({ message: 'Cart cleared' });
};

module.exports = { getCart, addToCart, clearCart };
