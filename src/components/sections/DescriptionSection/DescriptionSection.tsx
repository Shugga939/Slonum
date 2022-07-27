import './DescriptionSection.scss'
import { FC } from 'react';

const DescriptionSection :FC = () => {
  return (
    <div className="descriptionSection">
      <div className="descriptionSection__wrapper">
          <p className="p-1 descriptionSection__paragraph">
            Компания <b> СлонУм </b> – проводит конкурс для детей в котором могут участвовать ребята 
            <strong> всех возрастов!  </strong>
            Имеются номинации в которых можно победить, есть возможность проявить себя во всех направлениях 
            и даже <strong>  без художественных способностей. </strong>
          </p>
      </div>
    </div>
  );
}

export default DescriptionSection;
