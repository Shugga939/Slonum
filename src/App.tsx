import './styles/index.scss'
import './App.scss'
import { FC } from 'react';
import MainSection from './components/sections/MainSection/MainSection';
import DescriptionSection from './components/sections/DescriptionSection/DescriptionSection';
import MotivationSection from './components/sections/MotivationSection/MotivationSection';
import PlanSection from './components/sections/PlanSection/PlanSection';
import RewardSection from './components/sections/RewardSection/RewardSection';
import RegistrationSection from './components/sections/RegistrationSection/RegistrationSection';

const App :FC = () => {
  return (
    <div className="app">
      <div className="app__wrapper">
        <MainSection/>
        <DescriptionSection/>
        <MotivationSection/>
        <PlanSection/>
        <RewardSection/>
        <RegistrationSection/>
      </div>
    </div>
  );
}

export default App;
