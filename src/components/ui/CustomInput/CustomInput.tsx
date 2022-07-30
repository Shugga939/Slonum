import './CustomInput.scss'
import { FC, Ref } from 'react';

interface CustomInputProps {
  placeholder : string,
  forwardRef : Ref<HTMLInputElement>,
  className? : string
}

const CustomInput :FC<CustomInputProps> = ({placeholder, forwardRef, className }) => {
  return (
    <input 
      className= {className? `customInput ${className}` : "customInput" }
      placeholder={placeholder}
      ref={forwardRef }
    />
      
  );
}

export default CustomInput;
