interface ButtonProps {
  text: string
  disabled: boolean
}

const Button: React.FC<ButtonProps> = ({
  text,
  disabled
}) => {
  return(
    <button 
      type="submit"
      disabled={disabled}
      className={`
        text-white 
        font-semibold 
        py-3 
        rounded-lg 
        transition 
        duration-300 
        ease-in-out
        ${disabled ? 'bg-cyan-600 bg-opacity-30 cursor-not-allowed': 'hover:bg-cyan-700 bg-cyan-600'}
        `}>
        {text}
      </button>
  );
}

export default Button;