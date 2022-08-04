import './Footer.scss'
import { FC } from 'react';

import vk_icon from './../../../assets/icons/vk.svg'
import zen_icon from './../../../assets/icons/zen.svg'
import tg_icon from './../../../assets/icons/tg.svg'


const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__social">
          <p> Наши соцсети: </p>
          <div className="footer__icons">
            <img src={tg_icon} alt="" className="footer__icon" />
            <img src={zen_icon} alt="" className="footer__icon" />
            <img src={vk_icon} alt="" className="footer__icon" />
          </div>
        </div>
        <div className="footer__central-container">
          <ul className="footer__links">
            <li className="footer__link">
              <a href=""> Главная </a>
            </li>
            <li className="footer__link">
              <a href="">Личный кабинет</a>
            </li>
            <li className="footer__link">
              <a href="">Контакты</a>
            </li>
            <li className="footer__link">
              <a href="">Конфиденциальность</a>
            </li>
          </ul>
          <span> @ Все права защищены.  ООО”Слонум” 2022 </span>
        </div>
        <a href="#header" className="footer__up-button" />
      </div>
    </footer>
  );
}

export default Footer;
