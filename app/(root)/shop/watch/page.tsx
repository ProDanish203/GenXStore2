"use client"
import { Banner, Watch } from '@/components/shared';
import React from 'react'
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

const Watches = () => {

  const {data, isLoading, mutate, error} = useSWR(`/api/product/getProducts`, fetcher)
  // @ts-ignore
  const menWatch = data?.filter(x => x.cat == 'men-watch');
  // @ts-ignore
  const womenWatch = data?.filter(x => x.cat == 'women-watch');
  // @ts-ignore
  const coupleWatch = data?.filter(x => x.cat == 'couple-watch');


  return (
    <main className='px-[9%] mt-16 max-lg:px-[4%] py-5 pt-24'>

    <Banner heading="Smart Digital Watch For Luxurious Life" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos asperiores esse praesentium totam omnis, quia ut corrupti molestiae, excepturi perspiciatis assumenda doloremque necessitatibus hic commodi qui earum, veritatis aliquid sunt." image='/images/watch1/front.jpg'/>

      <div className='lg:mt-40 mt-10'>
        <h3 className='text-5xl font-extrabold text-white text-center my-5 lg:mb-10 headingLine'>Men's Watch</h3>
        <Watch data={menWatch} loading={isLoading}/>
      </div>

      <div className='lg:mt-20 mt-10'>
        <h3 className='text-5xl font-extrabold text-white text-center my-5 lg:mb-10 headingLine'>Women's Watch</h3>
        <Watch data={womenWatch} loading={isLoading}/>
      </div>

      <div className='lg:mt-20 mt-10'>
        <h3 className='text-5xl font-extrabold text-white text-center my-5 lg:mb-10 headingLine'>Couple's Watch</h3>
        <Watch data={coupleWatch} loading={isLoading}/>
      </div>

    </main>
  )
}

export default Watches;