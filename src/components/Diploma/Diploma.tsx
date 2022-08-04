import './Diploma.scss'
import { FC } from 'react';

import clouds from './../../assets/img/diploma/clouds.svg'
import seal from './../../assets/img/diploma/seal.svg'
import logo from './../../assets/img/diploma/logo-text.png'
import earth from './../../assets/img/diploma/earth.svg'
import water from './../../assets/img/diploma/water.svg'
import stones from './../../assets/img/diploma/stones.svg'
import tree from './../../assets/img/diploma/tree.svg'
import elephant from './../../assets/img/diploma/elephant.svg'


const Diploma: FC = () => {

  return (
    <div className="diploma">
      <div className="diploma__wrapper">
        <span className="diploma__title"> Диплом </span>
        <span className="diploma__subtitle"> Награждается </span>
        <div className="diploma__name"> Гасенко Алина </div>
        <span className="diploma__place"> I место </span>
        <p className="diploma__nomination">
          во Всероссийском конкурсе детских рисунков <br />
          «Моё счастливое лето» <br />
          Возраст от 0 до 4 лет, г. Калуга
        </p>
        <span className="diploma__date"> 15.08.2022 </span>
        <img src={clouds} alt="" className="diploma__clouds" />
        <img src={seal} alt="" className="diploma__seal" />
        <img src={logo} alt="" className="diploma__logo" />
      </div>
      <img src={earth} alt="" className="diploma__earth" />
      <img src={water} alt="" className="diploma__water" />
      <img src={stones} alt="" className="diploma__stones" />
      <img src={tree} alt="" className="diploma__tree" />
      <img src={elephant} alt="" className="diploma__elephant" />
    </div>
  );
}

export default Diploma;
