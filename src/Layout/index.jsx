import React from 'react'
import Header from '../components/Header'


export default function Layout({children}) {
  return (
    <div className="w-full text-white h-full bg-black overflow-x-hidden">
   
        <div className='fixed w-full bg-black lg:py-6 py-4 px-10 z-30 bg-black '>
        
            <Header />
        </div>

        
           
        <div className="w-full">
          {children}
        </div>
      </div>
      )
}