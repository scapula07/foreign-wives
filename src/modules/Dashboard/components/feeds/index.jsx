import React from 'react'
import { Outlet } from 'react-router-dom'
import {RiChatNewLine} from "react-icons/ri"
import {GoVideo} from "react-icons/go"
import {MdGroups} from "react-icons/md"
export default function Feeds() {
  return (
    <div className='flex flex-col w-full'>
         <div className='flex items-center w-full '>
              <h5 className='flex justify-center w-1/3 text-center border-b-2 py-1 hover:text-green-500 text-slate-500 flex items-center space-x-2'>
                 <RiChatNewLine />
                 <span>News feed</span> 
                </h5>
              <h5 className='flex justify-center w-1/3 text-center border-b-2 hover:text-green-500  py-1 text-slate-500 flex items-center space-x-2'>
                <GoVideo />
                <span>Videos</span>
              </h5>
              <h5 className='flex justify-center w-1/3 text-center border-b-2 py-1 text-slate-500 hover:text-green-500 flex items-center space-x-3'>
                <MdGroups />
                <span>Groups</span>
                
                </h5>
          </div>

          <div>
             <Outlet />

          </div>

    </div>
  )
}
