import React from 'react';
import './Skeleton.css';

const ProductSkeleton = () => {
    return (
        <div className="skeleton-card">
            <div className="skeleton-image pulse"></div>
            <div className="skeleton-text pulse"></div>
            <div className="skeleton-text-short pulse"></div>
            <div className="skeleton-price pulse"></div>
            <div className="skeleton-button pulse"></div>
        </div>
    );
};

export default ProductSkeleton;
