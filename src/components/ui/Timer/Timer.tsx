import './Timer.scss'
import { FC } from 'react';

const Timer :FC = () => {
  return (
    <div className="timer">
      <div className="timer__items">
        <div className="timer__item timer__days">01
          <span className="timer__title timer__title--days">дней</span>
        </div>
        <span className="timer__dots"> : </span>
        <div className="timer__item timer__hours">09
          <span className="timer__title timer__title--hours"> часов 
            <span> по МСК</span>
          </span>
        </div>
        <span className="timer__dots"> : </span>
        <div className="timer__item timer__minutes">43
          <span className="timer__title timer__title--minutes">минут</span>
        </div>
      </div>
    </div>
  );
}

export default Timer;
