import React from 'react';
import ProductList from '../components/product-list';

const Home: React.FC = () => {
    return (
        <div>
            <h2>Welcome to Our Online Shop</h2>
            <ProductList />
        </div>
    );
};

export default Home;
