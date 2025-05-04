import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Price {
  ct: string;
  rate: string;
  oldRate: string;
}

interface ProductData {
  _id: string;
  title: string;
  images: string[];
  price: Price[];
}

interface ProductCardProps {
  data: ProductData;
  className?: string;
}

export const ProductCard = ({
  data,

  className,
}: ProductCardProps) => {
  return (
    <div
      className={cn(
        "overflow-hidden group transition-all duration-300 hover:shadow-lg bg-white border border-gray-200 rounded-lg",
        className
      )}
    >
      <Link
        href={`/shop/product/${data._id}`}
        className="block overflow-hidden relative aspect-square"
      >
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
          <Image
            src={data.images[0] || "/placeholder.svg"}
            alt={data.title}
            fill
            sizes="(max-width: 768px) 100vw, 350px"
            className="object-cover"
            priority
          />
        </div>
        {data.price[0]?.oldRate && (
          <span className="absolute top-3 right-3 bg-rose-600 text-white text-xs font-medium px-2 py-1 rounded-md">
            -30% OFF
          </span>
        )}
      </Link>

      <div className="p-4">
        <Link
          href={`/shop/product/${data._id}`}
          className="block group-hover:text-rose-600 transition-colors"
        >
          <h3 className="font-semibold text-lg line-clamp-2 mb-2 text-gray-800">
            {data.title}
          </h3>
        </Link>

        <div className="space-y-1">
          {data.price.map((price: Price, i: number) => (
            <div className="flex items-baseline gap-2" key={i}>
              <p className="font-bold text-gray-900">
                <span className="emoji-font">{price.ct}</span>
                {price.rate}
              </p>
              {price.oldRate && (
                <p className="text-gray-500 line-through text-sm">
                  {price.oldRate}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-4">
        <Link
          href={`/shop/product/${data._id}`}
          className="w-full inline-block transition-all duration-300 text-center py-2.5 px-4 rounded-md bg-rose-600 text-white hover:bg-rose-700 font-medium"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};
