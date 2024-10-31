import { ChangeEventHandler } from "react";

interface InputPorps {
    placeholder: string,
    handleChange: ChangeEventHandler<HTMLInputElement>
    name: string
}

export default function Input({placeholder, handleChange, name}: InputPorps )  {
    return (
        <input
        name={name}
        placeholder={placeholder}
        onChange={handleChange} />
    );
}