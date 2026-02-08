import React, { createContext, useContext, useState, useEffect } from 'react';
import { cartAPI } from '../services/api';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    // Initialize from localStorage for immediate UI restoration
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('cart_items');
        return saved ? JSON.parse(saved) : [];
    });
    const [totalAmount, setTotalAmount] = useState(() => {
        const saved = localStorage.getItem('cart_total');
        return saved ? parseFloat(saved) : 0;
    });
    const [count, setCount] = useState(() => {
        const saved = localStorage.getItem('cart_count');
        return saved ? parseInt(saved) : 0;
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Persist to localStorage whenever state changes
    useEffect(() => {
        localStorage.setItem('cart_items', JSON.stringify(cart));
        localStorage.setItem('cart_total', totalAmount.toString());
        localStorage.setItem('cart_count', count.toString());
    }, [cart, totalAmount, count]);

    const fetchCart = async () => {
        try {
            setError(null);
            // Only show loader if we don't have local data yet
            if (cart.length === 0) setLoading(true);

            const data = await cartAPI.get();
            setCart(data.items);
            setTotalAmount(data.totalAmount);
            setCount(data.count);
        } catch (err) {
            console.error('Failed to fetch cart:', err);
            setError('Could not sync with server. Changes might be local only.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const addToCart = async (product, quantity = 1) => {
        try {
            setError(null);
            const data = await cartAPI.update({
                productId: product.id || product.productId,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity
            });

            setCart(data.cart);
            await fetchCart();
        } catch (err) {
            console.error('Failed to update cart:', err);
            setError('Failed to update cart. Please check your connection.');
        }
    };

    const removeFromCart = async (productId) => {
        const item = cart.find(i => i.productId === productId);
        if (item) {
            await addToCart(item, -item.quantity);
        }
    };

    const updateQuantity = async (productId, delta) => {
        const item = cart.find(i => i.productId === productId);
        if (item) {
            await addToCart(item, delta);
        }
    };

    const clearCart = async () => {
        try {
            setError(null);
            await cartAPI.clear();
            setCart([]);
            setTotalAmount(0);
            setCount(0);
            localStorage.removeItem('cart_items');
            localStorage.removeItem('cart_total');
            localStorage.removeItem('cart_count');
        } catch (err) {
            console.error('Failed to clear cart:', err);
            setError('Failed to clear cart.');
        }
    };

    return (
        <CartContext.Provider value={{
            cart,
            loading,
            error,
            totalAmount,
            count,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            retryFetch: fetchCart,
            isInCart: (id) => cart.some(item => item.productId === id)
        }}>
            {children}
        </CartContext.Provider>
    );
};
