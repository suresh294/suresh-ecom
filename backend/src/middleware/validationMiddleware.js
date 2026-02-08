const validateCartInput = (req, res, next) => {
    const { productId, quantity, price, name } = req.body;

    if (!productId) {
        return res.status(400).json({ message: 'Product ID is required' });
    }

    if (req.method === 'POST') {
        if (typeof quantity !== 'number') {
            return res.status(400).json({ message: 'Quantity must be a number' });
        }

        // For new items, we need name and price
        // (In a real app, we'd fetch this from the DB using productId, 
        // but for a simplified in-memory version, we accept it from body)
        if (!name || !price) {
            return res.status(400).json({ message: 'Product name and price are required' });
        }
    }

    next();
};

module.exports = { validateCartInput };
