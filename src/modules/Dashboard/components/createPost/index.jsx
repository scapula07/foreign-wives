import React from 'react'
import user from "../../../../assets/user.png"
import {BiSearch} from "react-icons/bi"

export default function CreatePost() {
  return (
    <div className='flex flex-col space-y-8'>
          <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4 w-full '>
                    <img src={user}
                      className="w-10 rounded-full h-10"
                     />
                    <h5 className='text-sm'>Create a new post on your timeline. </h5>

                </div>

                
             <button className='text-white bg-green-600 py-4 px-4 w-2/6 text-sm rounded-lg'>Create a post</button>
                

          </div>
          <div className=''>
              <SearchBar />
          </div>
   

    </div>
  )
}




function SearchBar() {
    return (
      <div className='flex items-center space-x-4 px-4 py-2 border rounded-full  w-full bg-slate-100 px-6'>

           <input 
              placeholder='Search friends,groups,videos '
              className=' outline-none w-full border-0  text-sm text-black bg-slate-100'
            />
           <BiSearch
             className='text-slate-800 text-xl font-semibold'
           />
       </div>
    )
  }