import React from 'react'
import midbg from "../../../../assets/midbg.jpeg"
import Gallery from './gallery'
import line from "../../../../assets/line.png"

export default function MidSection() {
  return (
    <div className='w-full border-t-8 border-b-8 border-slate-400'>
        <div className='w-full relative'>
            <img 
              src={midbg}
              className="w-full imgbg-h"
            />
            <div className='absolute top-0 h-full w-full z-10 flex flex-col sm:flex-row sm:justify-center py-4 sm:space-x-20'>
                    <div className='sm:-mt-8 -mt-8 '>
                    <Gallery />
                    </div>
               
                <div className='sm:w-2/5 w-full h-3/4 rounded-lg flex flex-col itewms-center py-8 px-6 sm:space-y-4 space-y-20' style={{background:"#000000de"}}>
                    <img 
                      src={line}
                      className="w-full relative z-50"
                    />
                    <div className='z-20 relative flex flex-col items-center space-y-4'>
                        <h5 className='text-lg font-semibold text-yellow-400 font-serif '>Mission Statement</h5>
                         <p className='text-white font-semibold text-center w-3/4'>
                            Intercultural Marriages
                        are both rewarding and challenging.
                        Our Mission is to encourage, support and guide our Foreign Wives.
                         </p>

                    </div>
 
                </div>


           </div>

        </div>
         

    </div>
  )
}
