import React from 'react'
import SideNav from '../components/sideNav'
import Header from '../components/header'

export default function DashboardView({children}) {
  return (
    <div className='w-full h-screen overflow-y-hidden'>
         <div className='flex h-full w-full space-x-0.5'>
               <div className='w-1/6 h-screen' style={{background:"rgba(28, 36, 28, 1)"}}>
                  <SideNav />

               </div>
               <div className='w-full h-screen'>
                  <Header />
                  <div>
                    {children}
                  </div>
  
               </div>

         </div>


    </div>
  )
}
