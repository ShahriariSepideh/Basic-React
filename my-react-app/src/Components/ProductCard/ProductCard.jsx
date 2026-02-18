import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-2xl text-blue-600 font-bold mb-3">
                {product.price.toLocaleString()} Toman
            </p>
            <p className="text-gray-600 leading-relaxed border-t pt-3 mt-2">
                {product.description}
            </p>
        </div>
    );
};

export default ProductCard;