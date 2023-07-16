import React from 'react'
import wifecard from "../../../assets/bank.png"
import checklist from "../../../assets/check.png"
import club from "../../../assets/party.png"
import marriage from "../../../assets/marriage.png"
import star from "../../../assets/hotel.png"
import { Link } from 'react-router-dom'


export default function NavsButton() {
  return (
      <div className='flex flex-col space-y-8 py-10 items-center w-full px-6 sm:px-0'>
        {navs.map((nav)=>{
             return(
              
                <div className='flex items-center justify-between py-1 bg-green-700 sm:w-2/5 w-full rounded-r-full pl-8 rounded-bl-full '>
                    
                    <h5 className='text-white font-semibold text-center w-full text-lg hover:text-yellow-400'>
                        <Link to={nav?.link}>{nav?.name}</Link>
                    </h5>
                    <h5 className='flex items-center justify-center p-2 bg-white rounded-full'>
                        <img 
                          src={nav?.img}
                          className="h-10 w-10"
                         />
                       
                    </h5>
                </div>
             )
        })

        }

      </div>
  )
}



const navs=[
    {
        img:wifecard,
        name:"9ja Wife Card",
        link:"/9jawivescard"
    },
    {
        img:checklist,
        name:"Travelling Checklist",
        link:"/9jawives-visa"
    },
    {
        img:club,
        name:"NWC Club",
        link:"/nwc"
       
    },
    {
        img:marriage,
        name:"Special Marriage",
       
    },
    {
        img:star,
        name:"Accomoodations",
       
    }

]