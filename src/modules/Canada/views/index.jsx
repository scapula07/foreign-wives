import React from 'react'
import Hero from './hero'
import midbg from "../../../assets/canMid.png"
import Trips from './trips'
import Accomodations from './accomodations'
import Gallery from './gallery'
import Connect from './connect'
import Footer from '../components/Footer'


export default function CanadaView() {
  return (
    <div className='w-full h-full'>
        <Hero />
        <div className='w-full py-8 h-80'  >
            <img 
              src={midbg}
              className="w-full h-full"
            />

        </div>

        <Trips />
        <Accomodations />
        <Gallery />
        <Connect />

        <div className='pt-20'>
          <Footer />
        </div>

       

    </div>
  )
}
