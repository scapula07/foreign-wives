import React from 'react'
import trip from "../../../assets/canplace.png"

export default function Accomodations() {
  return (
    <div className='py-8 flex w-full px-8 justify-center' >
        <div className='w-1/2'>
            <div className=' flex flex-col   space-y-6'>
                    <h5 className='text-4xl font-semibold w-3/4'>
                    Plan your trips and airport needs
                    </h5>

                    <p className='text-lg font-light w-1/2'>
                    Life is meant to be easy and soft and with us we can give you such life
                    </p>
                    
                    <button className='px-8 py-2 rounded-full border w-1/4 bg-white' style={{color: "rgba(179, 14, 12, 1)",borderColor:"rgba(179, 14, 12, 1)"}}>Learn more</button>

                </div>
        </div>


        <div className='w-1/4 flex justify-center'>
            <img 
              src={trip}
              className="w-full"
            />

        </div>




    </div>
  )
}
