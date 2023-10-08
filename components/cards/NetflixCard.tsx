import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const NetflixCard = () => {
  return (
    <div className='mt-10 flex max-lg:flex-col items-center justify-between lg:gap-10 gap-2'>
        
        <div className=' max-lg:px-3 px-4 py-4 rounded-md shadow-sm glassmorphism max-lg:shadow-md'
        data-aos='fade-up' data-aos-delay='200' data-aos-duration='1200'
        >
            <div className="relative flex justify-center items-center">
                <Image src='/images/services/netflix-service.jpg' alt="Netflix-Service" width={500} height={500}
                className="rounded-md object-cover"
                />
            </div>

            <div className="rounded-md lg:px-3 py-4">
            
            <div>
                <h2 className="text-white lg:text-2xl text-lg lg:font-extrabold font-semibold max-lg:text-center">🎬🍿 Unlock a World of Entertainment with Netflix! 🍿🎬</h2>

                <h4 className="lg:text-lg text-white my-4">We are providing netflix screen non-vpn. Ultra HD and has 100% replacement warranty</h4>

                <p className="text-white mb-3">Look no further! 🌟</p>

                <p className="text-white">With Our Netflix Service, you get:</p>

                <ul className="text-white max-lg:text-sm mt-2" >
                    <li className='flex items-center gap-2 hover:gap-4 w-fit'>
                        <i className='fas fa-angles-right text-primary text-lg'></i>
                        <p>6500+ TV Series</p>
                    </li>
                    <li className='flex items-center gap-2 hover:gap-4 w-fit'>
                        <i className='fas fa-angles-right text-primary text-lg'></i>
                        <p>50,000+ Movies</p>
                    </li>
                    <li className='flex items-center gap-2 hover:gap-4 w-fit'>
                        <i className='fas fa-angles-right text-primary text-lg'></i>
                        <p>10,000+ Live Channels</p>
                    </li>
                </ul>


                <div className="relative flex w-full items-center justify-between lg:gap-2 gap-4 flex-wrap mt-5">

                <Link href={`https://wa.me/${process.env.MOBILE_NUMBER}?text="Hey, I would like to have Netflix service"`} target="_blank" 
                className="bg-primary hover:scale-105 rounded-lg max-lg:w-full w-[48%] py-2 text-center text-white">
                    Book Service Now
                </Link>

                <Link href={`https://wa.me/${process.env.MOBILE_NUMBER}?text="Hey, I would like to discuss more about the Netflix service"`} target="_blank" 
                className="bg-secondary hover:scale-105 rounded-lg max-lg:w-full w-[48%] py-2 text-center text-white">
                    Discuss More
                </Link>

                </div>
            </div>


        </div>

        </div>

        <div className=' max-lg:px-3 px-4 py-4 rounded-md shadow-sm glassmorphism max-lg:shadow-md'
        data-aos='fade-up' data-aos-delay='400' data-aos-duration='1200'
        >
            <div className="relative flex justify-center items-center">
                <Image src='/images/services/iptv-service.jpg' alt="IPTV-Service" width={500} height={500}
                className="rounded-md object-cover"
                />
            </div>

            <div className="rounded-md lg:px-3 py-4">
            
            <div>
                <h2 className="text-white lg:text-2xl text-lg lg:font-extrabold font-semibold max-lg:text-center">🎬🍿 Unlock a World of Entertainment with IPTV Smarters Pro! 🍿🎬</h2>

                <h4 className="lg:text-lg text-white my-4">Get hassle free service with our yearly and monthly packages that comes with greater discounts.</h4>

                <p className="text-white mb-3">Look no further! 🌟</p>

                <p className="text-white">With Our IPTV Smarters Pro Service, you get:</p>

                <ul className="text-white max-lg:text-sm mt-2" >
                    <li className='flex items-center gap-2 hover:gap-4 w-fit'>
                        <i className='fas fa-angles-right text-primary text-lg'></i>
                        <p>6500+ TV Series</p>
                    </li>
                    <li className='flex items-center gap-2 hover:gap-4 w-fit'>
                        <i className='fas fa-angles-right text-primary text-lg'></i>
                        <p>50,000+ Movies</p>
                    </li>
                    <li className='flex items-center gap-2 hover:gap-4 w-fit'>
                        <i className='fas fa-angles-right text-primary text-lg'></i>
                        <p>10,000+ Live Channels</p>
                    </li>
                    <li className='flex items-center gap-2 hover:gap-4 w-fit'>
                        <i className='fas fa-angles-right text-primary text-lg'></i>
                        <p>Yearly and Monthly subscriptions</p>
                    </li>
                </ul>


                <div className="relative flex w-full items-center justify-between lg:gap-2 gap-4 flex-wrap mt-5">

                <Link href={`https://wa.me/${process.env.MOBILE_NUMBER}?text="Hey, I would like to have Netflix service"`} target="_blank" 
                className="bg-primary hover:scale-105 rounded-lg max-lg:w-full w-[48%] py-2 text-center text-white">
                    Book Service Now
                </Link>

                <Link href={`https://wa.me/${process.env.MOBILE_NUMBER}?text="Hey, I would like to discuss more about the Netflix service"`} target="_blank" 
                className="bg-secondary hover:scale-105 rounded-lg max-lg:w-full w-[48%] py-2 text-center text-white">
                    Discuss More
                </Link>

                </div>
            </div>


        </div>

        </div>        

    </div>
  )
}
