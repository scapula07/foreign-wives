import React from 'react'
import {BsGrid} from "react-icons/bs"
import {BiMessageRounded} from "react-icons/bi"
import {RiUserHeartLine} from "react-icons/ri"
import logo from "../../../../assets/9ja.png"
import {MdOutlinePerson2} from "react-icons/md"
import {GiTeacher} from "react-icons/gi"
import {TbAffiliate} from "react-icons/tb"
import {GrResources} from "react-icons/gr"
 
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
                icon:<MdOutlinePerson2 />,
                text:"Account"


              },
              {
                icon:<RiUserHeartLine />,
                text:"Services"


              },
              {
                icon:<GiTeacher />,
                text:"Activities",
                link:"activities"


              },
              {
                icon:<BsGrid />,
                text:"Subscriptiions"


              },
              {
                icon:<BsGrid />,
                text:"Support"


              },
              {
                icon:<TbAffiliate />,
                text:"Affiliates"


              },
              {
                icon:<GrResources />,
                text:"Resources"


              },
              {
                icon:<BsGrid />,
                text:"Share"


              }
            ].map((nav)=>{
                 return (
                    <div className='flex items-center space-x-4 hover:bg-yellow-500 hover:py-2 hover:px-2 hover:rounded-sm  '>
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
