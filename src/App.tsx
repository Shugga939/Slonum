import './styles/index.scss'
import './App.scss'
import { FC } from 'react';
import MainSection from './components/sections/MainSection/MainSection';

const App :FC = () => {
  return (
    <div className="app">
      <div className="app__wrapper">
        <MainSection/>
      </div>
    </div>
  );
}

export default App;
