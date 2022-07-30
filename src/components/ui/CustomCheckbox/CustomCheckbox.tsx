import './CustomCheckbox.scss'
import { FC, Ref } from 'react';

interface CustomInputProps {
  text : string,
  forwardRef : Ref<HTMLInputElement>,
  className? : string
}

const CustomCheckbox :FC<CustomInputProps> = ({text, forwardRef, className }) => {
  return (
    <div 
      className= {className? `customCheckbox ${className}` : "customCheckbox"}>
      <input type="checkbox" className="customCheckbox__checkbox" ref={forwardRef}/>
      <div className="customCheckbox__text">
        {text}
      </div>
    </div>
  );
}

export default CustomCheckbox;
