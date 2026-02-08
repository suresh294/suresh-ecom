import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { productAPI } from '../services/api';
import { useCart } from '../context/CartContext';
import { Star, ShoppingCart, ArrowLeft, Plus, Minus } from 'lucide-react';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart, isInCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            setLoading(true);
            const data = await productAPI.getById(id);
            setTimeout(() => {
                setProduct(data);
                setLoading(false);
            }, 500);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    const updateQuantity = (val) => {
        if (quantity + val >= 1) {
            setQuantity(prev => prev + val);
        }
    };

    const handleAddToCart = async () => {
        if (isInCart(product.id)) {
            navigate('/cart');
        } else {
            await addToCart(product, quantity);
        }
    };

    if (loading) return (
        <div className="details-loading">
            <div className="skeleton-details pulse"></div>
        </div>
    );

    if (error || !product) return (
        <div className="error-container">
            <h2>Product not found</h2>
            <Link to="/" className="retry-btn">Back to Home</Link>
        </div>
    );

    const discountedPrice = product.price - (product.price * product.discount / 100);

    return (
        <div className="product-details-page">
            <Link to="/" className="back-link">
                <ArrowLeft size={20} /> Back to Products
            </Link>

            <div className="details-container">
                <div className="details-image-section">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="details-info-section">
                    <nav className="breadcrumb">
                        Home {' > '} {product.category} {' > '} {product.name}
                    </nav>

                    <h1 className="details-title">{product.name}</h1>

                    <div className="details-rating">
                        <span className="rating-badge">
                            {product.rating} <Star size={14} fill="white" />
                        </span>
                        <span className="rating-count">1,234 Ratings & 120 Reviews</span>
                    </div>

                    <div className="details-price-area">
                        <span className="details-final-price">₹{discountedPrice.toFixed(2)}</span>
                        {product.discount > 0 && (
                            <>
                                <span className="details-original-price">₹{product.price.toFixed(2)}</span>
                                <span className="details-discount">{product.discount}% off</span>
                            </>
                        )}
                    </div>

                    <div className="details-description">
                        <h3>Product Description</h3>
                        <p>
                            Experience premium quality with the {product.name}.
                            Built for performance and durability, this {product.category.toLowerCase()}
                            item feature state-of-the-art technology and ergonomic design to fit your lifestyle.
                        </p>
                    </div>

                    <div className="details-actions">
                        <div className="quantity-selector">
                            <button onClick={() => updateQuantity(-1)}><Minus size={18} /></button>
                            <span>{quantity}</span>
                            <button onClick={() => updateQuantity(1)}><Plus size={18} /></button>
                        </div>

                        <button className="buy-now-btn">Buy Now</button>
                        <button className={`add-cart-btn ${isInCart(product.id) ? 'go-to-cart' : ''}`} onClick={handleAddToCart}>
                            <ShoppingCart size={20} /> {isInCart(product.id) ? 'Go to Cart' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
