import React from 'react'
import img1 from "../../../../assets/slider1.jpeg"
import img2 from "../../../../assets/slider2.jpeg"
import img3 from "../../../../assets/slider3.jpeg"
import img4 from "../../../../assets/slider4.jpeg"


const Slide=(item)=>{

   return(
    <div className='relative'>
      <img 
        src={item.item?.img}
        className="sm:w-full w-28 h-44"
      />
     <div className='absolute top-0 w-full  h-full flex flex-col justify-end z-10 bg-black opacity-75'>
        <div className='flex flex-col w-full relative z-40 px-4 py-2'>
          <h5 className='text-white font-bold text-sm'>{item?.item?.name}</h5>
          <h5 className='text-white font-light'>{item?.item?.desc}</h5>
        </div>
        


     </div>
    </div>
   )
}
export default function Slider() {
  return (
    <div className='flex items-center w-full space-x-1 relative z-50'>
      
      {slides.map((item)=>{
         return(
          <Slide 
            item={item}
          />
         )
      })

      }

    </div>
  )
}


const  slides=[
  {
    img:img1,
    name:"Beautiful Wedding",
    desc:"Registry"
  },
  {
    img:img2,
    name:"Sarah Boton ",
    desc:"Niger wife"
  },
  {
    img:img3,
    name:"Kebi and Keth",
    desc:"Enjoy Niger Beach"
  },
  {
    img:img4,
    name:"Loving it here ",
    desc:"Toniatte Olumba"
  },
  {
    img:img2,
    name:"First Train  Ride",
    desc:"in Ibadan"
  }
]