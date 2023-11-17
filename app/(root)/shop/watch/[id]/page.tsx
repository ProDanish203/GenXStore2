"use client"
import { getURL } from "next/dist/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { useState } from "react";
import Loading from "@/app/(root)/loading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const ProductPage = ({params}: {params: {id: string}}) => {

    const {id} = params;
    const [index, setIndex] = useState(0);
    
    const {data, isLoading, mutate, error} = useSWR(`/api/product/getProducts/${id}`, fetcher)
    if(isLoading) return Loading();
    const url = getURL()

  return (
    <main className="px-[9%] mt-16 max-lg:px-[4%] py-5 pt-24">

        <section className="glassmorphism">
            <div className="flex max-lg:flex-col gap-5">
                <div className="flex items-center md:py-10 py-5 justify-center max-h-[500px] h-full max-md:max-w-[400px] max-w-[500px] w-full">

                <Swiper
                className="max-w-[300px] flex items-center justify-center w-full rounded-md"
                modules={[Navigation, Pagination]}
                navigation
                pagination={{clickable: true}}
                spaceBetween={0}
                slidesPerView={1}
                >
                {
                data?.images.map((img:string, index:number) => (
                    <SwiperSlide key={index}>
                    <div className="relative flex items-center justify-center max-w-[350px] max-h-[350px] w-full h-full ">

                    <Image src={img} alt={data?.cat} width={500} height={500}
                    className="object-contain w-full h-full rounded-md"
                    />
                    </div>
                    </SwiperSlide>
                ))
                }
                
                </Swiper>
                </div>

                <div className="pt-10 max-lg:px-3 max-lg:pb-5">

                    <h2 className="text-white text-2xl font-extrabold">{data?.title}</h2>
                    <p className="text-sm font-light text-primary">Category &gt; {data?.cat}</p>

                    <div className="lg:mt-10 mt-5">
                        <p className="text-white flex items-center gap-2 hover:gap-4">
                            <i className="fas fa-angle-right text-primary text-xl"></i>
                            {data?.desc}
                        </p>
                    </div>

                    <div className="mt-5">
                        {data?.price.map((price:any, i:number) => (
                            <div className="relative" key={i}>
                                <p className="lg:text-3xl text-xl block font-extrabold text-white">{price.ct} {price.rate}</p>
                                <div className="flex gap-2 items-center">
                                    <p className="old-rate lg:text-lg font-light text-gray-300">{price.oldRate}</p>
                                    <p className="text-sm text-gray-400">-30% OFF</p>
                                </div>
                            </div>       
                        ))}
                    </div>

                    <p className="text-white text-xl font-bold flex items-center gap-2 hover:gap-4 mt-5">
                        <i className="fas fa-truck"></i>
                        Free Delivery 
                    </p>

                    <div className="mt-5 w-full">
                        <Link href={`https://wa.me/+923333960118?text=https://gen-x-store2.vercel.app${url}`} target='_blank'
                        className="text-white bg-primary py-2.5 text-center w-full px-10 max-lg:w-full block rounded-md font-semibold"
                        >
                            Buy Now
                        </Link>
                    </div>

                </div>

            </div>
        </section>

    </main>
  )
}

export default ProductPage