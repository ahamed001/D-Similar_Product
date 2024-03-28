import React from 'react'
import { Link } from 'react-router-dom'

export const Landing = () => {
  return (
    <div>
      <header className='bg-black text-white font-semibold text-2xl py-2'>
        <div className=' absolute px-2'>
          EFFE
        </div>
        <ul className='flex justify-around relative'>
          <li>Home</li>
          <li>Glasses</li>
          <li>Furniture</li>
        </ul>
      </header>
      <div className=' flex justify-center items-center h-[100vh] w-full'>
        <Link to={`catglass`}>
          <button className=' bg-red-500 text-white p-3 font-bold rounded-full mx-4'> Test-1 </button>
        </Link>
        <Link to={`scific`}>
          <button className=' bg-red-500 text-white p-3 font-bold rounded-full'> Test-2 </button>
        </Link>
      </div>
      <footer className='flex justify-around bg-black text-white py-2'>
        <div className=' cursor-pointer'>
          <p>Contact us</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>

        <div className=' cursor-pointer'>
          <p>Location</p>
          <p>India</p>
          <p>England</p>
          <p>Canada</p>
        </div>

        <div className=' cursor-pointer'>
          <p>Get Help</p>
          <p>Order Status</p>
          <p>Delivery</p>
          <p>Payment Options</p>
        </div>

      </footer>
    </div>
  )
}
