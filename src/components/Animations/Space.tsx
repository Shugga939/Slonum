import { FC } from 'react';
import ReactAnime from 'react-animejs'
const { Anime } = ReactAnime

const Space: FC = () => {
  return (
    <Anime
      initial={[
        {
          targets: ".animatedImage__space",
          opacity: [
            { value: 0, duration: 0 },
            { value: 1, duration: 1500 },
          ],
          easing: 'linear',
          delay: 500
        }
      ]}
    />
  )
}

export default Space