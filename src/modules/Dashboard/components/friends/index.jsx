import React from 'react'
import post from "../../../../assets/post.png"

export default function Friends() {
  return (
    <div className='flex flex-col w-full'>
        <div className='w-full'>
            <h5 className='text'>Friends Request</h5>
            <h5>See all</h5>

        </div>
        {[].map(()=>{
             return(
                <div className='flex items-center'>


                </div>
             )
        })}

    </div>
  )
}
