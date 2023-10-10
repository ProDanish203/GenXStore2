"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const EnterLoader = () => {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className={`${loading ? "": "hide-loader"}`}>
      <div className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50 bg-bg'>
        <div className='relative w-[250px] h-[250px]'>
          <Image src='/images/logo.jpg' alt='Logo' fill/>
        </div>
    </div>
    </div>
    </>
  )
}
