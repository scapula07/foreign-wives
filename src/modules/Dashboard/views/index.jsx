import React from 'react'
import SideNav from '../components/sideNav'
import Header from '../components/header'
import {Outlet} from "react-router-dom"

export default function DashboardView({children}) {
  return (
    <div className='w-full h-screen overflow-y-hidden'>
         <div className='flex h-full w-full space-x-0.5'>
               <div className='w-1/6 h-screen' style={{background:"#1C241C"}}>
                  <SideNav />

               </div>
               <div className='w-full h-screen'>
                  <Header />
                  <div className='py-10 h-full px-10 overflow-y-scroll'>
                    <Outlet />
                  </div>
  
               </div>

         </div>


    </div>
  )
}
