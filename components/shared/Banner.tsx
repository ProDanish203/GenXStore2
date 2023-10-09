import Image from 'next/image'
import React from 'react'

export const Banner = () => {
  return (
    <section className='flex lg:justify-between lg:items-center glassmorphism w-full lg:gap-10 gap-3 flex-wrap max-lg:flex-col xl:px-20 px-3 py-4 mb-10 rounded-lg shadow-sm'>

        <div className='flex-1'>
            <div>
                <h3 className='text-primary md:text-5xl text-3xl font-extrabold max-md:leading-[40px] leading-[60px] md:mb-10 mb-3'>Smart Digital Watch For <br className='max-md:hidden'/> Luxurious Life</h3>

                <p className='text-gray-400 my-4 lg:text-xl text-lg xl:max-w-[70%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos asperiores esse praesentium totam omnis, quia ut corrupti molestiae, excepturi perspiciatis assumenda doloremque necessitatibus hic commodi qui earum, veritatis aliquid sunt.
                </p>
            </div>

            <button className='bg-primary text-white py-2.5 px-3 rounded-md'>
                Order Now
            </button>
        </div>

        <div className='flex-1 hover:scale-105 relative max-w-[500px] h-[450px] max-lg:h-[350px] overflow-hidden'>
            <Image src='/images/watch1/front.jpg' alt='watch' width={500} height={500}
            className='object-cover  rounded-md w-full h-full'
            />
        </div>

    </section>
  )
}
