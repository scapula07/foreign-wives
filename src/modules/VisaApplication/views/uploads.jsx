import React from 'react'

export default function Uploads() {
    let count=0
  return (
    <div className='py-8 px-10'>
        <div className=''>
            <h5 className='font-semibold text-lg'> Please Upload the following Documents:</h5>
            <div className='flex flex-col py-6 space-y-2'>
                { [
                    "Applicant's Passport Data Page (husband's)",
                    "Applicant's Passport Data Page (wife's)",
                    "Marriage certificate",
                    "Receipt from USA showing wife changed last name to married name (ONLY if she's changed her name already, otherwise NWC will match the name on her passport).",
                    "Wife's last visa page (even if it's expired)",
                    "Wedding pictures taken by both partners at the registry during vows/signing certificate and in front of the Registry Sign.",
                    "Clear passport photograph of the wife with white background:"

                  ].map((text)=>{
                    count ++
                     return(
                        <div className='flex flex-col '>
                            <h5 className='font-semibold'>
                                <span>
                                  {count}.
                                </span>
                                {text}
                                
                            </h5>
                            <div className='px-4'>
                                <input 
                                type="file"
                                />

                            </div>
                           
                        </div>
                     )
                  })

                }

            </div>
        </div>

    </div>
  )
}
