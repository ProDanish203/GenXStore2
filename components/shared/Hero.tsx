"use client";
import { getProductbyId } from "@/app/axios/main";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProductbyId("6525c4ae87a155f3869342bb"),
  });
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-lg my-8 mx-auto max-w-full">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-amber-500"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-amber-100 opacity-30"></div>
      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-red-100 opacity-30"></div>

      <div className="flex max-lg:flex-col-reverse items-center justify-between w-full gap-8 p-6 md:p-10 lg:p-12 relative z-10">
        {/* Content */}
        <div className="lg:flex-1 max-w-2xl">
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1200"
          >
            Luxury Timepieces <br />
            <span className="text-rose-600">For The Discerning</span>
          </h1>

          <p
            className="text-base md:text-lg text-gray-600 mt-6 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1200"
          >
            Discover our curated collection of premium watches that combine
            elegant design with precision craftsmanship. From classic
            leather-strapped timepieces to modern digital innovations, find the
            perfect watch to elevate your style.
          </p>

          <div
            className="flex gap-4 mt-8"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            <Link
              href="/shop/watch"
              className="inline-flex items-center px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              <span>Explore Collection</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <Link
              href="/shop/watch"
              className="inline-flex items-center px-6 py-3 border border-rose-600 text-rose-600 hover:bg-rose-50 font-medium rounded-lg transition-all duration-300"
            >
              <span>Trending Now</span>
            </Link>
          </div>

          <div
            className="flex items-center gap-4 mt-8"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="1200"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                >
                  <Image
                    src={`/images/dummy-user.webp`}
                    alt="Customer"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">500+</span> happy
              customers
            </p>
          </div>
        </div>

        {/* Image */}
        <div
          className="lg:flex-1 w-full max-w-lg"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1200"
        >
          <div className="relative overflow-hidden rounded-xl shadow-xl aspect-square transform transition-transform duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 to-transparent z-0"></div>
            <Image
              src={data && data.images[0]}
              alt="Luxury Watch"
              width={600}
              height={600}
              className="object-cover w-full h-full z-10"
              priority
            />
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md z-20">
              <p className="text-sm font-medium text-gray-900">Trending</p>
              <p className="text-lg font-bold text-rose-600">
                ${data && data.price[0].rate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
