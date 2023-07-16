import React from 'react'
import "./visa.css"
import logo from "../../../assets/logo3.png"
import group1 from "../../../assets/banner.png"
import group2 from "../../../assets/group1.png"
import group3 from "../../../assets/group2.png"
import group4 from "../../../assets/group4.png"
import group5 from "../../../assets/group5.png"
import group6 from "../../../assets/group6.png"


export default function VisaView() {
  return (
    <div>
        <div className='bg-img relative'>

         </div>
         <div className='h-full w-full absolute top-0 opacity-90 flex items-center justify-center bgl-img' style={{    background: "linear-gradient(to bottom, rgb(1, 201, 91), rgb(5, 51, 32))"}}>
             <img 
              src={logo}
              className="sm:h-72 sm:w-72 h-44 w-44"
             />
        </div>

        <div className='flex flex-col items-center py-10 w-full sm:space-y-10 space-y-6'>
           <div className='flex justify-center w-full '>
                <h5 className='border-4 border-yellow-400 w-3/4 ' style={{    background: "linear-gradient(to right, gold, rgb(131, 89, 0))"}}></h5>
            </div>
             <img 
               src={group1}
               className="w-1/2 "
               
             />
          <div className='flex justify-center w-full '>
                <h5 className='border-4 border-yellow-400 w-3/4 ' style={{    background: "linear-gradient(to right, gold, rgb(131, 89, 0))"}}></h5>
            </div>

        </div>

        <Groups />
        <div className='w-full flex flex-col items-center py-10 space-y-14'>
          <GroupBelow />
          <GroupLast />
        </div>
      

    </div>
  )
}




const Groups=()=>{
    return(
        <div className='flex flex-col items-center space-y-8'>
            <img
             src={group2}
             className="sm:w-1/2 w-3/4"
             />
            <img
                 src={group3}
                 className="sm:w-1/2 w-3/4"
            />

        </div>
    )
}

const GroupBelow=()=>{
    return(
        <div className='flex flex-col items-center space-y-8 border-8 border-yellow-400 py-8  sm:w-3/4 w-11/12'>
            <div className='flex flex-col items-center py-4 space-y-6'>
                <img 

                   src={group4}
                   className="sm:w-1/2 w-4/5"
                
                 />
                <h5 className='text-xl font-semibold text-green-700'>Visa On Arrival (VOA)</h5>

            </div>

            <div className='flex flex-col items-center space-y-4 '>
                <h5 className='text-lg font-semibold'>What is Visa On Arrival?</h5>
                <div className='text-white w-3/4 px-4 py-4 rounded-tl-3xl rounded-br-3xl text-sm sm:text-lg' style={{background: "linear-gradient(to bottom, rgb(1, 201, 91), rgb(5, 51, 32))"}}>
                    A visa on arrival is a type of visa that is granted upon arrival in a foreign country. It is issued to foreign nationals who need a visa to enter the country but do not require them to apply in advance of travel. Visa on arrival is available for travelers visiting for short-term visits. It offers a convenient process for travelers, saving them from the hassles of extensive paperwork and long queues.

                </div>

            </div>
            <div className='flex flex-col items-center space-y-4 '>
                <h5 className='text-lg font-semibold text-center sm:text-left'>You will need to submit the following with your application.</h5>
                <div className='text-white w-4/5 px-4 py-4 rounded-tl-3xl rounded-br-3xl text-sm sm:text-lg' style={{background: "linear-gradient(to bottom, rgb(1, 201, 91), rgb(5, 51, 32))"}}>
                    <ol>
                        <li>1. A valid passport for a minimum of 6 months. </li>
                        <li>2. Two passport photos with white background. </li>
                        <li>3. Your travel itinerary; arrival and return ticket. </li>
                   </ol>
                </div>

            </div>
           <div className='w-full flex justify-center '>
            <button className='bg-red-500 text-white py-2 px-4 text-sm font-semibold'>APPLY TO VOA</button>

           </div>

        </div>
    )
}


const GroupLast=()=>{
    return(
        <div className='flex flex-col items-center space-y-8 border-8 border-yellow-400 py-8  sm:w-3/4 w-11/12'>
            <div className='flex flex-col items-center py-4 space-y-6'>
                <img 

                   src={group5}
                   className="sm:w-1/2 w-4/5"
                
                 />
                <h5 className='text-xl font-semibold text-green-700'>Visa Stamp Extension</h5>

            </div>

            <div className='flex flex-col items-center space-y-4 '>
                <h5 className='text-lg font-semibold text-center sm:text-left'>How long can you stay in Nigeria on a visa?</h5>
                <div className='text-white w-3/4 px-4 py-4 rounded-tl-3xl rounded-br-3xl' style={{background: "linear-gradient(to bottom, rgb(1, 201, 91), rgb(5, 51, 32))"}}>
                    <h5 className='font-bold text-center text-lg'>90 day</h5>
                    When you arrives in Nigeria, everyone is given a 30 Day stamp from date of entry into Nigeria. You will need to pay for a stamp extension if you desire to stay more than 30 days.
                </div>

            </div>
                 <div className='flex flex-col items-center py-4 space-y-6'>
                        <img 

                        src={group6}
                        className="w-1/2"
                        
                        />

                    </div>

                    <div className='flex flex-col items-center space-y-4 '>
                        <h5 className='text-lg font-semibold text-center sm:text-left'>What happens if you overstay your visit in Nigeria?</h5>
                        <div className='text-white w-3/4 px-4 py-4 rounded-tl-3xl rounded-br-3xl text-sm sm:text-lg' style={{background: "linear-gradient(to bottom, rgb(1, 201, 91), rgb(5, 51, 32))"}}>
                            Foreign visitors who exceed the allowed duration of their visa are typically considered undesirable individuals and may face a ban from entering Nigeria for a certain period of time. This ban restricts them from applying for a visa or re-entering Nigeria during the specified duration. Additionally, there may be fines imposed for each day of overstay on the visa.
                        </div>

                    </div>
            
                    <div className='flex flex-col items-center space-y-4 '>
                        <h5 className='text-lg font-semibold text-center sm:text-left'>How soon can I get my Visa Stamp Extension?</h5>
                        <div className='text-white w-3/4 px-4 py-4 rounded-tl-3xl rounded-br-3xl text-sm sm:text-lg' style={{background: "linear-gradient(to bottom, rgb(1, 201, 91), rgb(5, 51, 32))"}}>

                            You must receive your stamp extension before your initial extension expires. Oftentimes you can get same day service. Fill out the application to schedule your appointment to receive your Visa Stamp Extension.
                            </div>

                    </div>
           <div className='w-full flex justify-center '>
            <button className='bg-red-500 text-white py-2 px-4 text-sm font-semibold'>VISA STAMP EXTENSION</button>

           </div>

        </div>
    )
}