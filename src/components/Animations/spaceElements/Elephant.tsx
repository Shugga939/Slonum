import { FC } from 'react';
import ReactAnime from 'react-animejs'
const { Anime } = ReactAnime

const Elephant: FC = () => {
  return (
    <Anime
      initial={[
        {
          targets: ".animatedImage__elephant",
          rotate: [
            { value: -11, duration: 0 },
            { value: 41, duration: 6000 },
            { value: -11, duration: 6000 },
          ],
          translateX: [
            { value: 10, duration: 6000 },
            { value: 0, duration: 6000 },
          ],
          easing: 'easeInOutQuad',
          loop: true,
        }
      ]}
    />
  )
}

export default Elephant