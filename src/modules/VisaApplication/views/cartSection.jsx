import React from 'react'
import cart from "../../../assets/cartIcon.png"

export default function CartSection() {
  return (
    <div className='py-10 px-10'>
       <div className='flex items-center space-x-4'>
            <img 
                src={cart}
                className="h-10 w-10"
            />
           <h5 className='bg-green-600 py-1 px-4 text-white text-lg rounded-tr-xl'>CART</h5>
      </div>

        <div className='flex flex-col py-8'>
            <h5 className='font-semibold text-lg'>Please Choose your delivery option:</h5>
            <div className='flex flex-col items-center space-y-4 py-8'>
                <button className='sm:w-1/2 w-full rounded-full py-3 bg-green-800 text-yellow-400 font-semibold text-lg hover:bg-white hover:border hover:shadow-lg'>Nigeria Delivery</button>
                <button className='sm:w-1/2 w-full rounded-full py-3 bg-green-800 text-yellow-400 font-semibold text-lg hover:bg-white hover:border hover:shadow-lg'>USA Delivery</button>

            </div>
            
        </div>
    </div>
  )
}
