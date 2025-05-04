import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Price {
  country: string;
  flag: string;
  currency: string;
  amount: string;
  oldAmount: string;
  discount: string;
}

interface ServiceCardProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  questions: string[];
  benefits: string[];
  note?: string;
  locations?: string;
  prices: Price[];
  bookServiceLink: string;
  discussMoreLink: string;
  imagePosition?: "left" | "right";
  className?: string;
}

export const ServiceCard = ({
  title,
  subtitle,
  image,
  imageAlt,
  questions,
  benefits,
  note,
  locations,
  prices,
  bookServiceLink,
  discussMoreLink,
  imagePosition = "left",
  className,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "w-full overflow-hidden bg-white rounded-xl shadow-md border border-gray-100",
        className
      )}
    >
      <div className="flex flex-col lg:flex-row">
        <div
          className={cn(
            "lg:w-2/5 relative",
            imagePosition === "right" && "lg:order-2"
          )}
        >
          <div className="relative h-64 lg:h-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
          </div>
        </div>

        <div
          className={cn(
            "lg:w-3/5 p-6 lg:p-8",
            imagePosition === "right" && "lg:order-1"
          )}
        >
          <div className="mb-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {title}
            </h2>
            <p className="text-lg text-gray-700">{subtitle}</p>
          </div>

          <div className="mb-6">
            <ul className="space-y-2">
              {questions.map((question, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-500 mr-2">👉</span>
                  <span className="text-gray-700">{question}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-700 font-medium">
              Look no further! <span className="text-amber-500">🌟</span>
            </p>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 font-medium mb-2">
              With this service, you can:
            </p>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {note && (
            <div className="mb-4">
              <p className="text-gray-700">
                <span className="text-amber-500">😇</span> {note}
              </p>
            </div>
          )}

          {locations && (
            <div className="mb-6">
              <p className="text-gray-700">
                <span className="font-semibold">Note:</span> Currently Our
                Services Available In {locations}
              </p>
            </div>
          )}
          {prices && prices.length > 0 && (
            <div className="mb-6">
              <p className="text-lg font-bold text-gray-900 mb-2">Price:</p>
              <div className="space-y-2">
                {prices.map((price, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-lg font-medium text-gray-900">
                      <span className="emoji-font">{price.flag}</span>{" "}
                      {price.amount} {price.currency}
                    </span>
                    <span className="line-through text-sm text-gray-400">
                      {price.oldAmount} {price.currency}
                    </span>
                    <span className="text-xs px-2 py-1 bg-rose-100 text-rose-700 rounded-full">
                      {price.discount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={bookServiceLink}
              target="_blank"
              className="flex-1 bg-rose-600 hover:bg-rose-700 text-white py-3 px-6 rounded-lg font-medium text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Book Service Now
            </Link>
            <Link
              href={discussMoreLink}
              target="_blank"
              className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg font-medium text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Discuss More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
