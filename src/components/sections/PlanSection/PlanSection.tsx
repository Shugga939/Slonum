import './PlanSection.scss'
import { FC } from 'react';

import dottedLine from './../../../assets/img/planSection/line.svg'

const PlanSection :FC = () => {
  return (
    <section className="planSection">
      <div className="planSection__wrapper">
        <h2 className="planSection__title"> Пошаговый <span className="planSection__title-accent"> план</span> </h2>
        <div className="planSection__plan">
          <img src={dottedLine} alt="" className="planSection__dotted-line" />
          <div className="planSection__circle planSection__stepOne-circle">1</div>
          <p className="planSection__stepOne-text">
            Зарегистрируйтесь на конкурс&nbsp;
            <a href="#" className="link--firstEminentColor">Здесь</a>
          </p>
          <div className="planSection__circle planSection__stepTwo-circle">2</div>
          <p className="planSection__stepTwo-text">
            Выполните все условия конкурса
          </p>
          <div className="planSection__circle planSection__stepThree-circle">3</div>
          <p className="planSection__stepThree-text">
            Загрузите рисунок
            <span> <a href="#" className="link--firstEminentColor">Здесь</a> </span>
            или в Личном кабинете
          </p>
        </div>
      </div>
    </section>
  );
}

export default PlanSection;
