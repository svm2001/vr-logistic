export function hero() {
  const hero = document.querySelector('.hero')

  if(!hero) return

  const video = hero.querySelector('video')
  const text = hero.querySelector('.hero__inner')

  if (video && text) {
    video.addEventListener('timeupdate', () => {
      const timeLeft = video.duration - video.currentTime
      if (timeLeft <= 2 && !text.classList.contains('visible')) text.classList.add('visible')
    })
  }
}