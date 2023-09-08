import React from 'react'
import {BsThreeDots} from "react-icons/bs"
import post from "../../../../assets/post.png"


export default function Posts() {
  return (
    <div className='flex flex-col py-6'>
        {[1].map(()=>{
            return(
                <Post />
            )
        })

        }

    </div>
  )
}



const Post=()=>{
     return(
        <div className='flex flex-col px-6 space-y-4'>
             <div className='flex items-center justify-between'>
                 <div className='flex items-center space-x-1 '>
                     <img 
                       src={post}
                       className="rounded-full"
                     />

                     <div className='flex flex-col'>
                         <h5 className='text-sm font-semibold'>Doyin adedayo</h5>
                         <h5 className='text-xs'>@doyin</h5>

                     </div>

                 </div>
                    <BsThreeDots 
                       className='text-xl text-green-700'
                     />

             </div>

             <div className='text-sm font-light px-2'>
                 Travelling is on of the best thing you can do for your happiness. It opens your mind to new cultures, new experiences, and new way of life. It can help you to relax and de-stress, and it can give a renewed sense of appreciation for the world around you.
                  
             </div>

        </div>
     )
}