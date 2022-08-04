import { FC } from 'react';
import ReactAnime from 'react-animejs'
const { Anime } = ReactAnime

const StripedPlanet: FC = () => {
  return (
    <Anime
      initial={[
        {
          targets: ".animatedImage__striped-planet",
          translateX: [
            { value: 0, duration: 800 },
            { value: 30, duration: 6000 },
            { value: 0, duration: 5200 },
          ],
          easing: 'easeInOutQuad',
          loop: true,
        }
      ]}
    />
  )
}

export default StripedPlanet