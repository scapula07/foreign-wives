import React from 'react'
import logo from "../../../../assets/newlogo.png"

export default function Footer() {
  return (
    <div className='h-72 w-full flex  flex-col py-8 px-10  space-y-20' style={{background: "rgba(255, 206, 49, 1)"}}>
        <div className='flex justify-between w-full'>
                <div>
                    <img 
                    src={logo}
                    className="w-14 h-14"
                    />

                </div>

                <div className='flex flex-col space-y-1'>
                    <h5 className='text-sm font-semibold'>Explore</h5>
                    {["Accommodation","Airport Services","Activites","Grops and support"].map((text)=>{
                         return(
                            <h5 className='text-sm font-light'>{text}</h5>
                         )
                    })

                    }

                </div>
                <div className='flex flex-col space-y-1'>
                    <h5 className='text-sm font-semibold'>Company</h5>
                    {["About Us","Contact Us","Status"].map((text)=>{
                         return(
                            <h5 className='text-sm font-light'>{text}</h5>
                         )
                    })

                    }

                </div>

                <div className='flex flex-col space-y-1'>
                    <h5 className='text-sm font-semibold'>Legal</h5>
                    {["Privacy","Terms of Service","Trademark Notice"].map((text)=>{
                         return(
                            <h5 className='text-sm font-light'>{text}</h5>
                         )
                    })

                    }

                </div>

                </div>

                <div className='flex w-full justify-center'>
                    <h5 className='text-sm font-semibold'>Foreign wr - All rights reserved</h5>

                </div>


    </div>
  )
}
