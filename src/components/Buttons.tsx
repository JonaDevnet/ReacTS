import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode,
    handleClick: MouseEventHandler<HTMLButtonElement>, // este es el valor de onClick={}
}

export default function Button({children, handleClick}: ButtonProps ) {
    return (
        <button 
        onClick={handleClick}
        className='button is-primary'>
            {children}
        </button>
    );
}