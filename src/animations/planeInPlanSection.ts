import anime from "animejs";

export default function planeAnimation(animatedPlane: HTMLImageElement) {

  const sideIndent = window.innerWidth > 1920 ? 0 : (1920 - window.innerWidth) / 2  // правка по оси X если ширина меньше 1920px
  animatedPlane!.style.left = `${-sideIndent - 150}px`

  const myTimeline = anime.timeline({
    easing: 'easeInOutQuad',
    duration: 2000,
  });
  const path = anime.path('.planSection__plane-path path');
  anime({
    easing: 'easeInOutQuad',
    duration: 3000,
    targets: '.planSection__papper__plane',
    translateX: path('x'),
    translateY: path('y'),
    rotate: [
      { value: 30, duration: 0, },
      { value: 50, duration: 1300, },
      { value: 10, duration: 800, },
    ],
  })
  myTimeline
    .add({
      targets: '.planSection__stepOne-text',
      opacity: [
        { value: 0, duration: 800, },
        { value: 1, duration: 400, },
      ],
      translateX: [
        { value: 0, duration: 800, },
        { value: -20, duration: 400, },
      ]
    })
    .add({
      targets: '.planSection__stepTwo-text',
      opacity: [
        { value: 0, duration: 0, },
        { value: 1, duration: 400, },
      ],
      translateX: [
        { value: 0, duration: 0, },
        { value: -20, duration: 400, },
      ]
    })
    .add({
      targets: '.planSection__stepThree-text',
      opacity: [
        { value: 0, duration: 0, },
        { value: 1, duration: 400, },
      ],
      translateX: [
        { value: 0, duration: 0, },
        { value: -20, duration: 400, },
      ]
    })
}