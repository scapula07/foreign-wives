import React from 'react'
import {BsGrid} from "react-icons/bs"
import {BiMessageRounded} from "react-icons/bi"
import {RiUserHeartLine} from "react-icons/ri"
import logo from "../../../../assets/9ja.png"


export default function SideNav() {
  return (
    <div className='w-full h-full flex flex-col space-y-10 py-4 ' style={{background:"#1C241C"}}>
        <div className=''>
            <div className=' py-1 flex w-full justify-center' style={{background:"rgba(254, 230, 120, 1)"}}>
                <img 
                 src={logo}
                 className="h-14"
                />

            </div>

        </div>

        <div className='flex flex-col space-y-8 px-8'>
            {[{
                icon:<BsGrid />,
                text:"Dashboard",
                link:""


              },
              {
                icon:<BiMessageRounded />,
                text:"Messages"


              },
              {
                icon:<RiUserHeartLine />,
                text:"Friends"


              },
              {
                icon:<BsGrid />,
                text:"Groups"


              },
              {
                icon:<BsGrid />,
                text:"Activites"


              },
              {
                icon:<BsGrid />,
                text:"Pamper me"


              },{
                icon:<BsGrid />,
                text:"Support"


              },
              {
                icon:<BsGrid />,
                text:"Chauffeur"


              },
              {
                icon:<BsGrid />,
                text:"Affiliates"


              },
              {
                icon:<BsGrid />,
                text:"Resources"


              },
              {
                icon:<BsGrid />,
                text:"Account"


              }
            ].map((nav)=>{
                 return (
                    <div className='flex items-center space-x-4 '>
                         <h5 className='text-white font-semibold text-sm'>{nav?.icon}</h5>
                         <h5 className='text-white font-semibold text-sm'>{nav?.text}</h5>
                    </div>
                 )
            })

            }
        </div>
    </div>
  )
}
