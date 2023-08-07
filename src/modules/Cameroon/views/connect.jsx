import React from 'react'
import bottomImg from "../../../assets/bottomImg.png"

export default function Connect() {
  return (
    <div className='flex flex-col space-y-10 px-16'>
        <div className='w-1/2 flex flex-col  space-y-4'>
            <h5 className='text-4xl font-semibold w-1/2'>
                Meet friends, join groups and connect
            </h5>

            <p className='text-lg font-light w-1/2'>
            with our group and suport feature you can meet peple and connect
            </p>
            
            <button className='px-8 py-2 rounded-full border w-1/4' style={{color: "rgba(251, 188, 15, 1)",borderColor:"rgba(251, 188, 15, 1)"}}>Learn more</button>

        </div>


        <div className='h-60 w-full'>
            <img 
              src={bottomImg}
              className="w-full h-full"
            />

        </div>

    </div>
  )
}
