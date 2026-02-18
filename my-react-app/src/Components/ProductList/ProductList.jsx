import React from 'react';
import ProductCard from '/src/Components/ProductCard/ProductCard.jsx';

const ProductList = () => {
    const products = [
        {
            id: 1,
            name: 'Asus Laptop',
            price: 25000000,
            description: 'Powerful laptop with Core i7 processor and 16GB RAM'
        },
        {
            id: 2,
            name: 'Bluetooth Headphones',
            price: 2500000,
            description: 'High quality headphones with noise cancellation'
        },
        {
            id: 3,
            name: 'Gaming Mouse',
            price: 850000,
            description: '16000 DPI mouse with RGB lighting'
        },
        {
            id: 4,
            name: 'Mechanical Keyboard',
            price: 1800000,
            description: 'Keyboard with blue switches and RGB lighting'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    🛍️ Product List
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;