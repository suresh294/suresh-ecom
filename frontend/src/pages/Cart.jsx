import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import './Cart.css';

const Cart = () => {
    const { cart, totalAmount, count, updateQuantity, removeFromCart, loading, error, retryFetch } = useCart();

    if (loading && cart.length === 0) {
        return (
            <div className="cart-page">
                <div className="cart-container">
                    <div className="cart-items-section pulse" style={{ height: '400px' }}></div>
                    <div className="price-details-section pulse" style={{ height: '200px' }}></div>
                </div>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <ShoppingBag size={80} color="#2874f0" />
                <h2>Your cart is empty!</h2>
                <p>Add items to it now.</p>
                <Link to="/" className="shop-now-btn">Shop Now</Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            {error && (
                <div className="cart-error-banner">
                    <span>{error}</span>
                    <button onClick={retryFetch}>Retry Sync</button>
                </div>
            )}
            <div className="cart-container">
                <div className="cart-items-section">
                    <div className="cart-header">
                        <h3>My Cart ({count})</h3>
                    </div>

                    {cart.map((item) => (
                        <div key={item.productId} className="cart-item">
                            <div className="item-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="item-details">
                                <Link to={`/product/${item.productId}`} className="item-name">{item.name}</Link>
                                <p className="item-price">₹{item.price.toFixed(2)}</p>

                                <div className="item-actions">
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.productId, -1)} disabled={item.quantity <= 1}>
                                            <Minus size={16} />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.productId, 1)}>
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.productId)}>
                                        <Trash2 size={18} /> Remove
                                    </button>
                                </div>
                            </div>
                            <div className="item-subtotal">
                                ₹{(item.price * item.quantity).toFixed(2)}
                            </div>
                        </div>
                    ))}

                    <div className="cart-footer">
                        <Link to="/checkout" className="place-order-btn-link">
                            <button className="place-order-btn">Place Order</button>
                        </Link>
                    </div>
                </div>

                <div className="price-details-section">
                    <h3>Price Details</h3>
                    <div className="price-row">
                        <span>Price ({count} items)</span>
                        <span>₹{totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="price-row">
                        <span>Delivery Charges</span>
                        <span className="free-delivery">FREE</span>
                    </div>
                    <div className="total-row">
                        <span>Total Amount</span>
                        <span>₹{totalAmount.toFixed(2)}</span>
                    </div>
                    <p className="savings-msg">You will save ₹0 on this order</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
