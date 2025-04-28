export function hero() {
  const hero = document.querySelector('.hero')

  if(!hero) return

  const videoDesktop = hero.querySelector('.hero__video--desktop')
  const videoMobile = hero.querySelector('.hero__video--mobile')
  const text = hero.querySelector('.hero__inner')

  const animation = (video, block, delay) => {
    if (video && block) {
      video.addEventListener('timeupdate', () => {
        const timeLeft = video.duration - video.currentTime
        if (timeLeft <= delay && !block.classList.contains('visible')) block.classList.add('visible')
      })
    }
  }

  window.innerWidth > 767 ? animation(videoDesktop, text, 2) : animation(videoMobile, text, 1)
}