import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Hero = () => {
  return (
    <section className='min-h-[70vh] relative' >
      
      <div className='flex max-lg:flex-col-reverse items-center justify-center w-full gap-10 sm:mt-40 mt-20'>

        <div className='flex-1'>
          <h1 className='text-5xl max-sm:text-4xl font-extrabold leading-[60px] text-accent'
          data-aos='fade-up' data-aos-delay='300' data-aos-duration='1200'
          >Best Selling Watches <br /> And Perfumes</h1>
          <p className='text-lg text-gray-400 mt-5'
          data-aos='fade-up' data-aos-delay='500' data-aos-duration='1200'
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, error pariatur ipsum explicabo id modi obcaecati ut molestias alias quis tenetur dolor, numquam recusandae inventore et, dolores quas cumque distinctio.
          </p>

          <Link href="/shop" 
          data-aos='fade-up' data-aos-delay='650' data-aos-duration='1200'
          className='flex w-fit items-center justify-center gap-2 font-bold hover:gap-4 bg-accent hover:shadow-md text-white rounded-md py-3 px-4 mt-4'>
            <p>Explore</p>
            <i className='fas fa-arrow-right-long'></i>
          </Link>
        </div>

        <div className='flex-1 relative'>

          <div className='relative max-w-[500px] max-h-[500px]'
          data-aos='fade-down' data-aos-delay='300' data-aos-duration='1200'
          >
            <Image src='/images/logo.jpg' alt='GEN X Store' width={500} height={500}
            className='object-cover rounded-md shadow-sm hover:shadow-md'/>
          </div>
        </div>

      </div>

    </section>
  )
}
