import React from 'react'
import "./auth.css"
import logo from "../../../assets/nwclogo.png"

export default function Auth() {
  return (
 <div className='nwc-bg relative' >
    <div className='flex flex-col w-full items-center py-20 absolute z-30 '>
        <img 
          src={logo}
          className="sm:h-56 sm:w-56 h-44 w-44 "
        />

        <div className='flex flex-col w-full items-center py-8 space-y-6 px-6 sm:px-0'>
            <h5 className='text-2xl '>Fill the Blank Spaces</h5>
            <div className='sm:w-1/2 w-full' style={{background:"rgba(253, 219, 209, 0.685)"}}>
            <div className='flex flex-col w-full space-y-6 px-10 py-8'>
                {[
                    "Enter your full name",
                    "Enter your Email",
                    "Enter your password"
                
                ].map((text)=>{
                    return(
                        <div className='flex flex-col space-y-1'> 
                        <label className=''>{text}:</label>
                        <input
                        className='bg-white hover:bg-white hover:border-b w-full py-2 outline-none px-2 '
                        />
                        </div>
                    )
                })

                }
            </div>

            </div>

        </div>


          <div className='flex flex-col space-y-6 sm:px-0 px-6'>
                <div className='flex items-center space-x-4'>
                    <input 
                        type={"checkbox"}
                    />
                    <h5 className='text-lg'>I accept all the terms & condition</h5>
                </div>
                <button className='bg-white text-green-500 font-semibold rounded-lg py-2 px-2'>Sign Up</button>


                <div className='flex items-center space-x-4 px-6 py-2  rounded-lg' style={{background:"rgba(150, 148, 148, 0.562"}}>
                   
                    <h5 className='sm:text-lg text-sm'>Already have an account?Login</h5>
                    <button className='bg-green-500 text-white font-semibold rounded-lg py-2 px-2'>Login</button>
                </div>

          </div>

    </div>

            
</div>
  )
}
