import React from 'react'
import { Link } from 'react-router-dom'
import chairImage from '../assets/chair.png';

const Landing = () => {

    const products = [
        {
          id: 1,
          image: "https://ik.imagekit.io/orm5ahbvhz/D-similar/furnitures.jpg?updatedAt=1711954378722",
          name: "Furniture",
          path: `scific`
        },
        {
          id: 2,
          image: "https://ik.imagekit.io/orm5ahbvhz/D-similar/glasses.jpg?updatedAt=1711954401211",
          name: "Glass",
          path: `catglass`
        },
    ]
    
    return (
        <div>
            <section className=' h-[95vh] flex justify-around bg-gradient-to-l from-[#DBDBF6] to-[#F1F1FE]'>
                <div className='w-[45%]'>
                    <img src={chairImage} alt="chair" />
                </div>
                <div className=' flex flex-col items-center justify-center'>
                    <p className=' text-2xl font-semibold my-2'>NEW COLLECTION</p>
                    <p className=' text-5xl font-bold mb-2'>Best Of NeoCon Gold Award</p>
                    <button className=' border-2 border-purple-400 text-purple-400 font-semibold rounded-md px-4 py-2 my-4 hover:bg-purple-400 hover:text-white hover:ease-in-out duration-300'> SHOP NOW</button>
                </div>
            </section>
            <section className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 place-items-center h-[100vh] bg-blue-50'>
                {
                    products.map((i, id) => (
                        <div key={i.id}>
                            <img src = {i.image} alt="Footwear" className='w-96 my-4 shadow-md' />
                            <Link to = {i.path}>
                                <span className=' border-2 border-purple-400 text-purple-400 my-2 px-4 py-2 cursor-pointer rounded-md text-xl font-bold hover:bg-purple-400 hover:text-white hover:ease-in-out duration-300'>{i.name}</span>
                            </Link>
                        </div>
                    ))
                }
            </section>
        </div>    
  )
}

export default Landing