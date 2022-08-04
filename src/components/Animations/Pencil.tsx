import { FC } from 'react';
import ReactAnime from 'react-animejs'
const { Anime } = ReactAnime

const Pencil: FC = () => {
  return (
    <Anime
      initial={[
        {
          targets: ".animatedImage__pencil",
          rotate: [
            { value: 66, duration: 1500, },
            { value: -12, duration: 1500, },
            { value: 0, duration: 1500, },
          ],
          translateX: [
            { value: 10, duration: 1500 },
            { value: -10, duration: 1500 },
            { value: 0, duration: 1500 },
          ],
          translateY: [
            { value: -20, duration: 1500 },
            { value: -3, duration: 1500 },
            { value: 0, duration: 1500 },
          ],
          easing: 'easeOutElastic(1, 0.4)',
          loop: true,
        }
      ]}
    />
  )
}

export default Pencil