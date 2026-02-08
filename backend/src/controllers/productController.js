const products = require('../data/products.json');

/**
 * @desc    Get all products with filtering and sorting
 * @route   GET /api/products
 * @access  Public
 */
const getProducts = (req, res) => {
    let filteredProducts = [...products];

    const { category, minPrice, maxPrice, sort } = req.query;

    // Filtering by category
    if (category) {
        filteredProducts = filteredProducts.filter(
            (p) => p.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Filtering by price range
    if (minPrice) {
        filteredProducts = filteredProducts.filter(
            (p) => p.price >= parseFloat(minPrice)
        );
    }
    if (maxPrice) {
        filteredProducts = filteredProducts.filter(
            (p) => p.price <= parseFloat(maxPrice)
        );
    }

    // Sorting
    if (sort) {
        if (sort === 'price_asc') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sort === 'price_desc') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }
    }

    res.status(200).json({
        count: filteredProducts.length,
        products: filteredProducts,
    });
};

/**
 * @desc    Get single product by ID
 * @route   GET /api/products/:id
 * @access  Public
 */
const getProductById = (req, res) => {
    const product = products.find((p) => p.id === req.params.id);

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
};

module.exports = { getProducts, getProductById };
