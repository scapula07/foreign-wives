import React,{useState} from 'react'
import {BiSearch,BiNotification} from "react-icons/bi"
import {BsCartFill} from "react-icons/bs"
import {AiOutlineHeart,AiOutlineClose} from "react-icons/ai"
import { Link } from 'react-router-dom'
import logo from "../../assets/logo1.png"
import {BiMenu} from "react-icons/bi"




export default function Header() {
    const [trigger,setTrigger]=useState(false)
  return (
    <div className=' w-full bg-black'>
        <div className='flex w-full justify-between items-center'>
            <div>
                <img
                  src={logo}
                  className="w-10 h-10"
                 />

            </div>
            <main className='sm:hidden '>
               <BiMenu className='text-3xl text-yellow-400 ' onClick={()=>setTrigger(true)}/>
             </main>
                <div className='hidden sm:flex items-center space-x-6'>
                    {["HOME","ABOUT","COUNTRIES","BLOG","TESTIMONIALS","CONTACT US"].map((text)=>{
                        return(
                            <h5 className=' text-sm text-yellow-300 font-light hover:text-white'>{text}</h5>
                        )
                    })

                    }
                    {["Sign up","Login"].map((text)=>{
                        return(
                            <button className='border border-yellow-300 rounded-lg py-2 px-6 text-sm text-yellow-300 font-light hover:bg-yellow-300 hover:text-black '>{text}</button>
                        )
                    })

                    }
                    
                </div>



                {trigger&&

                    <div className=' sm:hidden  fixed top-0 right-0 w-1/2 bg-black z-10 h-1/2 py-6 px-6' >
                    <main className='w-full flex justify-end'>
                        <AiOutlineClose className='text-xl' onClick={()=>setTrigger(false)}/>
                    </main>

                      <div className=' sm:flex flex-col items-center space-y-5'>
                    
                            {["HOME","ABOUT","COUNTRIES","BLOG","TESTIMONIALS","CONTACT US"].map((text)=>{
                                return(
                                    <h5 className=' text-sm text-yellow-300 font-light hover:text-white'>{text}</h5>
                                )
                            })

                            }
                            {["Sign up","Login"].map((text)=>{
                                return(
                                    <button className='border border-yellow-300 rounded-lg py-2 px-6 text-sm text-yellow-300 font-light hover:bg-yellow-300 hover:text-black '>{text}</button>
                                )
                            })

                            }
                                    
                       </div>
                    </div> 
                 }

        </div>
          
  

    </div>
  )
}