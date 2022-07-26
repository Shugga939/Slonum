import './Button.scss'
import { FC } from 'react';

interface ButtonProps {
  color: string,
  text: string
}


const Button :FC<ButtonProps> = ({color, text}) => {
  return (
    <button 
      className= {color == 'mainAccent'? "button button--main" : "button button--additional"}
    >
      {text}
    </button>
  );
}

export default Button;
