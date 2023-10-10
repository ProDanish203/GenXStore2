"use client"
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { EditForm } from '@/components/forms/EditForm';
import Loading from '../../loading';

const EditPage = ({params}: {params: {id: string}}) => {

    const {id} = params;
    const {data, isLoading, mutate, error} = useSWR(`/api/product/getProducts/${id}`, fetcher)

    if(isLoading) return Loading();

  return (
    <main className="px-[9%] max-lg:px-[4%] py-5 pt-24 mt-10">
        <section className='max-w-[800px] mx-auto w-full'>

          <h3 className='text-5xl max-md:text-3xl font-extrabold text-center mb-10 text-white'
          data-aos='fade-up' data-aos-delay='200' data-aos-duration='1200'
          >Update Product</h3>

          <EditForm data={data}/>

        </section>

    </main>
  )
}

export default EditPage;