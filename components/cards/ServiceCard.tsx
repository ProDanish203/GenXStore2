import Image from "next/image"
import Link from "next/link"

export const ServiceCard = () => {
  return (
    <div className='mt-10 flex max-lg:flex-col items-center justify-between lg:gap-10 gap-2 max-lg:px-3 py-4 rounded-md shadow-sm lg:bg-transparent lg:border-none glassmorphism max-lg:shadow-md'>
        
        <div className="flex-1 relative flex justify-center items-center"
        data-aos='fade-right' data-aos-delay='200' data-aos-duration='1200'
        >
            <Image src='/images/services/fb-mone.jpg' alt="Youtube-monetization" width={500} height={500}
            className="rounded-md object-cover"
            />
        </div>

        <div className="flex-1 max-lg:bg-transparent max-lg:border-none glassmorphism rounded-md lg:px-3 py-4"
        data-aos='fade-left' data-aos-delay='200' data-aos-duration='1200'
        >
            
            <div>
                <h2 className="text-white lg:text-2xl text-lg lg:font-extrabold font-semibold max-lg:text-center">🤑💰 Ready to Monetize Your Facebook Content? 💰🤑</h2>

                <h4 className="lg:text-lg text-white my-4">Unlock your earning potential with Facebook Monetization Service! 🚀</h4>

                <ul className="text-white max-lg:text-sm mb-4">
                    <li>👉 Are you a content creator?</li>
                    <li>👉 Love sharing your passion with the world?</li>
                    <li>👉 Want to turn your hobby into a profitable venture?</li>
                </ul>

                <p className="text-white mb-3">Look no further! 🌟</p>

                <p className="text-white">With Facebook Monetization Service, you can:</p>

                <ul className="text-white max-lg:text-sm mt-2">
                    <li>✅ Earn money from your engaging posts.</li>
                    <li>✅ Get paid for your entertaining videos.</li>
                    <li>✅ Generate income from your live streams.</li>
                    <li>✅ Monetize your dedicated fan base.</li>
                </ul>

                <p className="text-white mt-2">
                Alhamdulillah!😇, we are scamraud approved 
                </p>

                <p className="text-white my-2"><span className="font-bold">Note:</span> 
                Currently Our Services Available In  &nbsp;
                <span className="font-bold">
                 🇸🇦 KSA   🇦🇪 UAE  🇴🇲 OMAN 
                </span>
                </p>
                
                <div className="text-white">
                    <p className="text-lg font-bold">Price: </p>
                    <p>
                        <span className="text-xl"> 🇸🇦 400 SAR </span>
                        <span className="old-rate text-sm text-gray-400">500 SAR</span>
                    </p>
                    <p>
                        <span className="text-xl"> 🇦🇪 400 AED </span>
                        <span className="old-rate text-sm text-gray-400">500 AED</span>
                    </p>
                    <p>
                        <span className="text-xl"> 🇴🇲 40 OMR </span>
                        <span className="old-rate text-sm text-gray-400">50 OMR</span>
                    </p>
                </div>

                <div className="relative flex w-full items-center justify-between lg:gap-2 gap-4 flex-wrap mt-5">

                <Link href={`https://wa.me/${process.env.MOBILE_NUMBER}?text="Hey, I would like to have Facebook monetization service"`} target="_blank" 
                className="bg-primary hover:scale-105 rounded-lg max-lg:w-full w-[48%] py-2 text-center text-white">
                    Book Service Now
                </Link>

                <Link href={`https://wa.me/${process.env.MOBILE_NUMBER}?text="Hey, I would like to discuss more about the Facebook monetization service"`} target="_blank" 
                className="bg-secondary hover:scale-105 rounded-lg max-lg:w-full w-[48%] py-2 text-center text-white">
                    Discuss More
                </Link>

                </div>
            </div>


        </div>

    </div>
  )
}
