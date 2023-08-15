import React from 'react'
import TopSection from '../components/TopSection'
import MidSection from '../components/MIdSection'
import BottomSection from '../components/BottomSection'
import "./home.css"
// import Footer from '../../../components/Footer'
import Footer from '../components/Footer'

export default function HomeView() {
  return (
    <div className=''>
        <TopSection />
        <MidSection />
        <BottomSection />
       
        <div className='py-2' style={{background:"#f1be5f"}}>
            <Footer
         
            />
        </div>


    </div>
  )
}
