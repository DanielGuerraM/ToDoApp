import { useState } from "react";

interface InputProps {
  id: string
  type: string
  value: string
  disabled: boolean
  text: string
  onChange: () => void
}

const Input:React.FC<InputProps> = ({
  id,
  type,
  value,
  disabled,
  text,
  onChange
}) => {

  return(
    <div className="relative w-full">
      <input
        id={id}
        type={type} 
        disabled={disabled}
        value={value}
        onChange={onChange} 
        className={`
          border-2
          border-black
          py-3
          px-3 
          focus:outline-none 
          focus:border-cyan-400 
          rounded-lg
          transition-colors
          peer
          border-opacity-60'
          w-full
          ${disabled ? 'border-opacity-20 cursor-not-allowed' : 'border-opacity-60'}
        `}/>
      <label 
        htmlFor={id} 
        className={`
        absolute 
        left-2.5 
        px-1
        text-black
        peer-focus:text-sm 
        peer-focus:-top-2.5
        peer-focus:bg-white
        peer-focus:text-cyan-400 
        transition-all
        ${value ? '-top-3 bg-white': 'top-3'}
        ${disabled ? 'text-opacity-20 cursor-not-allowed': 'cursor-text text-opacity-80'}
        `}>
          {text}
        </label>
    </div>
  );
}

export default Input;