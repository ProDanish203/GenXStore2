"use client";
import { Banner, ProductGrid } from "@/components/shared";
import React from "react";
import { getProducts } from "@/app/axios/main";
import { useQuery } from "@tanstack/react-query";

const Watches = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  const isValidData = Array.isArray(data);
  const jackets = isValidData ? data.filter((x: any) => x.cat == "jacket") : [];

  return (
    <main className="px-[9%] mt-16 max-lg:px-[4%] py-5 pt-24">
      <Banner
        heading="Leather Jackets Winter Collection is here"
        text="Introducing GenX Store 2's Winter Wonderland: Embrace the Chill in Style! Explore Our Latest Collection of Cozy and Trendy Winter Jackets. ❄️ Your Winter Wardrobe Upgrade Starts Here – Shop Now for the Hottest Looks to Keep You Cool in the Cold! 🧥"
        image="/images/jackets/banner.jpg"
      />

      <div className="lg:mt-40 mt-10">
        <h3 className="text-5xl font-extrabold text-text text-center my-5 lg:mb-10 headingLine">
          Leather Jackets
        </h3>
        <ProductGrid data={jackets} loading={isLoading} />
      </div>
    </main>
  );
};

export default Watches;
