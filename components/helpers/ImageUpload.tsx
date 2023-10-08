"use client"
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";


interface Props{
    value?: string;
    onChange: (base64:string) => void
    disabled: boolean;
    label : string;
}

export const ImageUpload = ({disabled, onChange, value, label}:Props) => {

    const [base64, setBase64] = useState(value);

    const handleChange = useCallback((base64:string) => {
        onChange(base64);
    }, [onChange]);

    const handleDrop = useCallback((files:any) => {
        const file = files[0]
        const reader = new FileReader();

        reader.onload = (event:any) => {
            setBase64(event.target.result);
            handleChange(event.target.result);
        }

        reader.readAsDataURL(file);
    }, [handleChange]);

    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: 1,
        onDrop: handleDrop,
        disabled,
        accept: {
            'image/jpeg': [],
            'image/png': [],
        }
    });

  return (
    <div
    {...getRootProps({
        className: "w-fit p-4 text-white border-2 border-dotted border-neutral-700"
    })}
    >
        <input {...getInputProps()} />
        {
            base64 ? (
                <div className="w-full flex items-center justify-center">
                    <Image src={base64} alt="Upload Image" height={100} width={100}/>
                </div>
            ) : (
                <>
                <p className="text-white text-sm">{label}</p>
                </>
            )
        }
    </div>
  )
}
