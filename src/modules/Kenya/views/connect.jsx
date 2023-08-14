import React from 'react'
import bottomImg from "../../../assets/bottomconnect.png"

export default function Connect() {
  return (
    <div className='flex  space-x-2 px-16 '>
         <div className='h-96 w-full'>
            <img 
              src={bottomImg}
              className="w-3/4 h-full"
            />

        </div>
        <div className='w-1/2 flex flex-col  space-y-4 h-96'>
            <h5 className='text-4xl font-semibold w-1/2'>
                Meet friends, join groups and connect
            </h5>

            <p className='text-lg font-light '>
            with our group and suport feature you can meet peple and connect
            </p>
            
            <button className='px-8 py-2 rounded-full border w-56' style={{color: "rgba(0, 18, 77, 1)",borderColor:"rgba(0, 18, 77, 1)"}}>Learn more</button>

        </div>


       

    </div>
  )
}
