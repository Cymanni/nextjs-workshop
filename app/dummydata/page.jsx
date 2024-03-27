'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DummyDataPage = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProduct(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {product.title}</p>
      <p>Price: {product.price}</p>
    
    </div>
  )
}

export default DummyDataPage

