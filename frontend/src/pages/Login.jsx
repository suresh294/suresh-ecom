import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-left">
                    <h2>Login</h2>
                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="Login Banner" />
                </div>
                <div className="auth-right">
                    <div className="auth-form">
                        <div className="input-group">
                            <input type="text" required />
                            <label>Enter Email/Mobile number</label>
                        </div>
                        <div className="input-group">
                            <input type="password" required />
                            <label>Enter Password</label>
                        </div>
                        <p className="privacy-policy">
                            By continuing, you agree to SureshEcom's <span className="link">Terms of Use</span> and <span className="link">Privacy Policy</span>.
                        </p>
                        <button className="auth-btn login-btn">Login</button>
                        <p className="auth-or">OR</p>
                        <button className="otp-btn">Request OTP</button>
                    </div>
                    <div className="auth-footer">
                        <Link to="/signup" className="signup-link">New to SureshEcom? Create an account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
