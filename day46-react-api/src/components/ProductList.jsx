import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
    const[products, setProducts] = useState([]);

    useEffect(() => { // mount
        // http methods - get, post, put, delete
        // https://fakestoreapi.com/products

        axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            setProducts(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

  return (
    <div>
        <h2>Products</h2>

        {
            products.map(data => (
                <div>
                    <h4>{data.title}</h4>
                    <p>{data.price}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ProductList