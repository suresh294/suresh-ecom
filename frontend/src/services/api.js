import axios from 'axios';

const API = axios.create({
    baseURL: '/api',
});

// Response interceptor for consistent error handling
API.interceptors.response.use(
    (response) => response.data,
    (error) => {
        const message = error.response?.data?.message || 'Something went wrong';
        console.error('API Error:', message);
        return Promise.reject(message);
    }
);

export const productAPI = {
    getAll: (params) => API.get('/products', { params }),
    getById: (id) => API.get(`/products/${id}`),
};

export const cartAPI = {
    get: () => API.get('/cart'),
    update: (item) => API.post('/cart', item),
    clear: () => API.delete('/cart'),
};

export default API;
