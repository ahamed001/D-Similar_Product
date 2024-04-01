import React from 'react'
import { Link } from 'react-router-dom'
import glasses from '../assets/glasses.jpg'
import furniture from "../assets/furnitures.jpg"

export const Landing = () => {
  return (
    <div className=' flex justify-center items-center h-[100vh] w-full'>
      <Link to={`catglass`}>
        <img
          src="https://ik.imagekit.io/orm5ahbvhz/D-similar/glasses.jpg?updatedAt=1711954401211"
          alt="product" />
        {/* <button className=' bg-red-500 text-white p-3 font-bold rounded-full mx-4'> Test-1 </button> */}
      </Link>
      <Link to={`scific`}>
        <img
          src="https://ik.imagekit.io/orm5ahbvhz/D-similar/furnitures.jpg?updatedAt=1711954378722"
          alt="product" />
        {/* <button className=' bg-red-500 text-white p-3 font-bold rounded-full'> Test-2 </button> */}
      </Link>
    </div>
  )
}
