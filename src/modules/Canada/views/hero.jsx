import React from 'react'
import bg from "../../../assets/canadabg.png"
import Header from '../components/Header'

export default function Hero() {
  return (
    <div className='relative w-full' style={{height:"550px"}}>
         <img 
         src={bg}
         className="w-full h-full relative "
         />

         <div className='fixed top-0 bg-black z-10 w-full opacity-70'>
            <Header />

         </div>
         


    </div>
  )
}
