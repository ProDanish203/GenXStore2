"use client"
import { Banner, Ticker, Watch } from '@/components/shared';
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

const Watches = () => {

  const {data, isLoading, mutate, error} = useSWR(`/api/product/getProducts`, fetcher)

  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([])  

  // const getData = async () => { 
  //   try{
  //     setLoading(true);

  //     const response = await fetch('/api/product/getProducts');
  //     const res = await response.json();

  //     setData(res);
  //     setLoading(false);
  //   }catch(error){
  //     setLoading(false);
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getData();
  // }, [])

  // @ts-ignore
  const menWatch = data?.filter(x => x.cat == 'men-watch');
  // @ts-ignore
  const womenWatch = data?.filter(x => x.cat == 'women-watch');
  // @ts-ignore
  const coupleWatch = data?.filter(x => x.cat == 'couple-watch');

  return (
    <main className='px-[9%] mt-16 max-lg:px-[4%] py-5 pt-10'>
      <Ticker/>
    <Banner heading="Luxurious and affordable watches " text="At Gen X Store 2, we're your ultimate source for luxury and digital watches. Explore our curated collection to find your ideal timepiece, all backed by our Scamraud approval for a secure shopping experience. Elevate your wrist game with us today!" image='/images/watch1/front.jpg'/>

      <div className='lg:mt-40 mt-10'>
        <h3 className='text-5xl font-extrabold text-white text-center my-5 lg:mb-10 headingLine'>Men's Watch</h3>
        <Watch data={menWatch} loading={isLoading}/>
      </div>

      <div className='lg:mt-20 mt-10'>
        <h3 className='text-5xl font-extrabold text-white text-center my-5 lg:mb-10 headingLine'>Women's Watch</h3>
        <Watch data={womenWatch} loading={isLoading}/>
      </div>

      <div className='lg:mt-20 mt-10'>
        <h3 className='text-5xl font-extrabold text-white text-center my-5 lg:mb-10 headingLine'>Couple's Watch</h3>
        <Watch data={coupleWatch} loading={isLoading}/>
      </div>

    </main>
  )
}

export default Watches;