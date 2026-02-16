import React from 'react'
import { products } from '../data/productData';

function Products() {
    const handleView = (id, title, price) => {
        alert(`You Clicked the ${title} - ${price} in the ID of ${id}`);
    }
  return (
    <div className='max-w-6xl mx-auto p-6'>
        <h2 className='text-2xl font-bold mb-8'>Our Products</h2>

        <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                products.map((data) => (
                    <div key={data.id} className='bg-gray-100 shadow-md rounded-lg p-4'>
                        <img src={data.image} className='w-full h-40 object-cover rounded' alt="" />

                        <h3 className='text-lg font-semibold mt-3'>{data.title}</h3>
                        <p className='text-lg font-semibold mt-3 text-blue-500'>{data.price}</p>
                        {
                            data.isStock ? (
                                <p className='bg-green-500 py-1 px-2 text-white text-center'>Available</p>
                            ) : (
                                <p className='bg-red-500 py-1 px-2 text-white text-center'>Sold out</p>
                            )
                        }
                        <button onClick={() => handleView(data.id, data.title, data.price)} className='mt-4 w-full bg-blue-600 text-white py-2 rounded cursor-pointer'>View Product</button>
                        {/* helper function */}
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Products