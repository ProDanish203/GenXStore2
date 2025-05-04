import Image from "next/image";

interface Props {
  heading: string;
  text: string;
  image: string;
}

export const Banner = ({ heading, text, image }: Props) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-md w-full mb-10">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-amber-500"></div>
      <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-rose-100 opacity-50"></div>
      <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-amber-100 opacity-50"></div>

      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 p-6 md:p-10 xl:p-16 relative z-10">
        {/* Content */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {heading}
          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            {text}
          </p>

          <button className="inline-flex items-center px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg">
            Order Now
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
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 w-full max-w-lg">
          <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-xl">
            <Image
              src={image || "/placeholder.svg"}
              alt={heading}
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
