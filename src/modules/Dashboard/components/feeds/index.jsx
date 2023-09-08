import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Feeds() {
  return (
    <div className='flex flex-col w-full'>
         <div className='flex items-center w-full '>
              <h5 className='flex justify-center w-1/3 text-center border-b-2 py-1 text-slate-500'>News feed</h5>
              <h5 className='flex justify-center w-1/3 text-center border-b-2  py-1 text-slate-500'>Videos</h5>
              <h5 className='flex justify-center w-1/3 text-center border-b-2 py-1 text-slate-500 '>Groups</h5>
          </div>

          <div>
             <Outlet />

          </div>

    </div>
  )
}
