import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer