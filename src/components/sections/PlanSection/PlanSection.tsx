import './PlanSection.scss'
import { FC, useEffect, useRef } from 'react';

import dottedLine from './../../../assets/img/planSection/line.svg'
import papper_plane from './../../../assets/img/planSection/papper-plane.svg'
import startAnimation from '../../../animations/planeInPlanSection';

const PlanSection: FC = () => {

  const animatedSection = useRef<HTMLDivElement>(null)
  const animatedPlane = useRef<HTMLImageElement>(null)

  function playingAnimation() {
    const boundingClient = animatedSection.current!.getBoundingClientRect()

    if (window.innerHeight - boundingClient.bottom > 0 &&
      boundingClient.top + boundingClient.height > 0
    ) {
      startAnimation(animatedPlane.current!)
      document.removeEventListener('scroll', playingAnimation)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', playingAnimation)
  }, [])

  return (
    <section className="planSection" >
      <img src={papper_plane} alt="" className="planSection__papper__plane" ref={animatedPlane} />
      <svg width="2142" height="528" viewBox="0 0 2142 528" fill="none" className="planSection__plane-path">
        <path d="M1 1C318.6 28.2 583.167 109.333 621.5 131C1033 343 1198.5 497 1589.5 526.5C1732.59 537.296 2003.5 384 2141 320.5" stroke="black" />
      </svg>
      <div className="planSection__wrapper">
        <h2 className="planSection__title"> Пошаговый <span className="planSection__title-accent"> план</span> </h2>
        <div className="planSection__plan" ref={animatedSection}>
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
