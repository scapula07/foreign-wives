import React from 'react'
import CreatePost from '../components/createPost'
import Feeds from '../components/feeds'
import Friends from '../components/friends'
import Notifications from '../components/Notifications'


export default function Overview() {
  return (
    <div className='flex w-full h-full space-x-8 justify-between'> 
        <div className='h-full ovrflow-y-scroll bg-white w-1/2 space-y-10 flex flex-col' >
            <CreatePost />
            <Feeds />


        </div>
        <div className='h-full ovrflow-y-scroll w-1/3 flex flex-col items-end space-y-8'>
           <Friends />
           <Notifications />


        </div>

    </div>
  )
}
