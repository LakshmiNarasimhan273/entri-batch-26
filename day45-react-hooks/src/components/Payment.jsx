import React, { useState } from 'react'

function Payment() {
    const[paymentStatus, setPaymentStatus] = useState(false);

    const makePayment = () => {
        setPaymentStatus(true);
    }

  return (
    <div className='flex flex-col items-center justify-center h-[500px]'>
        {
            paymentStatus ? (
                <p className='text-6xl font-bold px-8 py-4 rounded-lg text-green-600 bg-green-200'>Payment Succeeded</p>
            ) : (
                <p className='text-6xl font-bold px-8 py-4 bg-red-200 text-red-600 rounded-lg'>Payment Processing</p>
            )
        }
        <button onClick={makePayment} className='bg-blue-200 text-blue-600 font-bold px-6 py-2 mt-6 rounded-lg'>Complete Payment</button>
    </div>
  )
}

export default Payment