import React from 'react'
import {Link} from 'react-router-dom'

export const Landing = () => {
  return (
    <div className=' flex justify-center items-center h-[100vh] w-full'>
       <Link to={`catglass`}>
           <button className=' bg-red-500 text-white p-3 font-bold rounded-full mx-4'> Test-1 </button>
       </Link>
       <Link to={`scific`}>
       <button className=' bg-red-500 text-white p-3 font-bold rounded-full'> Test-2 </button>
       </Link>
    </div>
  )
}
