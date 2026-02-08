import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ShoppingCart, User, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Layout.css';

const Layout = () => {
  const { count } = useCart();

  return (
    <div className="app-container">
      <header className="navbar">
        <div className="nav-content">
          <Link to="/" className="logo">
            <span className="logo-text">SureshEcom</span>
          </Link>

          <div className="search-bar">
            <input type="text" placeholder="Search for products, brands and more" />
            <button className="search-btn"><Search size={20} /></button>
          </div>

          <nav className="nav-links">
            <Link to="/login" className="nav-item">
              <User size={20} />
              <span>Login</span>
            </Link>
            <Link to="/cart" className="nav-item">
              <ShoppingCart size={20} />
              <div className="cart-content">
                {count > 0 && <span className="cart-badge">{count}</span>}
                <span>Cart</span>
              </div>
            </Link>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>ABOUT</h4>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>SureshEcom Stories</p>
          </div>
          <div className="footer-section">
            <h4>HELP</h4>
            <p>Payments</p>
            <p>Shipping</p>
            <p>Cancellation & Returns</p>
            <p>FAQ</p>
          </div>
          <div className="footer-section">
            <h4>POLICY</h4>
            <p>Return Policy</p>
            <p>Terms Of Use</p>
            <p>Security</p>
            <p>Privacy</p>
          </div>
          <div className="footer-section">
            <h4>SOCIAL</h4>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>YouTube</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SureshEcom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
