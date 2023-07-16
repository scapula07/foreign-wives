import React from 'react'
import background from "../../../assets/background.png"
import "./country.css"
import logo from "../../../assets/wivesLogo2.jpeg"
import Slider from '../components/slider'
import MidSection from './midSection'
import LowSection from './lowSection'

export default function CountryView() {
  return (
    <div className=''>
        <div className="countrybg-img relative flex justify-end">
              
                <div className='flex w-3/4  justify-end px-10 absolute bottom-0 '>
                    <div className='flex flex-col items-center space-y-10 '>
                        <img 
                            src={logo}
                            className="w-56 h-56 rounded-full"
                        />
                        <Slider />

                    </div>


                </div>

        </div>
          <div className='w-full bg-white' style={{height:"60vh"}}>
                <div className='w-full bg-white -mt-10 z-30 relative h-20 '>

                </div>
                <MidSection />
                <div className='py-8'>
                    <LowSection />

                </div>
            
        </div>
    </div>
  )
}
