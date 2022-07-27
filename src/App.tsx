import './styles/index.scss'
import './App.scss'
import { FC } from 'react';
import MainSection from './components/sections/MainSection/MainSection';
import DescriptionSection from './components/sections/DescriptionSection/DescriptionSection';
import MotivationSection from './components/sections/MotivationSection/MotivationSection';

const App :FC = () => {
  return (
    <div className="app">
      <div className="app__wrapper">
        <MainSection/>
        <DescriptionSection/>
        <MotivationSection/>
      </div>
    </div>
  );
}

export default App;
