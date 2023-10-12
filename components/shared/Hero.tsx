import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className='min-h-[70vh] relative'>
      
      <div className='flex max-lg:flex-col-reverse items-center justify-center w-full gap-10'>

        <div className='flex-1'>
          <h1 className='text-5xl max-md:text-4xl font-extrabold leading-[60px] text-white'
          data-aos='fade-up' data-aos-delay='100' data-aos-duration='1200'
          >Best Selling Watches <br /> And Perfumes</h1>
          <p className='text-lg text-gray-400 mt-5'
          data-aos='fade-up' data-aos-delay='150' data-aos-duration='1200'
          >
            We deal in all kinds of social media marketing services such as facebook and youtube monetization. We are scamraud approved, Alhamdulillah, with upto 500+ happy client and reviews. Our store contain all kinds of luxurious and digital watches.
          </p>

          <Link href="/shop/watch" 
          data-aos='fade-up' data-aos-delay='100' data-aos-duration='1200'
          className='flex w-fit items-center justify-center gap-2 font-bold hover:gap-4 bg-accent hover:shadow-md text-white rounded-md py-3 px-4 mt-4'>
            <p>Explore</p>
            <i className='fas fa-arrow-right-long'></i>
          </Link>
        </div>

        <div className='flex-1 relative'>

          <div className='relative max-w-[500px] max-h-[500px]'
          data-aos='fade-down' data-aos-delay='100' data-aos-duration='1200'
          >
            <Image src='https://res.cloudinary.com/dwx3xdcc9/image/upload/v1697028474/genxstore_uploads/ncnipraxyw5m4lphhi34.jpg' alt='GEN X Store' width={500} height={500}
            className='object-cover rounded-md shadow-sm hover:shadow-md'/>
          </div>
        </div>

      </div>

    </section>
  )
}
