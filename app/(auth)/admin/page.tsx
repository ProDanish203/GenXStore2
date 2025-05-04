"use client";
import Loading from "../loading";
import { getProducts } from "@/app/axios/main";
import { useQuery } from "@tanstack/react-query";
import { Edit, Eye, PlusCircle, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Admin = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  const [searchTerm, setSearchTerm] = useState("");

  if (isLoading) return Loading();

  const filteredProducts = data?.filter((product: any) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
      <section className="w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
            Manage Products
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 w-full sm:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Link
              href="/admin/add-product"
              className="inline-flex items-center justify-center px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors duration-200"
            >
              <PlusCircle className="h-5 w-5 mr-2" />
              Add Product
            </Link>
          </div>
        </div>

        {filteredProducts?.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500 text-lg">
              No products found matching your search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProducts?.map((info: any, i: number) => (
              <ManageCard data={info} key={i} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Admin;

const ManageCard = ({ data }: any) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square bg-gray-100">
        <Image
          src={data.images[0] || "/placeholder.svg"}
          alt={data.title}
          fill
          className="object-cover p-2"
        />
        <div className="absolute top-2 right-2 bg-rose-100 text-rose-800 text-xs font-medium px-2 py-1 rounded-full">
          {data.cat}
        </div>
      </div>

      <div className="p-4">
        <h3
          className="font-medium text-gray-900 mb-1 truncate"
          title={data.title}
        >
          {data.title}
        </h3>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="truncate">
            {data.price && data.price[0] ? (
              <>
                <span className="emoji-font">{data.price[0].ct}</span>
                <span>{data.price[0].rate}</span>
              </>
            ) : (
              "No price"
            )}
          </span>
        </div>

        <div className="flex items-center justify-between gap-2 mt-2">
          <Link
            href={`/edit/${data._id}`}
            className="inline-flex items-center justify-center flex-1 px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium rounded transition-colors"
          >
            <Edit className="h-3.5 w-3.5 mr-1" />
            Edit
          </Link>

          <Link
            href={`/shop/product/${data._id}`}
            className="inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded transition-colors"
          >
            <Eye className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
