import { ServiceCard } from "@/components/cards";
import { Hero } from "@/components/shared";
import {
  facebookMonetizationService,
  iptvService,
  netflixService,
  youtubeMonetizationService,
} from "@/util/data";

export default function Home() {
  return (
    <main className="px-[9%] max-lg:px-[4%] py-5 pt-24">
      <Hero />

      <section className="my-10">
        <h3 className="text-5xl font-extrabold text-text text-center my-5 lg:mb-10 headingLine">
          Services We Provide
        </h3>

        <div className="max-lg:mt-20 space-y-12">
          {[
            facebookMonetizationService,
            youtubeMonetizationService,
            netflixService,
            iptvService,
          ].map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
