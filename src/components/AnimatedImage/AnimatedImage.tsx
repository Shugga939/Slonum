import './AnimatedImage.scss'
import { FC } from 'react';
import space from './../../assets/img/animatedImage/spaceBackground.svg'
import stars from './../../assets/img/animatedImage/stars.svg'
import airplane from './../../assets/img/animatedImage/airplane.svg'
import elephant from './../../assets/img/animatedImage/elephant.svg'
import clock from './../../assets/img/animatedImage/clock.svg'
import bulb from './../../assets/img/animatedImage/bulb.svg'
import planet1 from './../../assets/img/animatedImage/big-planet.svg'
import planet2 from './../../assets/img/animatedImage/striped-planet.svg'
import planet3 from './../../assets/img/animatedImage/dark-planet.svg'
import atom from './../../assets/img/animatedImage/atom.svg'
import number0 from './../../assets/img/animatedImage/number-0.svg'
import number1 from './../../assets/img/animatedImage/number-1.svg'
import division from './../../assets/img/animatedImage/division.svg'
import plus from './../../assets/img/animatedImage/plus.svg'
import palette from './../../assets/img/animatedImage/palette.svg'
import rocket from './../../assets/img/animatedImage/rocket.svg'
import balloon from './../../assets/img/animatedImage/balloon.svg'
import airplanes from './../../assets/img/animatedImage/airplanes.svg'
import child from './../../assets/img/animatedImage/child.svg'
import pencil from './../../assets/img/animatedImage/pencil.svg'
import Animations from '../Animations/HeaderAnimation';


const AnimatedImage: FC = () => {
  return (
    <div className="animatedImage">
      <Animations />
      <div className="animatedImage__space">
        <img src={space} alt="" className="animatedImage__space-background" />
        <img src={stars} alt="" className="animatedImage__stars" />
        <img src={airplane} alt="" className="animatedImage__airplane" />
        <img src={elephant} alt="" className="animatedImage__elephant" />
        <img src={clock} alt="" className="animatedImage__clock" />
        <img src={bulb} alt="" className="animatedImage__bulb" />
        <img src={planet1} alt="" className="animatedImage__big-planet" />
        <img src={planet2} alt="" className="animatedImage__striped-planet" />
        <img src={planet3} alt="" className="animatedImage__dark-planet" />
        <img src={atom} alt="" className="animatedImage__atom" />
        <img src={number0} alt="" className="animatedImage__number-0" />
        <img src={number1} alt="" className="animatedImage__number-1" />
        <img src={division} alt="" className="animatedImage__division" />
        <img src={plus} alt="" className="animatedImage__plus" />
        <img src={palette} alt="" className="animatedImage__palette" />
        <img src={rocket} alt="" className="animatedImage__rocket" />
        <img src={balloon} alt="" className="animatedImage__balloon" />
      </div>
      <div className="animatedImage__child-container">
        <img src={pencil} alt="" className="animatedImage__pencil" />
        <img src={child} alt="" className="animatedImage__child" />
      </div>
      <div className="animatedImage__paper-airplanes">
        <img src={airplanes} alt="" className="animatedImage__airplanes" />
      </div>
    </div>
  );
}

export default AnimatedImage;
