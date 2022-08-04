import { FC } from 'react';
import ReactAnime from 'react-animejs'
const { Anime } = ReactAnime

const BigPlanet: FC = () => {
  return (
    <Anime
      initial={[
        {
          targets: ".animatedImage__big-planet",
          translateX: [
            { value: -50, duration: 6000 },
            { value: 0, duration: 6000 },
          ],
          translateY: [
            { value: 20, duration: 6000 },
            { value: 0, duration: 6000 },
          ],
          easing: 'easeInOutQuad',
          loop: true,
        }
      ]}
    />
  )
}

export default BigPlanet