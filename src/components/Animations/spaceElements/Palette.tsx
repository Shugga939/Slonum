import { FC } from 'react';
import ReactAnime from 'react-animejs'
const { Anime } = ReactAnime

const Palette: FC = () => {
  return (
    <Anime
      initial={[
        {
          targets: ".animatedImage__palette",
          rotate: [
            { value: 0, duration: 3000, },
            { value: 360, duration: 7000, },
            { value: 360, duration: 2000, },
          ],
          easing: 'easeInOutQuad',
          loop: true,
        }
      ]}
    />
  )
}

export default Palette