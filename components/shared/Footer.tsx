import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Facebook,
  Home,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Plus,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  return (
    <div className="w-full">
      <footer className="bg-gray-100 pt-12 pb-8 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="mb-6">
                <Image
                  src="/images/header-logo.png"
                  alt="Gen X Store 2 Logo"
                  width={100}
                  height={50}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                Delivering our services and products internationally with great
                and trusted delivery services.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-rose-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-rose-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-rose-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-rose-600" />
                  </div>
                  <address className="ml-3 text-gray-600 not-italic">
                    Working Internationally
                  </address>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0">
                    <Phone className="w-5 h-5 text-rose-600" />
                  </div>
                  <Link
                    href="tel:+923333960118"
                    className="ml-3 text-gray-600 hover:text-rose-600 transition-colors"
                  >
                    +92-333-3960-118
                  </Link>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0">
                    <Mail className="w-5 h-5 text-rose-600" />
                  </div>
                  <Link
                    href="mailto:generationx.0515@gmail.com"
                    className="ml-3 text-gray-600 hover:text-rose-600 transition-colors"
                  >
                    generationx.0515@gmail.com
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-4">Shop</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="flex-shrink-0">
                    <Home className="w-5 h-5 text-rose-600" />
                  </div>
                  <Link
                    href="/"
                    className="ml-3 text-gray-600 hover:text-rose-600 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0">
                    <Plus className="w-5 h-5 text-rose-600" />
                  </div>
                  <Link
                    href="/shop/watch"
                    className="ml-3 text-gray-600 hover:text-rose-600 transition-colors"
                  >
                    Watches
                  </Link>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0">
                    <Plus className="w-5 h-5 text-rose-600" />
                  </div>
                  <Link
                    href="/shop/jackets"
                    className="ml-3 text-gray-600 hover:text-rose-600 transition-colors"
                  >
                    Leather Jackets
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-4">
                About Us
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Delivering our services and products internationally with great
                and trusted delivery services. We pride ourselves on quality
                products and exceptional customer service.
              </p>
              <div className="mt-4">
                <Link
                  href="#"
                  className="inline-flex items-center text-rose-600 hover:text-rose-700 transition-colors"
                >
                  Learn more
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} All Rights Reserved. | Gen X
              Store 2
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Website developed by{" "}
              <Link
                href="https://danish-siddiqui.vercel.app"
                target="_blank"
                className="text-rose-400 hover:text-rose-300 transition-colors"
              >
                Danish Siddiqui
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
