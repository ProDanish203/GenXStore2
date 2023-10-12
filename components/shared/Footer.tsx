import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
    <>
    <footer className="relative bg-black py-5 mt-10 px-[9%] max-lg:px-[4%]">

        <div className="grid-5">
            <div className="relative">
                <Image src='https://res.cloudinary.com/dwx3xdcc9/image/upload/v1697028474/genxstore_uploads/ncnipraxyw5m4lphhi34.jpg' alt="logo" 
                width={200}
                height={150}
                className='object-cover' />
            </div>

            <div>
                <h4 className="text-white text-2xl font-medium capitalize">contact us</h4>

                <ul>
                    <li className="footer-list-item">
                        <i className='fas fa-location-dot footer-logo'></i>
                        <address className='footer-detail'>Working Internationally </address>
                    </li>
                    <li className="footer-list-item">
                        <i className='fas fa-phone footer-logo'></i>
                        <Link href='tel:+923333960118'>+92-333-3960-118</Link>
                    </li>
                    <li className="footer-list-item">
                        <i className='fas fa-envelope footer-logo'></i>
                        <Link href='mailto:jawedh045@gmail.com'>jawedh045@gmail.com</Link>
                    </li>

                </ul>

            </div>

            <div>
            <h4 className="text-white text-2xl font-medium capitalize">Shop</h4>
                
                <ul>
                    <li className="footer-list-item">
                        <i className='fas fa-user footer-logo'></i>
                        <span>
                        <Link href='/'>
                            Home
                        </Link>
                        </span>
                    </li>
                    <li className="footer-list-item">
                        <i className='fas fa-user footer-logo'></i>
                        <span>
                        <Link href='/shop/watch'>
                            Watches
                        </Link>
                        </span>
                    </li>
                    <li className="footer-list-item">
                        <i className='fas fa-user footer-logo'></i>
                        <span>
                        <Link href='/shop/perfume'>
                            Perfumes
                        </Link>
                        </span>
                    </li>
                </ul>
            </div>

            <div>
            <h4 className="text-white text-2xl font-medium capitalize">About Us</h4>
                
                <ul className="footer-list">

                    <li className="text-md mt-2">
                        <span className='text-white'>Delivering our services and prioducts internationally with great and trusted delivery services.</span>
                    </li>

                </ul>

            </div>

        </div>

    </footer>

    <footer className="w-full py-2">
        <p className="text-center text-white text-sm">
            Copyright &copy; All Rights Reserved. | Gen X Store 2. Website developed by <span>
                <Link href="https://danish-siddiqui.vercel.app" target="_blank" className="text-purple-500">Danish Siddiui</Link>
            </span>
        </p>
    </footer>
    </>
  )
}
