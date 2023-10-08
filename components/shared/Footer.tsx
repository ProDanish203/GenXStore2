import Image from "next/image"
import Link from "next/link"


export const Footer = () => {
  return (
    <footer className="relative bg-black py-5 mt-10 px-[9%] max-lg:px-[4%]">

        <div className="grid-5">
            <div className="relative">
                <Image src='/images/logo.jpg' alt="logo" 
                width={200}
                height={150}
                className='object-cover' />
            </div>

            <div>
                <h4 className="text-white text-2xl font-medium capitalize">contact us</h4>

                <ul>
                    <li className="footer-list-item">
                        <i className='fas fa-location-dot footer-logo'></i>
                        <address className='footer-detail'>123 street, houston road, Washington, USA</address>
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
            <h4 className="text-white text-2xl font-medium capitalize">Account</h4>
                
                <ul>
                    <li className="footer-list-item">
                        <i className='fas fa-user footer-logo'></i>
                        <span>Sign in</span>
                    </li>
                    <li className="footer-list-item">
                        <i className='fas fa-user footer-logo'></i>
                        <span>Login</span>
                    </li>
                </ul>
            </div>

            <div>
            <h4 className="text-white text-2xl font-medium capitalize">About Us</h4>
                
                <ul className="footer-list">

                    <li className="footer-list-item">
                        <i className='fas fa-map footer-logo'></i>
                        <span className='footer-detail'>About Us</span>
                    </li>

                </ul>

            </div>

        </div>

    </footer>
  )
}
