import React from 'react'
import logo from "../../../../assets/fwrlogo.png"

export default function Header() {
  return (
    <div className='flex items-center px-10 py-3 justify-between w-full relative z-50 ' >

        <img 
          src={logo}
          className="w-20 "
        />
 
        <div className='flex items-center  w-3/4 justify-between '>
             <div className='flex items-center space-x-4 text-white w-3/4'>
                {["Home","Airport","Accomodation","Activities","Groups and support"].map((text)=>{
                     return(
                        <h5>{text}</h5>
                     )
                })

                }

             </div>
             <div className=''>
                <button className='px-6 py-1 rounded-full text-white' style={{background: "rgba(0, 18, 77, 1)"}}>Join us</button>
                
             </div>

        </div>
        

    </div>
  )
}
