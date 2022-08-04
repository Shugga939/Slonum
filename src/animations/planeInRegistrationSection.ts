import anime from "animejs";

export default function planesAnimation() {
  const sideIndent = window.innerWidth > 1920 ? 0 : (1920 - window.innerWidth) / 2  // правка по оси X если ширина меньше 1920px
  const myTimeline = anime.timeline({
    easing: 'easeOutQuad',
  });

  myTimeline
    .add({
      targets: '.registrationSection__form-airplane--flying',
      translateX: [
        { value: sideIndent + 300, duration: 0, },
        { value: sideIndent - 400, duration: 1200, },
      ],
      translateY: [
        { value: -200, duration: 0, },
        { value: 230, duration: 900, },

      ],
      rotate: [
        { value: -40, duration: 300, },
        { value: 17, duration: 700, },
        { value: 20, duration: 200, },

      ]
    })
    .add({
      targets: '.registrationSection__form-airplane--flying',
      translateX: [
        { value: sideIndent - 380, duration: 0, },
        { value: sideIndent - 510, duration: 500, },
      ],
      rotate: [
        { value: 20, duration: 0, },
        { value: 30, duration: 500, },
      ]
    }, 950)
    .add({
      targets: '.registrationSection__form-airplane--left',
      translateX: [
        { value: 0, duration: 0, },
        { value: -40, duration: 400, },
      ],
      rotate: [
        { value: -10, duration: 400, },
      ]
    }, 1100)
    .add({
      targets: '.registrationSection__form-airplane--right',
      translateX: [
        { value: 0, duration: 0, },
        { value: -20, duration: 400, },
      ],
      rotate: [
        { value: 5, duration: 400, },
      ]
    }, 1100)
}
