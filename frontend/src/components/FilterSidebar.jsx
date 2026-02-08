import React from 'react';
import './FilterSidebar.css';

const categories = ['All', 'Electronics', 'Furniture', 'Fashion', 'Appliances'];

const FilterSidebar = ({ filters, onFilterChange, onClearFilters }) => {
    const { category, minPrice, maxPrice, sort } = filters;

    return (
        <aside className="filter-sidebar">
            <div className="filter-header">
                <h3>Filters</h3>
                <button className="clear-btn" onClick={onClearFilters}>Clear All</button>
            </div>

            <div className="filter-section">
                <h4>Category</h4>
                <div className="category-list">
                    {categories.map((cat) => (
                        <label key={cat} className="filter-item">
                            <input
                                type="radio"
                                name="category"
                                checked={category === (cat === 'All' ? '' : cat)}
                                onChange={() => onFilterChange('category', cat === 'All' ? '' : cat)}
                            />
                            <span>{cat}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="filter-section">
                <h4>Price Range</h4>
                <div className="price-inputs">
                    <input
                        type="number"
                        placeholder="Min"
                        value={minPrice}
                        onChange={(e) => onFilterChange('minPrice', e.target.value)}
                    />
                    <span>to</span>
                    <input
                        type="number"
                        placeholder="Max"
                        value={maxPrice}
                        onChange={(e) => onFilterChange('maxPrice', e.target.value)}
                    />
                </div>
            </div>

            <div className="filter-section">
                <h4>Sort By</h4>
                <select
                    value={sort}
                    onChange={(e) => onFilterChange('sort', e.target.value)}
                    className="sort-select"
                >
                    <option value="">Default</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                </select>
            </div>
        </aside>
    );
};

export default FilterSidebar;
