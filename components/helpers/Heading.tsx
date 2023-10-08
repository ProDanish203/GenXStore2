import Image from 'next/image';
import React from 'react'

interface Props{
    title: string;
    center?: boolean
}

export const Heading = ({title, center}: Props) => {
  return (
    <div className='relative mb-5'
    data-aos='fade-up' data-aos-delay='200' data-aos-duration='1200'
    >
        <h2 className={`${center && 'text-center'} text-4xl max-sm:text-3xl font-extrabold text-accent`}>{title}</h2>
        <Image src="/images/shade.png" alt={title} width={250} height={50}
        className={`absolute sm:left-[45%] left-[30%] right-[50%] ${center}`}/>
    </div>
  )
}
