"use client"
import { CldUploadWidget } from 'next-cloudinary';

export const UploadWidget = ({setImg}: any) => {
  return (
    <>
    <CldUploadWidget uploadPreset="genxstore" onSuccess={(result) => {
        //@ts-ignore
        setImg((prev) => [...prev, result?.info?.secure_url])
    }}>
    {({ open }) => {
        function handleOnClick(e:any) {
        e.preventDefault();
        open();
        }
        return (
        <button className="w-fit px-5 py-2.5 bg-primary text-white rounded-md" onClick={handleOnClick}>
            Upload Image
        </button>
        );
    }}
    </CldUploadWidget>    
    </>
  )
}
