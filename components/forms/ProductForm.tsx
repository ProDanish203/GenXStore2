"use client"
import React, { FormEvent, useState } from 'react'
import { Input } from './Input'
import { toast } from "react-toastify";
import { ImageUpload } from '../helpers/ImageUpload';

export const ProductForm = () => {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [sarPrice, setSarPrice] = useState("")
    const [sarOldPrice, setSarOldPrice] = useState("")
    const [aedPrice, setAedPrice] = useState("")
    const [aedOldPrice, setAedOldPrice] = useState("")
    const [omrPrice, setOmrPrice] = useState("")
    const [omrOldPrice, setOmrOldPrice] = useState("")

    const [img, setImg] = useState("")
    const [img2, setImg2] = useState("")


    const [cat, setCat] = useState("men-watch")


    const [loading, setLoading] = useState(false);



    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try{
            setLoading(true)

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
            value={title}
            onChange={(e:any) => setTitle(e.target.value)}
            />
        </div>

        <div className='w-full'>
            <textarea rows={5} placeholder='Product Description' required autoComplete="off"
            className='px-3 py-2 rounded-md resize-none w-full bg-neutral-800 outline-none text-white'
            value={desc}
            onChange={(e:any) => setDesc(e.target.value)}
            ></textarea>
        </div>

        <div className='w-full flex items-center gap-2 justify-between'>
            <Input type='text' placeholder='SAR New Price' value={sarPrice} onChange={(e:any) => setSarPrice(e.target.value)}/>
            <Input type='text' placeholder='SAR Old Price' value={sarOldPrice} onChange={(e:any) => setSarOldPrice(e.target.value)}/>
        </div>

        <div className='w-full flex items-center gap-2 justify-between'>
            <Input type='text' placeholder='AED New Price' value={aedPrice} onChange={(e:any) => setAedPrice(e.target.value)}/>
            <Input type='text' placeholder='AED Old Price' value={aedOldPrice} onChange={(e:any) => setAedOldPrice(e.target.value)}/>
        </div>

        <div className='w-full flex items-center gap-2 justify-between'>
            <Input type='text' placeholder='OMR New Price' value={omrPrice} onChange={(e:any) => setOmrPrice(e.target.value)}/>
            <Input type='text' placeholder='OMR Old Price' value={omrOldPrice} onChange={(e:any) => setOmrOldPrice(e.target.value)}/>
        </div>

        <div className='w-full'>
            <select required name="cat" onChange={(e:any) => setCat(e.target.value)}
            className='py-2 px-2 rounded-md bg-neutral-800 max-md:w-full w-[48%] text-white'
            >
                <option value="men-watch">Men's watch</option>
                <option value="women-watch">Women's watch</option>
                <option value="couple-watch">Couple's watch</option>
            </select>
        </div>

        <div className='w-full flex items-center flex-wrap gap-2'>
            <ImageUpload 
            value={img}
            onChange={(image:any) => setImg(image)}
            disabled={loading}
            label="Upload Image"
            />

            <ImageUpload 
            value={img2}
            onChange={(image:any) => setImg2(image)}
            disabled={loading}
            label="Upload Image"
            />
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
