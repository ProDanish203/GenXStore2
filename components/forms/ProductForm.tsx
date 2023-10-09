"use client"
import React, { FormEvent, useState } from 'react'
import { Input } from './Input'
import { toast } from "react-toastify";
import { UploadWidget } from '../helpers/UploadWidget';

export const ProductForm = () => {

    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        cat: 'men-watch',
        sarPrice: '',
        sarOldPrice: '',
        aedPrice: '',
        aedOldPrice: '',
        omrPrice: '',
        omrOldPrice: '',
    })

    const [img, setImg] = useState([])
    const [loading, setLoading] = useState(false);

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        //@ts-ignore
        if(!img || img.length == 0) return toast.error("Image is required");
        if(!formData.title || !formData.desc) return toast.error("Please provide title and description");
        if(!formData.sarPrice || !formData.sarOldPrice || !formData.aedPrice || !formData.aedOldPrice || !formData.omrPrice || !formData.omrOldPrice) return toast.error("Please provide all the prices");

        try{
            setLoading(true)
            const res = await fetch('/api/product/add', {
                method: "POST",
                body: JSON.stringify({
                    formData, img
                }) 
            })

            const data = await res.json();

            if(res.ok){
                toast.success("Product added successfully");
                setFormData({
                    title: '',
                    desc: '',
                    cat: 'men-watch',
                    sarPrice: '',
                    sarOldPrice: '',
                    aedPrice: '',
                    aedOldPrice: '',
                    omrPrice: '',
                    omrOldPrice: '',
                })
                setImg([]);
            }

            setLoading(false)
        }catch(error){
            setLoading(false)
            console.log(error);
            toast.error("Something went wrong")
        }
    }

  return (
    <>
    <form onSubmit={handleSubmit} className="glassmorphism flex flex-col justify-center gap-5 px-3 py-5" 
    data-aos='fade-up' data-aos-delay='400' data-aos-duration='1200'
    >

        <div className='w-full'>
            <input type="text" placeholder='Product Title' required autoComplete="off"
            className='px-3 py-2 rounded-md w-full bg-neutral-800 outline-none text-white'
            value={formData.title}
            name='title'
            onChange={handleChange}
            />
        </div>

        <div className='w-full'>
            <textarea rows={5} placeholder='Product Description' required autoComplete="off"
            className='px-3 py-2 rounded-md resize-none w-full bg-neutral-800 outline-none text-white'
            value={formData.desc}
            name='desc'
            onChange={handleChange}
            ></textarea>
        </div>

        <div className='w-full flex items-center gap-2 justify-between'>
            <Input type='text' placeholder='SAR New Price' name="sarPrice" value={formData.sarPrice} onChange={handleChange}/>
            <Input type='text' placeholder='SAR Old Price' name="sarOldPrice" value={formData.sarOldPrice} onChange={handleChange}/>
        </div>

        <div className='w-full flex items-center gap-2 justify-between'>
            <Input type='text' placeholder='AED New Price' name="aedPrice" value={formData.aedPrice} onChange={handleChange}/>
            <Input type='text' placeholder='AED Old Price' name="aedOldPrice" value={formData.aedOldPrice} onChange={handleChange}/>
        </div>

        <div className='w-full flex items-center gap-2 justify-between'>
            <Input type='text' placeholder='OMR New Price' name="omrPrice" value={formData.omrPrice} onChange={handleChange}/>
            <Input type='text' placeholder='OMR Old Price' name="omrOldPrice" value={formData.omrOldPrice} onChange={handleChange}/>
        </div>

        <div className='w-full'>
            <select required name="cat" onChange={handleChange}
            className='py-2 px-2 rounded-md bg-neutral-800 max-md:w-full w-[48%] text-white'
            >
                <option value="men-watch">Men's watch</option>
                <option value="women-watch">Women's watch</option>
                <option value="couple-watch">Couple's watch</option>
            </select>
        </div>

        <div className='w-full flex items-center flex-wrap gap-2'>
            <UploadWidget setImg={setImg}/>
        </div>


        <div className='w-full'>
            <button disabled={loading}
            className='bg-accent hover:bg-primary text-white py-2.5 rounded-md w-full mt-2'>
                Add Product
            </button>
        </div>

    </form>
    </>
  )
}
