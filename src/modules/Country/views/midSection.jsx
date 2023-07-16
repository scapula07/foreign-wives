import React from 'react'
import bg from "../../../assets/bgsecond.jpeg"
import wedding from "../../../assets/wedding.jpeg"
import airport from "../../../assets/airportEscort.jpeg"
import couple from "../../../assets/couple.jpeg"

const Card=({item})=>{
     return(
       <div className='relative w-1/4 border-8'>
          <img 
            src={item?.img}
            className="w-full h-72"
          
           />
            <div className='absolute top-0 h-full w-full z-10 hover:bg-rose-900 hover:opacity-70 hover:text-white flex flex-col justify-end px-4 py-4 space-y-2'>
                <h5 className='text-3xl font-semibold relative z-20'>{item?.name}</h5>
                <p>
                    {item?.desc}
                </p>

           </div>

       </div>
     )
}

export default function MidSection() {
  return (
    <div className='py-20 flex flex-col space-y-20 '>
         <h5 className='text-7xl text-center w-full font-sans'>Howfa!</h5>
         <div className='w-full relative h-96 hidden sm:block '>
            <img 
              src={bg}
              className="w-full h-full"
            />

            <div className='absolute top-0 w-full h-full flex justify-center h-full items-center space-x-6'>
               {services.map((item)=>{
                 return(
                    <Card
                      item={item}
                     />
                 )
               })

               }

            </div>

         </div>

    </div>
  )
}


const services=[
    {
        img:airport,
        name:"Airport Escort",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accus"
    },
    {
        img:wedding,
        name:"VISA SERVICES",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accus"
    },
    {
        img:couple,
        name:"VISA SERVICES",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accus"
    }
]