import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = "http://localhost:4500/getProducts";
        
        axios.get(url)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleDelete = (index) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            const updatedProducts = [...products];
            updatedProducts.splice(index, 1);
            setProducts(updatedProducts);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800">{product.fullName}</h2>
                    <p className="text-gray-600 mt-2">{product.address}</p>
                    <p className="text-blue-800 font-semibold   mt-2">Donation Category: {product.donationCategory}</p>
                    <p className="text-gray-600 mt-2">Mobile Number: {product.mobileNumber}</p>
                    <p className="text-gray-600 mt-2">Pincode: {product.pincode}</p>
                    <button onClick={() => handleDelete(index)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Products;
