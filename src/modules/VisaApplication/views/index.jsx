import React from 'react'
import hero from "../../../assets/hero.png"
import card from "../../../assets/cardvisa.png"
import Forms from './forms'
import MidSection from './midSection'
import CartSection from './cartSection'
import Uploads from './uploads'
import "./application.css"


export default function ApplicationViews() {
  return (
    <div className='pb-10'>
        <div className='flex flex-col px-10 space-y-10'> 
            <img 
                src={hero}
                className="w-full card-h"
                
            />
            <div className='flex items-center  w-full justify-center  space-x-10'>
                <div className='flex flex-col space-y-1'>
                    <h5 className='sm:text-6xl text-3xl font-semibold text-green-700'>NAIJA</h5>
                    <h5 className='sm:text-4xl text-xl font-bold text-black flex space-x-2'>
                        <span> wives </span>
                       
                         <span className='bg-green-600 text-white py-1'>CARD</span>

                    </h5>

                </div>
                <img 
                  src={card }
                  className="w-2/5  sm:h-96 h-42"
                />

            </div>

        </div>

        <Forms />
        <MidSection />
        <CartSection />
        <Uploads />

        <div className=''>
            
            <div className='flex flex-col w-full space-y-6 px-10 py-8'>
                {[
                "Naija Wife Card ",
                "Delivery ",
                "VAT/Taxes 0.6%",
                "Total",
                ].map((text)=>{
                    return(
                        <div className='flex flex-col space-y-1'> 
                        <label className=''>{text}:</label>
                        <input
                        className='bg-slate-200 hover:bg-white hover:border-b w-4/5 py-2 outline-none px-2 '
                        />
                        </div>
                    )
                })

                }
            </div>

            <div className='flex justify-center'>
                <h5 className='border border-yellow-400 w-11/12'></h5>
            </div>
            
         
    </div>



    </div>
  )
} 
