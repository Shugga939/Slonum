import { FC, useEffect, useState } from 'react';
import ReactAnime from 'react-animejs'
const { Anime } = ReactAnime

const Animations: FC = () => {

  const [play, setPlay] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPlay(true)
    }, 2000)
  }, [])

  return (
    <>
      <Anime
        initial={[
          {
            targets: ".animatedImage__space",   // main container
            opacity: [
              { value: 0, duration: 0 },
              { value: 1, duration: 1500 },
            ],
            easing: 'linear',
            delay: 500
          }
        ]}
      />
      <Anime
        initial={[
          {
            targets: ".animatedImage__pencil",   // main container
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
      {/* Space elements animated after 2 sec delay   */}

      {play ?
        <>
          <Anime
            initial={[
              {
                targets: ".animatedImage__palette",     // __palette
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
          <Anime
            initial={[
              {
                targets: ".animatedImage__balloon",     // balloon
                translateY: [
                  { value: 34, duration: 6000 },  
                  { value: 0, duration: 6000 },
                ],
                easing: 'easeInOutQuad',
                loop: true,
              }
            ]}
          />
          <Anime
            initial={[
              {
                targets: ".animatedImage__balloon",     // balloon
                translateY: [
                  { value: 34, duration: 6000 },  
                  { value: 0, duration: 6000 },
                ],
                easing: 'easeInOutQuad',
                loop: true,
              }
            ]}
          />
          <Anime
            initial={[
              {
                targets: ".animatedImage__plus",     // plus
                opacity: [
                  { value: 0, duration: 6000 },
                  { value: 1, duration: 3000, easing:'easeOutCubic' },
                  { value: 0, duration: 3000, easing:'easeOutCubic' },

                ],
                scale: [
                  { value: 0.5, duration: 6000 },
                  { value: 1, duration: 3000, easing:'easeOutCubic'},
                  { value: 1.2, duration: 3000, easing:'easeOutCubic'},
                ],
                easing: 'easeInOutQuad',
                loop: true,
              }
            ]}
          />
          <Anime
            initial={[
              {
                targets: ".animatedImage__division",     // division
                opacity: [
                  { value: 0, duration: 0 },
                  { value: 1, duration: 3000, easing:'easeOutCubic' },
                  { value: 0, duration: 3000, easing:'easeOutCubic' },
                  { value: 0, duration: 6000 },

                ],
                scale: [
                  { value: 0.5, duration: 0},
                  { value: 1, duration: 3000, easing:'easeOutCubic'},
                  { value: 1.2, duration: 3000, easing:'easeOutCubic'},
                  { value: 0.5, duration: 6000 },
                ],
                easing: 'easeInOutQuad',
                loop: true,
              }
            ]}
          />
          <Anime
            initial={[
              {
                targets: ".animatedImage__dark-planet",     // dark-planet
                rotate: [
                  { value: -45, duration: 6000, },
                  { value: 0, duration: 6000, },
                ],
                easing: 'easeInOutQuad',
                loop: true,
              }
            ]}
          />
          <Anime
            initial={[
              {
                targets: ".animatedImage__big-planet",     // big-planet
                translateX: [
                  { value: -50, duration: 6000 },  
                  { value: 0, duration: 6000 },
                ],
                translateY: [
                  { value: 20, duration: 6000 },  
                  { value: 0, duration: 6000 },
                ],
                easing: 'easeInOutQuad',
                loop: true,
              }
            ]}
          />
          <Anime
            initial={[
              {
                targets: ".animatedImage__striped-planet",     // striped-planet
                translateX: [
                  { value: 0, duration: 800 },
                  { value: 30, duration: 6000 },  
                  { value: 0, duration: 5200 },
                ],
                easing: 'easeInOutQuad',
                loop: true,
              }
            ]}
          />
          <Anime
            initial={[
              {
                targets: ".animatedImage__atom",     // atom
                rotate: [
                  { value: 0, duration: 0 },
                  { value: -45, duration: 6000, easing:'easeOutCubic' },
                  { value: 0, duration: 6000, easing:'easeInSine' },
                ],
                scale: [
                  { value: 0, duration: 0},
                  { value: 1, duration: 6000, easing:'easeOutCubic'},
                  { value: 0, duration: 6000, easing:'easeInSine'},
                ],
                easing: 'easeOutCubic',
                loop: true,
              }
            ]}
          />
          <Anime
            initial={[
              {
                targets: ".animatedImage__clock",     // clock
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
          <Anime
            initial={[
              {
                targets: ".animatedImage__rocket",     // rocket
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
          <Anime
            initial={[
              {
                targets: ".animatedImage__bulb",     // bulb
                rotate: [
                  { value: 15, duration: 0 },
                  { value: -35, duration: 4000 },
                  { value: 15, duration: 3500 },
                  { value: 30, duration: 2000 },
                  { value: 15, duration: 2500 },
                ],
                easing: 'cubicBezier(0.25, 0.1, 0.25, 1.0)',
                loop: true,
              }
            ]}
          />
          <Anime
            initial={[
              {
                targets: ".animatedImage__airplane",     // airplane
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
          <Anime
            initial={[
              {
                targets: ".animatedImage__elephant",     // elephant
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
        </>
        : ''
      }
    </>
  );
}

export default Animations;