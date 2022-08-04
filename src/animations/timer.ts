import anime from 'animejs'

export default function TimerAnimation() {
  anime({
    easing: 'linear',
    duration: 1500,
    targets: '.timer__dots',
    opacity: [
      { value: 0, duration: 0, },
      { value: 1, duration: 500, },
      { value: 1, duration: 1000, },
    ],
    loop: true,
  })
}