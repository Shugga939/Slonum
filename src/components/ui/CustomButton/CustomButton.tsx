import './CustomButton.scss'
import { FC } from 'react';

interface ButtonProps {
  color: "mainAccent" | "auxiliaryAccent"
  type: "button" | "submit",
  text: string,
}


const CustomButton :FC<ButtonProps> = ({color, text, type}) => {
  return (
    <button 
      className= {`custom-button custom-button--${color}`}
      type={type}
    >
      {text}
    </button>
  );
}

export default CustomButton;
