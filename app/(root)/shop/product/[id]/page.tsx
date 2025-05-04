"use client";
import { getURL } from "next/dist/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/(root)/loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { getProductbyId } from "@/app/axios/main";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight, Truck, Star, ShoppingBag, Heart } from "lucide-react";

const ProductPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const { data, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductbyId(id),
  });

  if (isLoading) return Loading();
  const url = getURL();

  return (
    <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="text-gray-600 hover:text-rose-600 text-sm font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <Link
                href={`/category/${data?.cat}`}
                className="text-gray-600 hover:text-rose-600 text-sm font-medium"
              >
                {data?.cat}
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500 text-sm font-medium truncate max-w-[200px]">
                {data?.title}
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Product Images */}
          <div className="lg:w-1/2 bg-gray-50 p-6 flex items-center justify-center">
            <div className="w-full max-w-md">
              <Swiper
                className="rounded-lg overflow-hidden shadow-lg"
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
              >
                {data?.images.map((img: string, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="relative aspect-square bg-white flex items-center justify-center">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${data?.title} - Image ${index + 1}`}
                        width={500}
                        height={500}
                        className="object-contain w-full h-full p-4"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 p-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {data?.title}
                </h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 text-rose-500 fill-rose-500"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">36 reviews</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Category:{" "}
                  <span className="font-medium text-rose-600">{data?.cat}</span>
                </p>
              </div>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <Heart className="h-6 w-6" />
              </button>
            </div>

            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <div className="flex items-start">
                <ChevronRight className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 ml-2">{data?.desc}</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                Price
              </h2>
              {data?.price.map((price: any, i: number) => (
                <div className="flex items-baseline mb-2" key={i}>
                  <span className="text-2xl font-bold text-gray-900 mr-2">
                    <span className="emoji-font">{price.ct}</span>
                    {price.rate}
                  </span>
                  {price.oldRate && (
                    <span className="text-lg text-gray-500 line-through">
                      {price.oldRate}
                    </span>
                  )}
                  {price.oldRate && (
                    <span className="ml-2 px-2 py-0.5 text-xs font-semibold text-white bg-red-500 rounded-full">
                      SALE
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center mb-8 p-4 bg-gray-50 rounded-lg">
              <Truck className="h-5 w-5 text-rose-600 mr-3" />
              <div>
                <p className="font-medium text-gray-900">Free Delivery</p>
                <p className="text-sm text-gray-600">
                  Orders ship within 1-2 business days
                </p>
              </div>
            </div>

            <Link
              href={`https://wa.me/+923333960118?text=https://gen-x-store2.vercel.app${url}`}
              target="_blank"
              className="w-full flex items-center justify-center bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Buy Now
            </Link>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Need help? Contact us at{" "}
                <a
                  href="mailto:support@example.com"
                  className="text-rose-600 hover:underline"
                >
                  support@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
