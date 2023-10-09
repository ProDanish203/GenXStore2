import { Banner, Watch } from '@/components/shared';
import React from 'react'

const Watches = () => {

  

  return (
    <main className='px-[9%] mt-16 max-lg:px-[4%] py-5 pt-24'>

      <Banner/>

      <div className='lg:mt-40 mt-10'>
        <h3 className='text-5xl font-extrabold text-white text-center my-5 lg:mb-10 headingLine'>Men's Watch</h3>
        <Watch/>
      </div>

      <div className='lg:mt-20 mt-10'>
        <h3 className='text-5xl font-extrabold text-white text-center my-5 lg:mb-10 headingLine'>Women's Watch</h3>
        <Watch/>
      </div>

      <div className='lg:mt-20 mt-10'>
        <h3 className='text-5xl font-extrabold text-white text-center my-5 lg:mb-10 headingLine'>Couple's Watch</h3>
        <Watch/>
      </div>

    </main>
  )
}

export default Watches;