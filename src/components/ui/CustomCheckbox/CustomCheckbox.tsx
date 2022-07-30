import './CustomCheckbox.scss'
import { FC, Ref } from 'react';

interface CustomInputProps {
  forwardRef : Ref<HTMLInputElement>,
  linksColor : "mainAccent" | "whiteColor"
}

const CustomCheckbox :FC<CustomInputProps> = ({forwardRef, linksColor }) => {
  return (
    <label className="customCheckbox">
      <input type="checkbox" className="customCheckbox__checkbox" />
      <div className="customCheckbox__text">
        <p> 
          Отправляя данные я соглашаюсь с&nbsp;
          <a href="#" className={`customCheckbox__link customCheckbox__link--${linksColor}`}>Условиями конкурса</a>
          <br /> и &nbsp;
          <a href="#" className={`customCheckbox__link customCheckbox__link--${linksColor}`}>Политикой обработки данных</a>
        </p>
      </div>
    </label>
  );
}

export default CustomCheckbox;
