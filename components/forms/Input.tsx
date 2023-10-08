import { ChangeEventHandler } from "react";

interface Props{
    value: string;
    type: string;
    placeholder: string;
    onChange: ChangeEventHandler<HTMLInputElement>
}
export const Input = ({value, type, onChange, placeholder}: Props) => {
  return (
    <input type={type} placeholder={placeholder} required autoComplete="off"
    className='px-3 py-2 rounded-md w-[48%] bg-neutral-800 outline-none text-white'
    value={value}
    onChange={onChange}
    />
  )
}
