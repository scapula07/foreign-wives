import React from 'react'
import trip from "../../../assets/trips.png"

export default function Trips() {
  return (
    <div className='py-8 flex w-full px-8 '>
        <div className='w-1/2 flex justify-center'>
            <img 
              src={trip}
              className="w-3/5"
            />

        </div>
        <div className='w-1/2 flex flex-col  space-y-6'>
            <h5 className='text-4xl font-semibold w-1/2'>
              Plan your trips and airport needs
            </h5>

            <p className='text-lg font-light w-1/2'>
            Life is meant to be easy and soft and with us we can give you such life
            </p>
            
            <button className='px-8 py-2 rounded-full border w-1/4' style={{color: "rgba(251, 188, 15, 1)",borderColor:"rgba(251, 188, 15, 1)"}}>Learn more</button>

        </div>

    </div>
  )
}
