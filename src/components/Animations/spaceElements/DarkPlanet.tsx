import { FC } from 'react';
import ReactAnime from 'react-animejs'
const { Anime } = ReactAnime

const DarkPlanet: FC = () => {
  return (
    <Anime
      initial={[
        {
          targets: ".animatedImage__dark-planet",
          rotate: [
            { value: -45, duration: 6000, },
            { value: 0, duration: 6000, },
          ],
          easing: 'easeInOutQuad',
          loop: true,
        }
      ]}
    />
  )
}

export default DarkPlanet