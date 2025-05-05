"use client";
import { Banner, ProductGrid } from "@/components/shared";
import React from "react";
import { getProducts } from "@/app/axios/main";
import { useQuery } from "@tanstack/react-query";

const Gloves = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts("leather-gloves"),
  });

  const isValidData = Array.isArray(data);
  const gloves = isValidData
    ? data.filter((x: any) => x.cat == "leather-gloves")
    : [];

  return (
    <main className="px-[9%] mt-16 max-lg:px-[4%] py-5 pt-24">
      <Banner
        heading="Leather Gloves Collection is here"
        text="Introducing GenX Store 2's Winter Wonderland: Embrace the Chill in Style! Explore Our Latest Collection of Premium Leather Gloves. ❄️ Your Winter Accessory Upgrade Starts Here - Shop Now for the Finest Looks to Keep Your Hands Warm in the Cold! 🧤"
        image="/images/banners/leather-gloves.jpg"
      />

      <div className="lg:mt-40 mt-10">
        <h3 className="text-5xl font-extrabold text-text text-center my-5 lg:mb-10 headingLine">
          Leather Gloves
        </h3>
        <ProductGrid data={gloves} loading={isLoading} />
      </div>
    </main>
  );
};

export default Gloves;
