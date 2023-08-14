import React from 'react'
import img1 from "../../../assets/connect1.png"
import img2 from "../../../assets/connect2.png"
import img3 from "../../../assets/img3.png"

export default function Gallery() {
  return (
    <div className='flex flex-col space-y-7 items-center w-full space-y-10 py-12 px-10 '>
         <h5 className=' w-full text-5xl w-44 text-black'>
            Sit back and lets take 
            <br></br>
            you on a journey of a life time</h5>
          <div className='flex items-center flex-col space-y-10  py-14'>
              <img 
                src={img1}
                className="w-3/4"
              />
              <img 
                  src={img2}
                  className="w-3/4"
              />
           

         </div>

    </div>
  )
}
