import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { productAPI } from '../services/api';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import ProductSkeleton from '../components/ProductSkeleton';
import FilterSidebar from '../components/FilterSidebar';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart, isInCart } = useCart();
    const navigate = useNavigate();

    // Filter States
    const [filters, setFilters] = useState({
        category: '',
        minPrice: '',
        maxPrice: '',
        sort: ''
    });

    useEffect(() => {
        fetchProducts();
    }, [filters]); // Refetch when filters change

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const data = await productAPI.getAll(filters);
            // Add artificial delay for assessment demonstration
            setTimeout(() => {
                setProducts(data.products);
                setLoading(false);
            }, 500);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const clearFilters = () => {
        setFilters({
            category: '',
            minPrice: '',
            maxPrice: '',
            sort: ''
        });
    };

    const handleAddToCart = (product) => {
        if (isInCart(product.id)) {
            navigate('/cart');
        } else {
            addToCart(product);
        }
    };

    if (error) {
        return (
            <div className="error-container">
                <h2>Oops! Something went wrong.</h2>
                <p>{error}</p>
                <button onClick={fetchProducts} className="retry-btn">Retry</button>
            </div>
        );
    }

    return (
        <div className="home-page">
            <div className="home-container">
                <FilterSidebar
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onClearFilters={clearFilters}
                />

                <div className="product-list-container">
                    <div className="product-grid">
                        {loading
                            ? Array(6).fill(0).map((_, i) => <ProductSkeleton key={i} />)
                            : products.length > 0
                                ? products.map((product) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        onAddToCart={() => handleAddToCart(product)}
                                        isInCart={isInCart(product.id)}
                                    />
                                ))
                                : <div className="no-products">No products found for selected filters.</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
