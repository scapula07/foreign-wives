import React from 'react'
import delivery from "../../../assets/deliveryIcon.png"
import pay from "../../../assets/payIcon.png"
import policy from "../../../assets/policyIcon.png"

export default function MidSection() {
  return (
    <div className='px-10'>
        <div className='flex flex-col space-y-6 py-8'>
            {actions.map((item)=>{
                 return(
                    <div className='flex items-center space-x-4'>
                            <img 
                            src={item?.img}
                            className="h-10 w-10"
                            />
                            <h5 className='bg-green-600 py-1 px-4 text-white text-lg rounded-tr-xl'>{item?.name}</h5>

                            {/* {trigger&&
                                <div>

                                </div>

                            } */}
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


const actions=[
    {
        img:delivery,
        name:"DELIVERY",
       
    },
    {
        img:pay,
        name:"PAYMENT OPTIONS"
    },
    {
        img:policy ,
        name:"REFUND POLICY"
    },
    {
        img:policy,
        name:"PROCESSING"
    }
]
