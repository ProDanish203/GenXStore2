import { watchData } from '@/util/data'
import Image from 'next/image'
import Link from 'next/link'

export const ProductCard = () => {
  return (
    <div className='flex flex-col overflow-hidden gap-3 rounded-md glassmorphism py-4 px-3 max-lg:max-w-[300px] max-w-[350px] w-full'>
        
        <div className='relative overflow-hidden max-lg:max-w-[300px] max-w-[350px] h-[250px]'>
            <Image src="/images/watch1/front.jpg" alt='title' fill
            className='relative object-cover rounded-md'
            />
        </div>

        <div className=''>
            <h3 className='text-2xl max-sm:text-xl font-extrabold text-white'>Men's watch</h3>
            <p className='text-white my-5'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero assumenda maiores tempora ullam? Voluptatem maiores, 
            </p>

            <div className='mb-2'>
            {watchData.price.map((data, i) => (
              <div className="flex gap-2 items-baseline" key={i}>
                  <p className="font-extrabold text-white">{data.ct} {data.rate}</p>
                  <p className="old-rate font-light text-gray-600">{data.oldRate}</p>
              </div>       
            ))}
            </div>

            <Link href={`/shop/1`} className='text-white py-2.5 w-full bg-primary rounded-md block text-center'>Buy Now</Link>
        
        </div>

    </div>
  )
}
