import './MainSection.scss'
import { FC } from 'react';
import logo from './../../../assets/img/Logo.svg'
import Timer from '../../ui/Timer/Timer';
import Button from '../../ui/Button/Button';
import AnimatedImage from '../../AnimatedImage/AnimatedImage';

const MainSection :FC = () => {
  return (
    <section className="mainSection">
      <div className="mainSection__wrapper">
        <header className="header">
          <div className="header__logo-contrainer">
            <img src={logo} alt="" className="header__logo" />
            <span className="header__label">
              Слон
              <span>Ум </span>
            </span>
          </div>
          <button className="header__login-button header__login-button--ended"> Войти </button>
        </header>
        <div className="mainSection__information-container">
          <span className="mainSection__information-preface"> От компании СлонУМ </span>
          <h1 className="mainSection__information-title"> Всероссийский конкурс Детского рисунка </h1>
          <p className="p-2 mainSection__information-subtitle">
            Учавствуйте в конкурсе и получайте призы в различных номинациях детского рисунка для всех возрастов
          </p>
          <div className="mainSection__information-ui-container">
            <Button color="mainAccent" text="Учавствовать"/>
            <Timer/>
          </div>
        </div>
        <AnimatedImage/>
      </div>
    </section>
  );
}

export default MainSection;
