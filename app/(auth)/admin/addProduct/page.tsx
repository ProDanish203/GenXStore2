import { ProductForm } from '@/components/forms/ProductForm';
import React from 'react'

const AddProduct = () => {
  return (
    <main className="px-[9%] max-lg:px-[4%] py-5 pt-24 mt-10">
        <section className='max-w-[800px] mx-auto w-full'>

          <h3 className='text-5xl max-md:text-3xl font-extrabold text-center mb-10 text-white'
          data-aos='fade-up' data-aos-delay='200' data-aos-duration='1200'
          >Add New Product</h3>

          <ProductForm/>

        </section>

    </main>
  )
}

export default AddProduct;