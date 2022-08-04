import './MainSection.scss'
import { FC, useEffect, useRef } from 'react';
import logo from './../../../assets/img/Logo.svg'
import Timer from '../../ui/Timer/Timer';
import CustomButton from '../../ui/CustomButton/CustomButton';
import AnimatedImage from '../../AnimatedImage/AnimatedImage';

const MainSection: FC = () => {

  const loginButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    loginButtonRef.current?.classList.remove('header__login-button--start')   // animated login
    loginButtonRef.current?.classList.add('header__login-button--ended')      // button
  }, [])

  return (
    <section className="mainSection">
      <div className="mainSection__wrapper">
        <header className="header" id="header">
          <a href='#' className="header__logo-contrainer">
            <img src={logo} alt="" className="header__logo" />
            <span className="header__label">
              Слон
              <span>Ум</span>
            </span>
          </a>
          <button
            className="header__login-button header__login-button--start"
            ref={loginButtonRef}
          > Войти </button>
        </header>
        <div className="mainSection__information-container">
          <span className="mainSection__information-preface"> От компании СлонУМ </span>
          <h1 className="mainSection__information-title"> Всероссийский конкурс Детского рисунка </h1>
          <p className="p-2 mainSection__information-subtitle">
            Участвуйте в конкурсе и получайте призы в различных номинациях детского рисунка для всех возрастов
          </p>
          <div className="mainSection__information-ui-container">
            <CustomButton color="mainAccent" text="Участвовать" type="button" />
            <Timer />
          </div>
        </div>
        <AnimatedImage />
      </div>
    </section>
  );
}

export default MainSection;
