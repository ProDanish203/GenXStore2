import { ProductCard } from "../cards";
import Loading from "@/app/(root)/loading";

export const Jacket = ({ data, loading }: any) => {
  if (loading) return Loading();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.map((data: any, index: number) => (
        <ProductCard data={data} redirectPath="jackets" key={index} />
      ))}
    </div>
  );
};
