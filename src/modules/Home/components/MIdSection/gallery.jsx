import React from 'react'
import gallery from "./gallery.css"
import img1 from "../../../../assets/1.jpeg"
import img2 from "../../../../assets/2.jpeg"
import img3 from "../../../../assets/3.jpeg"
import img4 from "../../../../assets/4.jpeg"

export default function Gallery() {
  return (
    <div className='gallery'>
        {[img1,img2,img3,img4].map((src)=>{
            return(
                <img 
                  src={src}
                  />
            )
        })

        }
      

    </div>
  )
}
