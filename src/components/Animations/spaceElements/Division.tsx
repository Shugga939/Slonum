import { FC } from 'react';
import ReactAnime from 'react-animejs'
const { Anime } = ReactAnime

const Division: FC = () => {
  return (
    <Anime
      initial={[
        {
          targets: ".animatedImage__division",
          opacity: [
            { value: 0, duration: 0 },
            { value: 1, duration: 3000, easing: 'easeOutCubic' },
            { value: 0, duration: 3000, easing: 'easeOutCubic' },
            { value: 0, duration: 6000 },

          ],
          scale: [
            { value: 0.5, duration: 0 },
            { value: 1, duration: 3000, easing: 'easeOutCubic' },
            { value: 1.2, duration: 3000, easing: 'easeOutCubic' },
            { value: 0.5, duration: 6000 },
          ],
          easing: 'easeInOutQuad',
          loop: true,
        }
      ]}
    />
  )
}

export default Division