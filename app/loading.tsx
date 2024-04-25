'use client'
import React, { useState } from 'react'

const Loading = () => {
    const [time, setTime] = useState(true);

    setTimeout(() => {
      setTime(false);
    }, 1000);
  return (
    <> 
    {time ?
        <>  
        <div className='bg-black position-fixed top-0 bottom-0 '>
        <span className="loading loading-spinner loading-lg text-info"></span>
    </div>
        </>
        :  null }
     </>
  )
}

export default Loading