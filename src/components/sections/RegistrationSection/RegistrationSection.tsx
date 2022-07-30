import './RegistrationSection.scss'
import { FC, useRef } from 'react';
import CustomInput from '../../ui/CustomInput/CustomInput';
import CustomButton from '../../ui/CustomButton/CustomButton';

import label from './../../../assets/img/registrationSection/label.svg'
import vk_icon from './../../../assets/icons/vk.svg'
import ok_icon from './../../../assets/icons/ok.svg'
import airplanes from './../../../assets/img/registrationSection/airplanes.svg'

const RegistrationSection :FC = () => {

  const nameInputRef = useRef<HTMLInputElement>(null)
  const birthdayInputRef = useRef<HTMLInputElement>(null)
  const cityInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)


  return (
    <div className="registrationSection">
      <div className="registrationSection__wrapper">
        <div className="registrationSection__discount-section">
          <div className="discount-card">
            <img src={label} alt="" className="discount-card__label" />
            <span className="discount-card__title"> Скидка за репост </span>
            <span className="discount-card__subtitle"> Стоимость участия: </span>
            <div className="discount-card__price-container">
              <span className="discount-card__newPrice"> 149₽ </span>
              <span className="discount-card__oldPrice"> 299₽ </span>
            </div>
            <span className="discount-card__condition"> При наличии репоста в соцсетях :) </span>
            <div className="discount-card__social">
              <span className="discount-card__text"> Получить скидку: </span>
              <div className="discount-card__icons">
                <a href="" className="discount-card__link" >
                  <img src={vk_icon} alt="" className="discount-card__icon"/>
                </a>
                <a href="" className="discount-card__link" > 
                  <img src={ok_icon} alt="" className="discount-card__icon"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <form className="registrationSection__form">
          <h2 className="registrationSection__title"> Зарегистрируйтесь, чтобы участвовать </h2>
          <div className="registrationSection__inputs-container">
            <CustomInput placeholder="ФИО ребёнка" forwardRef ={nameInputRef}/>
            <CustomInput placeholder="Дата рождения" forwardRef ={birthdayInputRef}/>
            <CustomInput placeholder="Город" forwardRef ={cityInputRef}/>
            <CustomInput placeholder="Email" forwardRef ={emailInputRef}/>
            <CustomInput placeholder="Пароль" forwardRef ={passwordInputRef}/>
          </div>
          <div className="registrationSection__checkbox-container">
            <div className="customCheckbox">
              <input type="checkbox" className="customCheckbox__checkbox" />
              <div className="customCheckbox__text">
                <p> 
                  Отправляя данные я соглашаюсь с&nbsp;
                  <a href="#" className="link--firstEminentColor">Условиями конкурса</a>
                  <br /> и &nbsp;
                  <a href="#" className="link--firstEminentColor">Политикой обработки данных</a>
                </p>
              </div>
            </div>
          </div>
          <CustomButton color="auxiliaryColor" text="Учавствовать" type="submit"/>
          <img src={airplanes} alt="" className="registrationSection__form-airplanes" />
        </form>
      </div>
    </div>
  );
}

export default RegistrationSection;
