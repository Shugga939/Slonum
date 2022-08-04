import './Timer.scss'
import { FC, useEffect, useState } from 'react';
import startTimer from './TimerScript';
import startAnimation from '../../../animations/timer';

const Timer: FC = () => {

  const [days, setDays] = useState('0')
  const [hours, setHours] = useState('0')
  const [minutes, setMinutes] = useState('0')
  const [daysTitle, setDaysTitle] = useState('дней')
  const [hoursTitle, setHoursTitle] = useState('часов')
  const [minutesTitle, setMinutesTitle] = useState('минут')

  useEffect(() => {
    startTimer({
      setDays,
      setHours,
      setMinutes,
      setDaysTitle,
      setHoursTitle,
      setMinutesTitle
    })
    startAnimation()
  }, [])

  return (
    <div className="timer">
      <div className="timer__items">
        <div className="timer__item timer__days"> {days}
          <span className="timer__title timer__title--days">{daysTitle}</span>
        </div>
        <span className="timer__dots"> : </span>
        <div className="timer__item timer__hours"> {hours}
          <span className="timer__title timer__title--hours"> {hoursTitle}
            <span> по МСК</span>
          </span>
        </div>
        <span className="timer__dots"> : </span>
        <div className="timer__item timer__minutes"> {minutes}
          <span className="timer__title timer__title--minutes">{minutesTitle}</span>
        </div>
      </div>
    </div>
  );
}

export default Timer;
