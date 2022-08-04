import { FC } from 'react';
import ReactAnime from 'react-animejs'
const { Anime } = ReactAnime

const Airplane: FC = () => {
  return (
    <Anime
      initial={[
        {
          targets: ".animatedImage__airplane",
          rotate: [
            { value: 45, duration: 0 },
            { value: 0, duration: 7000 },
            { value: 45, duration: 5000 },

          ],
          scale: [
            { value: 0.5, duration: 0 },
            { value: 1, duration: 7000 },
            { value: 0.5, duration: 5000 },
          ],
          easing: 'easeInOutQuad',
          loop: true,
        }
      ]}
    />
  )
}

export default Airplane