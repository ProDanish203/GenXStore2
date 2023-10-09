"use client"
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'


export const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [search, setSearch] = useState("");

    const checkScroll = () => {
        window.scrollY >= 200 ? setScrolled(true) : setScrolled(false); 
      }
    
    useEffect(() => {
    window.addEventListener("scroll", checkScroll)    

    return () => window.removeEventListener("resize", checkScroll)    
    }, [])

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
    }

  return (
    <header className={`${scrolled ? 'py-3 header': 'py-5'} bg-bg z-40 fixed top-0 left-0 w-full  flex items-center justify-between px-10 gap-3 `}>
        <Link href='/' className='relative flex gap-2 items-center '
        data-aos='fade-right' data-aos-delay='100' data-aos-duration='1200'
        >
            <Image src='/images/header-logo.png'alt='logo' width={80} height={40}
            className='object-cover'
            />
            <span className='text-primary text-xl max-sm:hidden font-extrabold'>GEN X STORE 2</span>
        </Link>

        {/* Desktop Nav */}
        <nav className='max-md:hidden flex items-center justify-center gap-5 '>
            <Link href='/'
            className='text-white hover:text-primary text-md font-semibold flex items-center gap-2 justify-center'
            data-aos='fade-left' data-aos-delay='100' data-aos-duration='1200'
            >
                <i className='fas fa-home'></i>
                <p>Home</p>
            </Link>

            <Link href='/shop/watches'
            className='text-white hover:text-primary text-md font-semibold flex items-center gap-2 justify-center'
            data-aos='fade-left' data-aos-delay='350' data-aos-duration='1200'
            >
                <i className='fas fa-shopping-bag'></i>
                <p>Watches</p>
            </Link>

            <form onSubmit={handleSearch}
            data-aos='fade-left' data-aos-delay='500' data-aos-duration='1200'
            >
                <input type="search" placeholder='Search Products' 
                className='px-2 py-1 outline-none rounded-md text-md max-w-[250px]' 
                value={search}
                onChange={(e:any) => setSearch(e.target.value)}
                />
            </form>
        </nav>

        {/* Mobile Nav */}
        <nav className='md:hidden flex flex-col gap-4 absolute top-5 right-10 items-center justify-center bg-white text-black px-3 py-2 rounded-md shadow-sm'
        data-aos='fade-up' data-aos-delay='100' data-aos-duration='1200'
        >
            <Link href='/'>
                <i className='fas fa-home text-xl'></i>
            </Link>
            <Link href='/shop/watches'>
                <i className='fas fa-shopping-bag text-xl'></i>
            </Link>
        </nav>
    </header>
  )
}
