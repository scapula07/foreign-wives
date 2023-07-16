import React from 'react'

export default function Forms() {
  return (
    <div className='py-8'>
            <div className='flex justify-center'>
                <h5 className='border border-yellow-400 w-11/12'></h5>
            </div>
            <div className='flex flex-col w-full space-y-6 px-10 py-8'>
                {[
                    "Wife's Name",
                "Wife's Phone Number",
                "Wife's Email",
                "Wife's Country",
                "Husband's Name",
                "Husband's Whatsapp Number",
                "Husband's Residing State:"
                
                ].map((text)=>{
                    return(
                        <div className='flex flex-col space-y-1'> 
                        <label className=''>{text}:</label>
                        <input
                        className='bg-slate-200 hover:bg-white hover:border-b w-4/5 py-2 outline-none px-2 '
                        />
                        </div>
                    )
                })

                }
            </div>

            <div className='flex justify-center'>
                <h5 className='border border-yellow-400 w-11/12'></h5>
            </div>
            
         
    </div>
  )
}
