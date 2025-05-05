"use client";
import { Banner, ProductGrid } from "@/components/shared";
import { getProducts } from "@/app/axios/main";
import { useQuery } from "@tanstack/react-query";

const Watches = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  const isValidData = Array.isArray(data);

  const menWatch = isValidData ? data.filter((x) => x.cat === "men-watch") : [];
  const womenWatch = isValidData
    ? data.filter((x) => x.cat === "women-watch")
    : [];
  const coupleWatch = isValidData
    ? data.filter((x) => x.cat === "couple-watch")
    : [];

  return (
    <main className="px-[9%] mt-16 max-lg:px-[4%] py-5 pt-10">
      <Banner
        heading="Luxurious and affordable watches "
        text="At Gen X Store 2, we're your ultimate source for luxury and digital watches. Explore our curated collection to find your ideal timepiece, all backed by our Scamraud approval for a secure shopping experience. Elevate your wrist game with us today!"
        image="/images/banners/watch.jpg"
      />

      <div className="lg:mt-40 mt-10">
        <h3 className="text-5xl font-extrabold text-text text-center my-5 lg:mb-10 headingLine">
          Men's Watch
        </h3>
        <ProductGrid data={menWatch} loading={isLoading} />
      </div>

      <div className="lg:mt-20 mt-10">
        <h3 className="text-5xl font-extrabold text-text text-center my-5 lg:mb-10 headingLine">
          Women's Watch
        </h3>
        <ProductGrid data={womenWatch} loading={isLoading} />
      </div>

      <div className="lg:mt-20 mt-10">
        <h3 className="text-5xl font-extrabold text-text text-center my-5 lg:mb-10 headingLine">
          Couple's Watch
        </h3>
        <ProductGrid data={coupleWatch} loading={isLoading} />
      </div>
    </main>
  );
};

export default Watches;
