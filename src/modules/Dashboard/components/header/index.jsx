import React from 'react'
import SearchBar from '../searchBar'
import {MdOutlineNotifications} from "react-icons/md"
export default function Header() {
  return (
     <div className='w-full ' style={{background:"rgba(28, 36, 28, 1)"}}>
         <div className='w-full flex items-center justify-between px-10'>
             <div className='flex flex-col text-white py-4 '>
                <h5 className='text-lg'>Good afternoon Ifeanyi </h5>
                <h5 className='text-sm text-light'>Earn more TGW coin today </h5>


             </div>

             <div className='flex items-center space-x-4' >
                 <SearchBar />

                 <h5 className='p-2 items-center flex justify-center border border-white rounded-full'>
                    <MdOutlineNotifications className='text-white text-2xl'/>
                 </h5>
                 <h5>
                    
                 </h5>
             </div>

         </div>
 
    </div>
  )
}
