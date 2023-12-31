import React from 'react'
import nigeria from "../../../../assets/nigeria.jpeg"
import nigeriaflag from "../../../../assets/nigeriaflag.png"
import gambia from "../../../../assets/gambia.jpeg"
import gambiaflag from "../../../../assets/cameroonflag.png"
import ghana from "../../../../assets/ghana.jpeg"
import ghanaflag from "../../../../assets/ukflag.png"
import candaflag from "../../../../assets/canadaflag.png"
import { Link } from 'react-router-dom'

export default function BottomSection() {
  return (
    <div className='flex flex-col items-center w-full py-14 '>
        <h5 className='text-4xl font-semibold text-white text-center'>CHOOSE YOUR DOMINION</h5>
        <div className='flex sm:flex-row flex-col py-8 items-center sm:space-x-8 space-y-4 px-4 sm:px-6 overflow-x-scroll' style={{width:"180%"}}>
            {countries.map((country)=>{
                return(
                    <div className='flex flex-col'>
                        <div className='bg-white rounded-lg h-56 p-4 hover:p-0'>
                            <Link to={country?.link}>
                                <img 
                                    src={country?.img}
                                    className="w-full hover:w-96 h-full rounded-lg"
                                />
                             </Link>

                        </div>
                        <div className='flex items-center py-4 justify-center space-x-4'>
                            <h5 className='text-xl font-semibold'>{country?.name}</h5>
                            <img 
                              src={country?.flag}
                              className="h-12 w-12 rounded-full"
                            />

                        </div>
                    </div>
                )
            })

            }

        </div>
       

    </div>
  )
}


const countries=[
  {
    name:"Nigeria",
    img:nigeria,
    flag:nigeriaflag,
    link:"/:nigeria"
   },
   {
    name:"Cameroon",
    img:ghana,
    flag:gambiaflag,
    link:"/cameroon"
   },
   {
    name:"Canada",
    img:ghana,
    flag:candaflag,
    link:"/canada"
   },

   {
    name:"United kingdom ",
    img:gambia,
    flag:ghanaflag,
    link:"/uk"
   },
   {
    name:"Ghana ",
    img:ghana,
    flag:ghana,
    link:"https://foreign-wives-reign.vercel.app/ghana-wives"
   },
   {
    name:"Kenya",
    img:ghana,
    flag:ghana,
    link:"https://foreign-wives-reign.vercel.app/kenya-wives"
   }


]