import './RewardSection.scss'
import { FC } from 'react';
import Diploma from '../../Diploma/Diploma';

const RewardSection :FC = () => {
  return (
    <section className="rewardSection">
      <div className="rewardSection__wrapper">
        <div className="rewardSection__text">
          <h2 className="rewardSection__title">
            Выдаём <span className="rewardSection__title-accent"> дипломы </span> участникам
          </h2>
          <p className="p-2 rewardSection__subtitle">
            Жюри конкурса рассмотрит работы и выделит победителей по городам и возрастным категориям, 
            а также определит другие номинации, подчеркнув уникальную особенность каждого конкретного 
            рисунка — дипломы получат все дети! <br /><br />
            Скачать диплом можно будет в личном кабинете через сутки после окончания конкурса, 
            дополнительно вышлем его на e-mail. <br /><br />
            Со слоном к победам напролом!
          </p>
        </div>
        <div className="rewardSection__diploma">
          <Diploma/>
        </div>
      </div>
    </section>
  );
}

export default RewardSection;
