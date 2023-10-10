"use client"
import { watchData } from "@/util/data";
import { getURL } from "next/dist/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { useState } from "react";
import Loading from "@/app/(root)/loading";

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
                <div className="relative max-w-[500px] w-full max-lg:h-[350px] h-[600px]">
                    <Image src={data?.images[index]} alt={data?.cat} fill
                    className="object-cover rounded-md"
                    />
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

                    <div className="flex items-center flex-wrap gap-2 mt-3">
                        {data?.images.map((img:string, i:number) => (
                            <div key={i}
                            onClick={() => setIndex(i)}
                            className="hover:scale-95"
                            >
                                <Image src={img} alt={data?.cat} width={50} height={50}
                                className="object-cover rounded-md cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-5">
                        {data?.price.map((price:any, i:number) => (
                            <div className="flex gap-2 items-baseline" key={i}>
                                <p className="lg:text-3xl text-xl font-extrabold text-white">{price.ct} {price.rate}</p>
                                <p className="old-rate lg:text-lg font-light text-gray-600">{price.oldRate}</p>
                            </div>       
                        ))}
                    </div>

                    <p className="text-white text-xl font-bold flex items-center gap-2 hover:gap-4 mt-5">
                        <i className="fas fa-truck"></i>
                        Free Delivery 
                    </p>

                    <div className="mt-5 w-full">
                        <Link href={`https://wa.me/+923333960118?text=http://localhost:3000${url}`} target='_blank'
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