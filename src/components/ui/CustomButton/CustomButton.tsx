import './CustomButton.scss'
import { FC } from 'react';

interface ButtonProps {
  color: string,
  text: string,
  type: "button" | "submit",
}


const CustomButton :FC<ButtonProps> = ({color, text, type}) => {
  return (
    <button 
      className= {
        color === 'mainAccent'? 
          "custom-button custom-button--mainColor" : 
          "custom-button custom-button--auxiliaryColor"
      }
      type={type}
    >
      {text}
    </button>
  );
}

export default CustomButton;
