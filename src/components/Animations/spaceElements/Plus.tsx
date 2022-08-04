import { FC } from 'react';
import ReactAnime from 'react-animejs'
const { Anime } = ReactAnime

const Plus: FC = () => {
  return (
    <Anime
      initial={[
        {
          targets: ".animatedImage__plus",
          opacity: [
            { value: 0, duration: 6000 },
            { value: 1, duration: 3000, easing: 'easeOutCubic' },
            { value: 0, duration: 3000, easing: 'easeOutCubic' },

          ],
          scale: [
            { value: 0.5, duration: 6000 },
            { value: 1, duration: 3000, easing: 'easeOutCubic' },
            { value: 1.2, duration: 3000, easing: 'easeOutCubic' },
          ],
          easing: 'easeInOutQuad',
          loop: true,
        }
      ]}
    />
  )
}

export default Plus