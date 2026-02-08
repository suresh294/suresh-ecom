import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-left">
                    <h2>Looks like you're new here!</h2>
                    <p>Sign up with your mobile number to get started</p>
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="Login Banner" />
                </div>
                <div className="auth-right">
                    <div className="auth-form">
                        <div className="input-group">
                            <input type="text" required />
                            <label>Enter Mobile number</label>
                        </div>
                        <div className="input-group">
                            <input type="email" required />
                            <label>Enter Email</label>
                        </div>
                        <div className="input-group">
                            <input type="password" required />
                            <label>Enter Password</label>
                        </div>
                        <p className="privacy-policy">
                            By continuing, you agree to SureshEcom's <span className="link">Terms of Use</span> and <span className="link">Privacy Policy</span>.
                        </p>
                        <button className="auth-btn signup-btn">Continue</button>
                    </div>
                    <div className="auth-footer">
                        <Link to="/login" className="signup-link">Existing User? Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
