import { NetflixCard, ServiceCard, YoutubeCard } from "@/components/cards";
import { Hero } from "@/components/shared";


export default function Home() {
  return (
    <main className="px-[9%] max-lg:px-[4%] py-5 pt-24">
      <Hero/>

      <section className="my-10">
        <h3 className='text-5xl font-extrabold text-white text-center my-5 lg:mb-10 headingLine'>Services We Provide</h3>


        <div className="max-lg:mt-20">
          <ServiceCard/>
          <YoutubeCard/>
          <NetflixCard/>
        </div>

      </section>
    </main>
  )
}
