import React from 'react'

const Header = () => {
  return (
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
  )
}

export default Header