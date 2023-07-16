import React from 'react'
import bg from "../../../assets/bgthird.jpeg"
import wedding from "../../../assets/wedding.jpeg"
import airport from "../../../assets/airportEscort.jpeg"
import couple from "../../../assets/couple.jpeg"
import visa from "../../../assets/visa.png"


const Card=({name,img})=>{
    return(
      <div className='relative w-full border-8'>
         <img 
           src={img}
           className="w-full h-72"
         
          />
           <div className='absolute top-0 h-full w-full z-10 hover:bg-yellow-600 hover:opacity-90 hover:text-white flex flex-col justify-end px-4 py-4 space-y-2'>
               <h5 className='text-5xl font-semibold relative z-20'>{name}</h5>
              

          </div>

      </div>
    )
}


export default function LowSection() {
  return (
    <div className='w-full relative nigeria-h' >
        <img 
           src={bg}
           className="w-full h-full"
        />

        <div className='flex flex-col w-full absolute top-0 z-10 py-8 sm:space-y-28 space-y-10  px-4 sm:px-0'>
                <div className='sm:flex-row flex flex-col-reverse items-center justify-center sm:space-x-10  '>
                  <div className='flex flex-col space-y-2 py-6 sm:py-6 w-full sm:w-1/4' >
                    <h5 className=' hidden sm:block text-6xl text-3xl font-semibold sm:text-white text-yellow-400 '>
                            Airport 
                            <br></br>
                            Conceige 
                            <br></br>
                            Services
                     </h5>
                     <h5 className='sm:hidden block text-3xl font-semibold sm:text-white text-yellow-400 '>
                            Airport Conceige 
                            <br></br>
                            Services
                     </h5>
                            <h5 className='text-sm text-white'>
                            I am the bread of life, that came from heaven. 
                            <br></br>
                            Whoever eat my body will live forever
                            </h5>

                        </div>
                        <div className='sm:w-1/4 w-full' >
                          <Card 
                            name={"AIRPORT CONCEIGE SERVICES"}
                            img={airport}
                            />
                        </div>
                    
                   

                </div>
                <div className='flex sm:flex-row flex-col  items-center w-full sm:space-x-8 space-y-20 sm:space-y-0 sm:px-10'>

                        <div className='flex sm:flex-row flex-col items-center justify-center sm:space-x-10 space-y-6 sm:space-y-0  sm:w-1/2 w-full '>
                            <div className='flex flex-col  space-y-2 w-full sm:w-1/2'>
                                    <h5 className='text-6xl hidden sm:block font-semibold text-white '>
                                        Visa
                                        <br></br>
                                        Services
                                    </h5>
                                    <h5 className='text-3xl sm:hidden block  font-semibold sm:text-white  text-yellow-400'>
                                        Visa
                                    
                                        Services
                                    </h5>
                                <h5 className='text-sm text-white'>
                                I am the bread of life, that came from heaven. 
                                <br></br>
                                Whoever eat my body will live forever
                                </h5>
                           


                            </div>
                            <div className='sm:w-3/6 w-full'>
                                <Card 
                                    name={"VISA SERVICES"}
                                    img={visa}
                                />
                            </div>
                          

                        </div>

                        <div className='flex sm:flex-row flex-col items-center justify-center sm:space-x-3 sm:w-1/2 w-full space-y-6 sm:space-y-0' >
                              <div className='sm:w-3/6 w-full'>
                                    <Card 
                                        name={"NIGER WIFE CARD"}
                                        img={couple}
                                        />
                                </div>
                                <div className='flex flex-col  space-y-2 w-full sm:w-1/2'>
                                    <h5 className='hidden sm:block text-6xl font-semibold text-white '>
                                      Niger Wife
                                        <br></br>
                                        Card
                                    </h5>
                                    <h5 className='sm:hidden block text-3xl font-semibold text-yellow-400  '>
                                      Niger Wife Card
                                    </h5>
                                    <h5 className='text-sm text-white'>
                                    I am the bread of life, that came from heaven. 
                                    <br></br>
                                    Whoever eat my body will live forever
                                    </h5>

                                </div>
                        

                        </div>

                </div>


                <div className='flex sm:flex-row flex-col items-center justify-center sm:space-x-10 space-y-6 sm:space-y-0 '>
                  <div className='flex flex-col space-y-2 sm:w-1/4 w-full'>
                       <h5 className='hidden sm:block text-6xl font-semibold text-white  '>
                           Nigeria
                            <br></br>
                            Weddings
                            
                        </h5>
                        <h5 className='block sm:hidden text-3xl font-semibold text-yellow-400  '>
                           Nigeria Weddings
                            
                        </h5>
                            <h5 className='text-sm text-white'>
                            I am the bread of life, that came from heaven. 
                            <br></br>
                            Whoever eat my body will live forever
                            </h5>

                        </div>
                        <div className='sm:w-1/4 w-full'>
                          <Card 
                            name={"NIGERIA WEDDINGS"}
                            img={ wedding}
                            />
                        </div>
                    
                   

                </div>
                

        </div>

    </div>
  )
}
