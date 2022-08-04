import { FC } from 'react';
import ReactAnime from 'react-animejs'
const { Anime } = ReactAnime

const Balloon: FC = () => {
  return (
    <Anime
      initial={[
        {
          targets: ".animatedImage__balloon",
          translateY: [
            { value: 34, duration: 6000 },
            { value: 0, duration: 6000 },
          ],
          easing: 'easeInOutQuad',
          loop: true,
        }
      ]}
    />
  )
}

export default Balloon