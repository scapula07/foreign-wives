import React from 'react'
import img from "../../../assets/adventure.png"
import backimg from "../../../assets/backimg.png"
import active1 from "../../../assets/active1.png"
import active2 from "../../../assets/active2.png"
import {BiSearch} from "react-icons/bi"

export default function Activities() {
  return (
    <div className='w-full h-full oveflow-y-scroll'>
        <div className='relative h-56 w-full'>
            <img 
            src={backimg}
            className="w-full h-full"
            />

            <div className='h-full absolute top-0 w-ful'>
                <img 
                src={img}
                className="w-full h-full"
                />

            </div>

        </div>
        

        <div className='py-8 px-6'>
            <SearchBar />
        </div>

        <div className='flex flex-col overflow-y-scroll h-full space-y-6'>
            {[
                {
                    img:active1,
                    name:"Beach "

                },
                {
                    img:active2,
                    name:"Beach "

                }
               
              ].map((actives)=>{
                 return(
                    <div className='relative w-full h-72'  >
                        <img 
                         src={actives?.img}
                         className="w-full h-72"
                        />

                        <div className='bg-black opacity-70 absolute h-full top-0 w-full flex items-end px-4 py-4'>
                            <h5 className='text-white font-semibold text-4xl'>{actives?.name}</h5>


                        </div>




                    </div>
                 )

               })

            }

        </div>


         

    </div>
  )
}





 function SearchBar() {
    return (
      <div className='flex items-center space-x-4 px-4 py-1 border rounded-sm  w-full bg-white'>

           <input 
              placeholder='Search activities '
              className=' outline-none w-full border-0 lg:text-lg text-sm text-black bg-white'
            />
         <BiSearch
             className='text-slate-800 text-xl font-semibold'
           />
       </div>
    )
  
    }