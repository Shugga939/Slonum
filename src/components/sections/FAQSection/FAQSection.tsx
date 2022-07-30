import './FAQSection.scss'
import { FC } from 'react';
import DropdownListItem from '../../ui/DropdownList/DropdownListItem';
import { IDropdownItem } from '../../../models/IDropdownItem';
import List from '../../List/List';


const dropdownItems: IDropdownItem[] = [
  {
    title:"Может ли ребёнок заниматься самостоятельно?",
    spoiler: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor"
  },
  {
    title:"Как происходит оплата?",
    spoiler: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor"
  },
  {
    title:"Есть ли гарантии усвоения материала?",
    spoiler: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor"
  },
  {
    title:"С кем будет общаться мой ребёнок?",
    spoiler: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor"
  },
  {
    title:"Каковы принципы обучения??",
    spoiler: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor"
  },
  {
    title:"Сколько раз в неделю можно заниматься??",
    spoiler: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor"
  }
]

const renderDropdownItems = (item:IDropdownItem)=> {
  return (
    <DropdownListItem title={item.title} spoiler={item.spoiler} key={item.title}/>
  )
}

const FAQSection :FC = () => {
  return (
    <section className="FAQSection">
      <div className="FAQSection__wrapper">
        <h2 className="FAQSection__title">Вопрос/Ответ</h2>
        <div className="FAQSection__list-container">
          <List items={dropdownItems} renderItem={renderDropdownItems}/>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
