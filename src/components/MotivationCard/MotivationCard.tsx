import './MotivationCard.scss'
import { FC } from 'react';
import { IMotivationCard } from '../../models/IMotivationCard';

const MotivationCard :FC<IMotivationCard> = ({img, text}) => {

  return (
    <div className="motivationCard">
      <div className="motivationCard__wrapper">
        <div className="motivationCard__img-container">
          <img src={img} alt="" />
        </div>
        <div className="motivationCard__text"> {text} </div>
      </div>
    </div>
  );
}

export default MotivationCard;
