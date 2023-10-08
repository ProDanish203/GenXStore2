import { NetflixCard, ServiceCard, YoutubeCard } from "@/components/cards";
import { Heading } from "@/components/helpers/Heading";
import { Hero } from "@/components/shared";


export default function Home() {
  return (
    <main className="px-[9%] max-lg:px-[4%] py-5 pt-24">
      <Hero/>

      <section className="my-10">
        <Heading title="Services We Provide" center/>

        <div className="max-lg:mt-20">
          <ServiceCard/>
          <YoutubeCard/>
          <NetflixCard/>
        </div>

      </section>
    </main>
  )
}
