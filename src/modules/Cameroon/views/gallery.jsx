import React from 'react'
import img1 from "../../../assets/img1.png"
import img2 from "../../../assets/img2.png"
import img3 from "../../../assets/img3.png"

export default function Gallery() {
  return (
    <div className='flex flex-col space-y-7 items-center w-full space-y-10 py-8 px-10'>
         <h5 className='text-center w-full text-3xl w-44'>
            Sit back and lets take 
            <br></br>
            you on a journey of a life time</h5>
         <div className='flex items-center overflow-x-scroll space-x-6 py-10'>
            {[img1,img2,img3,img1,img2,img1,img3].map((image)=>{
                 return(
                    <img 
                      src={image}
                      className="w-1/6"
                    />
                 )
            })

            }

         </div>

    </div>
  )
}
