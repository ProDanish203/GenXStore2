"use client"
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import Loading from "../loading";
import { ManageCard } from "@/components/cards";

const Admin = () => {

  const {data, isLoading, mutate, error} = useSWR(`/api/product/getProducts`, fetcher)

  if(isLoading) return Loading();

  return (
    <main className="px-[9%] max-lg:px-[4%] py-5 pt-24 mt-10">
        <section className='w-full'>

          <h3 className='text-5xl max-md:text-3xl font-extrabold text-center mb-10 text-white'
          data-aos='fade-up' data-aos-delay='200' data-aos-duration='1200'
          >Manage Products</h3>

        <div className="flex flex-wrap items-center gap-5">
        {data?.map((info:any, i:number) => (
          <ManageCard data={info} key={i}/>
        ))}
        </div>
          

        </section>

    </main>
  )
}

export default Admin