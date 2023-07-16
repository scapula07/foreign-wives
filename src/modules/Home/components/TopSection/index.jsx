import React from 'react'
import sunshine from "../../../../assets/sunshine.mp4"
import mainlogo from "../../../../assets/mainLogo.png"

export default function TopSection() {
  return (
    <div className='py-4 w-full '>
        <div className='w-full relative home-h'  >

        
            <video 
                autoPlay
                loop
                muted

                src={sunshine}
                className="w-full h-full"
            />
            <div className='absolute bg-black opacity-50 top-0 w-full h-full z-10 flex items-center justify-center'>
                <img 
                  src={mainlogo}
                />
            </div>
        </div>

    </div>
  )
}
