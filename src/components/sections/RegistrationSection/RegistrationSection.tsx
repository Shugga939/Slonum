import './RegistrationSection.scss'
import { FC, useEffect, useRef } from 'react';
import CustomInput from '../../ui/CustomInput/CustomInput';
import CustomButton from '../../ui/CustomButton/CustomButton';
import CustomCheckbox from '../../ui/CustomCheckbox/CustomCheckbox';
import startAnimation from '../../../animations/planeInRegistrationSection'

import label from './../../../assets/img/registrationSection/label.svg'
import vk_icon from './../../../assets/icons/vk-withBorder.svg'
import ok_icon from './../../../assets/icons/ok.svg'
import airplane_left from './../../../assets/img/registrationSection/papper-plane_left.svg'
import airplane_flying from './../../../assets/img/registrationSection/papper-plane_flying.svg'
import airplane_right from './../../../assets/img/registrationSection/papper-plane_right.svg'


const RegistrationSection: FC = () => {

  const nameInputRef = useRef<HTMLInputElement>(null)
  const birthdayInputRef = useRef<HTMLInputElement>(null)
  const cityInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const chekBoxRef = useRef<HTMLInputElement>(null)
  const animatedSection = useRef<HTMLImageElement>(null)  //animation trigger

  function playingAnimation() {
    const boundingClient = animatedSection.current!.getBoundingClientRect()
    if (window.innerHeight - boundingClient.bottom > 0 &&
      boundingClient.top + boundingClient.height > 0
    ) {
      startAnimation()
      document.removeEventListener('scroll', playingAnimation)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', playingAnimation)
  }, [])

  return (
    <section className="registrationSection">
      <img src={airplane_flying} alt="" className="registrationSection__form-airplane--flying" />
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
                  <img src={vk_icon} alt="" className="discount-card__icon" />
                </a>
                <a href="" className="discount-card__link" >
                  <img src={ok_icon} alt="" className="discount-card__icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <form className="registrationSection__form">
          <h2 className="registrationSection__title"> Зарегистрируйтесь, чтобы участвовать </h2>
          <div className="registrationSection__inputs-container">
            <CustomInput placeholder="ФИО ребёнка" forwardRef={nameInputRef} />
            <CustomInput placeholder="Дата рождения" forwardRef={birthdayInputRef} />
            <CustomInput placeholder="Город" forwardRef={cityInputRef} />
            <CustomInput placeholder="Email" forwardRef={emailInputRef} />
            <CustomInput placeholder="Пароль" forwardRef={passwordInputRef} />
          </div>
          <div className="registrationSection__checkbox-container">
            <CustomCheckbox linksColor="mainAccent" forwardRef={chekBoxRef} />
          </div>
          <CustomButton color="auxiliaryAccent" text="Участвовать" type="submit" />
          <img src={airplane_left} alt="" className="registrationSection__form-airplane--left" ref={animatedSection} />
          <img src={airplane_right} alt="" className="registrationSection__form-airplane--right" />
        </form>
      </div>
    </section>
  );
}

export default RegistrationSection;
