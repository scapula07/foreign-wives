import React from 'react'
import post from "../../../../assets/post.png"
import friend from "../../../../assets/friend.png"
import {BsThreeDots} from "react-icons/bs"

export default function Notifications() {
  return (
    <div className='flex w-full flex-col'>
        <div className='w-full flex items-center justify-between'>
            <h5 className='text-lg font-semibold'>Notifications</h5>
            <h5 className=' text-green-500 font-semibold text-sm'>See all</h5>

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
                                     <h5 className='text-sm '>Amanda started following you.</h5>
                                     <h5 className='text-xs font-light '>Now</h5>

                                 </div>

                            </div>
                            <BsThreeDots />
                             

                        </div>
                    )
                })}
        </div>
        

    </div>
  )
}
