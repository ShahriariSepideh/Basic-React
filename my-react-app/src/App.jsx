import React from 'react';
import ProductList from './Components/ProductList/ProductList';
import ProductCard from './Components/ProductCard/ProductCard'
import './App.css';

function App() {
    return (
        <div className="bg-gray-50">
            <ProductList />
        </div>
    );
}

export default App;