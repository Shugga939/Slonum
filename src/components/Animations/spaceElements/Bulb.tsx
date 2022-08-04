import { FC } from 'react';
import ReactAnime from 'react-animejs'
const { Anime } = ReactAnime

const Bulb: FC = () => {
  return (
    <Anime
      initial={[
        {
          targets: ".animatedImage__bulb",
          rotate: [
            { value: 15, duration: 0 },
            { value: -35, duration: 4000 },
            { value: 15, duration: 3500 },
            { value: 30, duration: 2000 },
            { value: 15, duration: 2500 },
          ],
          easing: 'cubicBezier(0.25, 0.1, 0.25, 1.0)',
          loop: true,
        }
      ]}
    />
  )
}

export default Bulb