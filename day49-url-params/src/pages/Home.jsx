import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function Home() {
    const[products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            setProducts(response.data);
        }).catch(err => {
            console.log(err);
        })
    }, []);

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
        <h1 className='text-4xl font-bold text-center mb-10'>All Products</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
                products.map((data) => (
                    <div key={data.id} className='bg-white rounded-2xl shadow-lg p-5 flex flex-col'>
                        <div className='h-52 flex items-center justify-center'>
                            <img src={data.image} alt="" className='h-48 object-contain' />
                        </div>

                        <div className='flex justify-between items-center mt-4'>
                            <h2 className='text-lg font-semibold line-clamp-1'>{data.title}</h2>
                            <span className='text-blue-600 font-bold'>${data.price}</span>
                        </div>

                        <p className='text-gray-600 text-sm mt-3 line-clamp-4'>{data.description}</p>

                        <button onClick={() => navigate(`/products/${data.id}`)} className='mt-4 bg-indigo-600 text-white py-2 rounded-lg cursor-pointer'>View Details</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Home