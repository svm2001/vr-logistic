export function timer() {
  const timerEl = document.querySelector('.js-timer');
  if (!timerEl) return;

  const eventStartStr = timerEl.getAttribute('data-event-start');

  // Парсим дату из строки, предполагая формат ISO или "YYYY-MM-DDTHH:MM:SS"
  const eventDate = new Date(eventStartStr);
  if (isNaN(eventDate)) {
    console.error('Некорректная дата в data-event-start');
    return;
  }

  const daysCountEl = timerEl.querySelector('[data-day-count]');
  const daysNameEl = timerEl.querySelector('[data-day-name]');
  const hoursCountEl = timerEl.querySelector('[data-hour-count]');
  const hoursNameEl = timerEl.querySelector('[data-hour-name]');
  const minutesCountEl = timerEl.querySelector('[data-minute-count]');
  const minutesNameEl = timerEl.querySelector('[data-minute-name]');
  const secondsCountEl = timerEl.querySelector('[data-second-count]');
  const secondsNameEl = timerEl.querySelector('[data-second-name]');

  const title = timerEl.querySelector('.timer__main-title');
  const titleOver = timerEl.querySelector('.timer__main-title-over');
  const counter = timerEl.querySelector('.timer__counter');

  const MAX_DAYS = 60;
  const MAX_HOURS = 24;
  const MAX_MINUTES = 60;
  const MAX_SECONDS = 60;

  function getTimeRemaining() {
    const now = new Date();
    const total = eventDate - now; // миллисекунды
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function getDeclension(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    const index = (number % 100 > 4 && number % 100 < 20) ? 2 : cases[Math.min(number % 10, 5)];
    return titles[index];
  }

  function updateCircle(sectionEl, percent) {
    sectionEl.style.setProperty('--fill-percent', percent);
  }

  function updateTimer() {
    const t = getTimeRemaining();

    daysCountEl.textContent = t.days;
    hoursCountEl.textContent = t.hours;
    minutesCountEl.textContent = t.minutes;
    secondsCountEl.textContent = t.seconds;

    daysNameEl.textContent = getDeclension(t.days, ['день', 'дня', 'дней']);
    hoursNameEl.textContent = getDeclension(t.hours, ['час', 'часа', 'часов']);
    minutesNameEl.textContent = getDeclension(t.minutes, ['минута', 'минуты', 'минут']);
    secondsNameEl.textContent = getDeclension(t.seconds, ['секунда', 'секунды', 'секунд']);

    const daysPercent = Math.min((t.days / MAX_DAYS) * 100, 100);
    const hoursPercent = Math.min((t.hours / MAX_HOURS) * 100, 100);
    const minutesPercent = Math.min((t.minutes / MAX_MINUTES) * 100, 100);
    const secondsPercent = Math.min((t.seconds / MAX_SECONDS) * 100, 100);

    const daySection = timerEl.querySelector('.timer__section--day');
    const hourSection = timerEl.querySelector('.timer__section--hour');
    const minuteSection = timerEl.querySelector('.timer__section--minute');
    const secondSection = timerEl.querySelector('.timer__section--second');

    if (daySection) updateCircle(daySection, daysPercent);
    if (hourSection) updateCircle(hourSection, hoursPercent);
    if (minuteSection) updateCircle(minuteSection, minutesPercent);
    if (secondSection) updateCircle(secondSection, secondsPercent);

    if (t.total <= 0) {
      clearInterval(timerInterval);
      if (counter) counter.remove();
      if (title) title.remove();
      if (titleOver) titleOver.classList.add('over');
    }
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}
