import { ProductCard } from '../cards'
import Loading from '@/app/(root)/loading';

export const Watch = ({cat,data, loading}: any) => {
  if(loading) return Loading();
  return (
    <div className='flex flex-wrap items-center justify-center gap-5 mt-20'>
    {
      data?.map((data:any, index:number) => (
        <ProductCard data={data} redirectPath={cat} key={index}/>
      ))
    }
    </div>
  )
}
