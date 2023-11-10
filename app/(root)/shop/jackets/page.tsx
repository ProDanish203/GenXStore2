"use client"
import { Banner, Watch } from '@/components/shared';
import React from 'react'
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

const Watches = () => {

  const {data, isLoading, mutate, error} = useSWR(`/api/product/getProducts`, fetcher)
  // @ts-ignore
  const jackets = data?.filter(x => x.cat == 'jacket');

  return (
    <main className='px-[9%] mt-16 max-lg:px-[4%] py-5 pt-24'>

      <Banner heading="Jackets Winter Collection is here" text="Introducing GenX Store 2's Winter Wonderland: Embrace the Chill in Style! Explore Our Latest Collection of Cozy and Trendy Winter Jackets. ❄️ Your Winter Wardrobe Upgrade Starts Here – Shop Now for the Hottest Looks to Keep You Cool in the Cold! 🧥" image='/images/jackets/banner.jpg'/>

      <div className='lg:mt-40 mt-10'>
        <h3 className='text-5xl font-extrabold text-white text-center my-5 lg:mb-10 headingLine'>
        Jackets
        </h3>
        <Watch cat="jackets" data={jackets} loading={isLoading}/>
      </div>

    </main>
  )
}

export default Watches;