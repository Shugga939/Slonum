import { FC } from 'react';
import ReactAnime from 'react-animejs'
const { Anime } = ReactAnime

const Rocket: FC = () => {
  return (
    <Anime
      initial={[
        {
          targets: ".animatedImage__rocket",
          translateY: [
            { value: 0, duration: 0 },
            { value: -70, duration: 8000 },
            { value: 0, duration: 4000 },
          ],
          easing: 'easeOutCubic',
          loop: true,
        }
      ]}
    />
  )
}

export default Rocket