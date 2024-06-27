'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DummyDataPage = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProduct(response.data.products);
        console.log(respe.data);
      } catch (error) {
        setError(error, "error");
      }
    };

    fetchData();
  }, []);

  // console.log(product)  

  return (
    <>
    <div>
      {product.length > 0 ? (product.map(item => {
        return (
          <div key={item.id} className="border p-4 my-4">
            <h1 className="text-2xl font-bold">{item.title}</h1>
            <p className="text-sm text-gray-500">Price: {item.price}</p>
          </div>
        );
      })) :( <p> loading....</p>)}
      
    </div>
 
  </>
  );
}
export default DummyDataPage

