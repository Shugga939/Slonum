import './MotivationSection.scss'
import { FC } from 'react';
import MotivationCard from '../../MotivationCard/MotivationCard';
import List from '../../List/List';
import { IMotivationCard } from '../../../models/IMotivationCard';

import start from './../../../assets/img/motivationSection/star.png'
import winner from './../../../assets/img/motivationSection/winner.png'
import certification from './../../../assets/img/motivationSection/certification.png'
import gift from './../../../assets/img/motivationSection/gift.png'
import email from './../../../assets/img/motivationSection/email.png'
import publishing from './../../../assets/img/motivationSection/publishing.png'

const cards : IMotivationCard[] = [
  {img:start, text: 'Шанс занять 1 место — в вашем городе и по всей России'},
  {img:winner, text: 'Развитие самостоятельности + свободное время для родителей ;)'},
  {img:certification, text: 'Персональный диплом в разных номинациях каждому участнику'},
  {img:gift, text: 'Призы и скидки для подписчиков и авторизованных пользователей'},
  {img:email, text: 'Бесплатный диплом на email — через 1 день после конкурса'},
]

const renderCards = (card: IMotivationCard)=> {
  return (
    <MotivationCard
      img={card.img}
      text={card.text}
      key={card.img}
    />
  )
}

const MotivationSection :FC = () => {
  return (
    <div className="motivationSection">
      <div className="motivationSection__wrapper">
        <h2 className="motivationSection__title"> 
          Для чего <span className="motivationSection__title-accent"> нужно</span> участвовать 
        </h2>
        <div className="motivationSection__cards">
          <List items={cards} renderItem={renderCards}/> 
          <MotivationCard 
            img={publishing} 
            TSXelem={[<div className="motivationCard__text"> Публикация работ победителей во ВКонтакте. <a href="# " className="link--secondEminentColor"> Подписывайтесь! </a> </div>]}
            text={''}
            key={publishing}
          />
        </div>
      </div>
    </div>
  );
}

export default MotivationSection;
