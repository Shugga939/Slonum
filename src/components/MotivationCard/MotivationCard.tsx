import './MotivationCard.scss'
import { FC } from 'react';
import { IMotivationCard } from '../../models/IMotivationCard';

const MotivationCard :FC<IMotivationCard> = ({img, text, TSXelem}) => {
  
  return (
    <div className="motivationCard">
      <div className="motivationCard__wrapper">
        <div className="motivationCard__img-container">
          <img src={img} alt="" />
        </div>
        {!TSXelem? 
          <div className="motivationCard__text"> {text} </div>
          :
          <div className="motivationCard__text"> {TSXelem} </div>
        }
      </div>
    </div>
  );
}

export default MotivationCard;
