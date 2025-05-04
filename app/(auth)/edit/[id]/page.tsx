"use client";
import { EditForm } from "@/components/forms/EditForm";
import Loading from "../../loading";
import { getProductbyId } from "@/app/axios/main";
import { useQuery } from "@tanstack/react-query";

const EditPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const { data, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductbyId(id),
  });

  if (isLoading) return Loading();

  return (
    <main className="px-[9%] max-lg:px-[4%] py-5 pt-24 mt-10">
      <section className="max-w-[800px] mx-auto w-full">
        <h3
          className="text-5xl max-md:text-3xl font-extrabold text-center mb-10 text-text"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          Update Product
        </h3>

        <EditForm data={data} />
      </section>
    </main>
  );
};

export default EditPage;
