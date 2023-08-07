import React from 'react'
import bottomImg from "../../../assets/connect.png"

export default function Connect() {
  return (
    <div className='flex flex-col space-y-10 px-16 py-10'>
        <div className='w-1/2 flex flex-col  space-y-4'>
            <h5 className='text-4xl font-semibold w-1/2'>
                Meet friends, join groups and connect
            </h5>

            <p className='text-lg font-light w-1/2'>
            with our group and suport feature you can meet peple and connect
            </p>
            
            <button className='px-8 py-2 rounded-full border w-1/4' style={{color: "rgba(179, 14, 12, 1)",borderColor:"rgba(179, 14, 12, 1)"}}>Learn more</button>

        </div>


        <div className='h-96 w-full'>
            <img 
              src={bottomImg}
              className="w-3/4 h-full"
            />

        </div>

    </div>
  )
}
