import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ManageCard = ({data}:any) => {
  return (
    <>
    <div className='flex flex-col justify-center items-center gap-2 rounded-md w-[200px] min-h-[150px] max-xs:w-[150px] glassmorphism py-2 px-2'>

        <div className='relative'>
            <Image src={data.images[0]} alt={data.title} width={70} height={70}
            className='rounded-md object-cover'
            />
        </div>

        <div className='flex flex-col gap-2 items-center'>
            <h5 className='text-white text-center text-sm'>{data.title}</h5>
            
            <Link href={`/edit/${data._id}`}
            className='text-white bg-primary px-4 py-1 rounded-md'
            >
                Update
            </Link>
        </div>

    </div>
    </>
  )
}
