import React from 'react'
import trip from "../../../assets/building.png"
export default function Accomodations() {
  return (
    <div className='py-8 flex w-full px-8 justify-center' style={{background: "rgba(255, 206, 49, 1)"}}>
        <div className='w-1/2'>
            <div className=' flex flex-col   space-y-6'>
                    <h5 className='text-4xl font-semibold w-3/4'>
                    Beautiful and cozy accomodations for you
                    </h5>

                    <p className='text-lg font-light w-1/2'>
                    With beautiful and tastefully furnished apartments we have designed just for you
                    </p>
                    
                    <button className='px-8 py-2 rounded-full border w-1/4 bg-white' style={{color: "rgba(251, 188, 15, 1)",borderColor:"rgba(251, 188, 15, 1)"}}>Learn more</button>

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
