import React from 'react';
import { useCart } from '../context/CartContext';
import { ShieldCheck, MapPin, CreditCard, ChevronRight } from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
    const { count, totalAmount } = useCart();

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <div className="checkout-steps">
                    {/* Step 1: Login */}
                    <div className="checkout-step completed">
                        <div className="step-header">
                            <span className="step-num">1</span>
                            <div className="step-title">
                                <h4>LOGIN</h4>
                                <p>Aniket Varma +91902XXXXXXX</p>
                            </div>
                            <button className="change-btn">CHANGE</button>
                        </div>
                    </div>

                    {/* Step 2: Delivery Address */}
                    <div className="checkout-step active">
                        <div className="step-header active">
                            <span className="step-num">2</span>
                            <h4 className="active-title">DELIVERY ADDRESS</h4>
                        </div>
                        <div className="step-content">
                            <div className="address-card">
                                <div className="address-header">
                                    <input type="radio" checked readOnly />
                                    <span className="name">Aniket Varma</span>
                                    <span className="tag">HOME</span>
                                    <span className="mobile">9022512345</span>
                                </div>
                                <div className="address-text">
                                    Flat No 404, Sunshine Residency, Near Central Park, Pimpri-Chinchwad, Pune, Maharashtra - 411019
                                </div>
                                <button className="deliver-here-btn">DELIVER HERE</button>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Order Summary */}
                    <div className="checkout-step disabled">
                        <div className="step-header">
                            <span className="step-num grey">3</span>
                            <h4 className="grey-title">ORDER SUMMARY</h4>
                        </div>
                    </div>

                    {/* Step 4: Payment Options */}
                    <div className="checkout-step disabled">
                        <div className="step-header">
                            <span className="step-num grey">4</span>
                            <h4 className="grey-title">PAYMENT OPTIONS</h4>
                        </div>
                    </div>
                </div>

                {/* Right Side: Price Details */}
                <div className="checkout-price-section">
                    <h3>PRICE DETAILS</h3>
                    <div className="price-info">
                        <div className="price-row">
                            <span>Price ({count} items)</span>
                            <span>₹{totalAmount.toFixed(2)}</span>
                        </div>
                        <div className="price-row">
                            <span>Delivery Charges</span>
                            <span className="free">FREE</span>
                        </div>
                        <div className="total-row">
                            <span>Total Payable</span>
                            <span>₹{totalAmount.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="safety-msg">
                        <ShieldCheck size={24} color="#878787" />
                        <p>Safe and Secure Payments. Easy returns. 100% Authentic products.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
