import React from 'react'
import post from "../../../../assets/post.png"
import friend from "../../../../assets/friend.png"

export default function Friends() {
  return (
    <div className='flex w-full flex-col'>
        <div className='w-full flex items-center justify-between'>
            <h5 className='text-lg font-semibold'>Friends Request</h5>
            <h5 className=' text-slate-500 font-semibold'>See all</h5>

        </div>
          <div className='flex flex-col space-y-4 py-4 overflow-y-scroll'>
                {[1,2,3,4,5].map(()=>{
                    return(
                        <div className='flex items-center justify-between'>
                             <div className='flex space-x-3'>
                                 <img 
                                   src={friend}
                                   className="h-12 w-12"
                                 />
                                 <div className='flex flex-col'>
                                     <h5 className='text-sm '>Damilola</h5>
                                     <h5 className='text-xs font-light '>@dami_23</h5>

                                 </div>

                            </div>

                            <button className='bg-green-600 text-whiite px-6 text-sm py-2 text-white rounded-lg '>Accept</button>


                        </div>
                    )
                })}
        </div>
        

    </div>
  )
}
