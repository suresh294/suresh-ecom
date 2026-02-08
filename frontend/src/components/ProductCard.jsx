import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, isInCart }) => {
    const { id, name, price, discount, rating, image } = product;
    const discountedPrice = price - (price * discount / 100);

    return (
        <div className="product-card">
            <Link to={`/product/${id}`} className="product-card-link">
                <div className="product-image">
                    <img src={image} alt={name} loading="lazy" />
                </div>
                <div className="product-info">
                    <h3 className="product-name" title={name}>{name}</h3>
                    <div className="product-rating">
                        <span className="rating-badge">
                            {rating} <Star size={12} fill="white" />
                        </span>
                        <span className="rating-count">(1,234)</span>
                    </div>
                    <div className="product-price-row">
                        <span className="final-price">₹{discountedPrice.toFixed(2)}</span>
                        {discount > 0 && (
                            <>
                                <span className="original-price">₹{price.toFixed(2)}</span>
                                <span className="discount-tag">{discount}% off</span>
                            </>
                        )}
                    </div>
                </div>
            </Link>
            <button
                className={`add-to-cart-btn ${isInCart ? 'in-cart' : ''}`}
                onClick={(e) => {
                    e.preventDefault();
                    onAddToCart(product);
                }}
            >
                <ShoppingCart size={18} />
                {isInCart ? 'Go to Cart' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default ProductCard;
