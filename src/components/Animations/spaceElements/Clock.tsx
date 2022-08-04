import { FC } from 'react';
import ReactAnime from 'react-animejs'
const { Anime } = ReactAnime

const Clock: FC = () => {
  return (
    <Anime
      initial={[
        {
          targets: ".animatedImage__clock",
          rotate: [
            { value: -360, duration: 12000 },
          ],
          scale: [
            { value: 0.7, duration: 0 },
            { value: 1, duration: 6000 },
            { value: 0.7, duration: 6000 },
          ],
          easing: 'easeOutCubic',
          loop: true,
        }
      ]}
    />
  )
}

export default Clock