
export default function timerScript(props: any): void {
  const deadline = new Date();
  deadline.setHours(deadline.getHours() + 33)      // подгон под макет
  deadline.setMinutes(deadline.getMinutes() + 44)  // подгон под макет
  let timerId: number = 0

  // склонение числительных
  function declensionNum(num: number, words: string[]) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }

  function countdownTimer() {
    const diff = deadline.getTime() - new Date().getTime();

    if (diff <= 0) {
      window.clearInterval(timerId);
    }

    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;

    props.setDays(days < 10 ? `0${days}` : days)
    props.setHours(hours < 10 ? `0${hours}` : hours)
    props.setMinutes(minutes < 10 ? `0${minutes}` : minutes)
    props.setDaysTitle(declensionNum(days, ['день', 'дня', 'дней']))
    props.setHoursTitle(declensionNum(hours, ['час', 'часа', 'часов']))
    props.setMinutesTitle(declensionNum(minutes, ['минута', 'минуты', 'минут']))
  }
  countdownTimer();
  timerId = window.setInterval(countdownTimer, 1000);
}