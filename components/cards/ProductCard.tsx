import Image from 'next/image'
import Link from 'next/link'

export const ProductCard = ({data, redirectPath}:any) => {

  return (
    <div className='flex flex-col overflow-hidden gap-3 rounded-md glassmorphism py-4 px-3 max-lg:max-w-[300px] max-w-[350px] w-full'>
      
        <Link href={`/shop/${redirectPath}/${data._id}`} className='relative overflow-hidden hover:scale-105 max-lg:max-w-[300px] max-w-[350px] h-[250px]'>
            <Image src={`${data.images[0]}`} alt={data.title} fill
            className='relative object-cover rounded-md'
            />
        </Link>

        <div>
          <Link href={`/shop/${redirectPath}/${data._id}`}>
            <h3 className='text-2xl max-sm:text-xl font-extrabold text-white mb-5'>{data.title}</h3>
          </Link>

          <div className='mb-2'>
          {data.price.map((price:any, i:number) => (
            <div className="flex gap-2 items-baseline" key={i}>
                <p className="font-extrabold text-white">{price.ct} {price.rate}</p>
                <p className="old-rate font-light text-gray-300">{price.oldRate}</p>
                <p className='text-gray-300 text-sm'>-30% OFF</p>
            </div>       
          ))}
          </div>

            <Link href={`/shop/${redirectPath}/${data._id}`} className='text-white py-2.5 w-full bg-primary rounded-md block text-center'>Buy Now</Link>
        
        </div>

    </div>
  )
}
