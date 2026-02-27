import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function ProductDetails() {

  const {id} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      setProduct(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [id]);

  if(!product){
    return(
      <div className='min-h-screen flex items-center justify-center text-2xl'>
        Loading...
      </div>
    )
  }


  return (
    <div className='min-h-screen bg-gray-100 p-10'>
      <Link to="/" className='mb-6 bg-gray-800 text-white px-4 py-2 rounded-lg'>Go Back</Link>

      <div className='bg-white mt-6 rounded-3xl shadow-2xl p-10 grid md:grid-cols-2 gap-10'>

        <div className='flex items-center justify-center'>
          <img className='h-96 object-contain' src={product?.image} alt="" />
        </div>

        <div className='flex flex-col'>
          <h1 className='text-3xl font-bold mt-4'>{product?.title}</h1>

          <div className='flex justify-between items-center gap-4 mt-3 mb-4'>
          <p className='bg-blue-300 px-3 py-1 rounded-lg text-blue-600 font-semibold font-medium'>{product?.category}</p>
          <p className='text-yellow-600 font-semibold'>{product?.rating?.rate} - {product?.rating?.count}(review)</p>
          </div>


          <p className='text-2xl text-blue-600 font-bold mb-6'>${product?.price}</p>

          <p className='text-gray-700 mb-6'>{product?.description}</p>

          <div className='flex gap-6'>
            <button className='bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl cursor-pointer'>Add to Cart</button>
            <button className='bg-green-600 text-white font-semibold px-6 py-3 rounded-xl cursor-pointer'>Checkout</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default ProductDetails