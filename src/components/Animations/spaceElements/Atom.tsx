import { FC } from 'react';
import ReactAnime from 'react-animejs'
const { Anime } = ReactAnime

const Atom: FC = () => {
  return (
    <Anime
      initial={[
        {
          targets: ".animatedImage__atom",
          rotate: [
            { value: 0, duration: 0 },
            { value: -45, duration: 6000, easing: 'easeOutCubic' },
            { value: 0, duration: 6000, easing: 'easeInSine' },
          ],
          scale: [
            { value: 0, duration: 0 },
            { value: 1, duration: 6000, easing: 'easeOutCubic' },
            { value: 0, duration: 6000, easing: 'easeInSine' },
          ],
          easing: 'easeOutCubic',
          loop: true,
        }
      ]}
    />
  )
}

export default Atom