import React from 'react'
import trip from "../../../assets/trip2.png"
import pic from "../../../assets/pic.png"

export default function Accomodations() {
  return (
    <div className='flex flex-col w-full space-y-10 py-20' style={{background: "rgba(0, 18, 77, 1)"}}>
        <div className='flex justify-center w-full'>
            <img 
              src={pic}
              className='w-3/4'
            />
        </div>
       
       <div className='py-8 flex w-full px-8 justify-center text-white' >
            <div className='w-1/2'>
                <div className=' flex flex-col   space-y-6'>
                        <h5 className='text-4xl font-semibold w-3/4'>
                        Plan your trips and airport needs
                        </h5>

                        <p className='text-lg font-light w-1/2'>
                        Life is meant to be easy and soft and with us we can give you such life
                        </p>
                        
                        <button className='px-8 py-2 rounded-full border w-1/4 bg-white' style={{color: "rgba(0, 18, 77, 1)",borderColor:"rgba(0, 18, 77, 1)"}}>Learn more</button>

                    </div>
            </div>


            <div className='w-1/4 flex justify-center'>
                <img 
                  src={trip}
                  className="w-full"
                />

            </div>




      </div>

    </div>

  )
}
