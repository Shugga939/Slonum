import { FC, useEffect, useState } from 'react';
import Pencil from './Pencil';
import Space from './Space';
import Airplane from './spaceElements/Airplane';
import Atom from './spaceElements/Atom';
import Balloon from './spaceElements/Balloon';
import BigPlanet from './spaceElements/BigPlanet';
import Bulb from './spaceElements/Bulb';
import Clock from './spaceElements/Clock';
import DarkPlanet from './spaceElements/DarkPlanet';
import Division from './spaceElements/Division';
import Elephant from './spaceElements/Elephant';
import Palette from './spaceElements/Palette';
import Plus from './spaceElements/Plus';
import Rocket from './spaceElements/Rocket';
import StripedPlanet from './spaceElements/StripedPlanet';

const Animations: FC = () => {

  const [play, setPlay] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPlay(true)
    }, 2000)
  }, [])

  return (
    <>
      <Space />
      <Pencil />
      {play ?      //  Space elements animated after 2 sec delay
        <>
          <Palette />
          <Balloon />
          <Plus />
          <Division />
          <DarkPlanet />
          <BigPlanet />
          <StripedPlanet />
          <Atom />
          <Clock />
          <Rocket />
          <Bulb />
          <Airplane />
          <Elephant />
        </>
        : ''
      }
    </>
  );
}

export default Animations;