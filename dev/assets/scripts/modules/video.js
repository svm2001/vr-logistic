export function video() {
  const videoBlock = document.querySelectorAll('.video')

  if (!videoBlock.length) return

  videoBlock.forEach(el => {
    const video = el.querySelector('video')
    const poster = el.querySelector('.video__poster')
    const bgPlug = el.querySelector('.video__bg-plug')
    const play = el.querySelector('.btn--play')
    const text = el.querySelector('.video__inner')
    const close = el.querySelector('.video__close')


    if (play) {
      play.addEventListener('click', () => {
        if (poster) poster.classList.add('hide')
        if (bgPlug) bgPlug.classList.add('hide')
        if (text) text.classList.add('hide')
        if (close) close.classList.add('visible')

        setTimeout(() => video.play(), 500)

        if (window.innerWidth <= 767) {
          el.style.height = `${video.scrollHeight}px`
          setTimeout(() => {
            const rect = el.getBoundingClientRect()
            const scrollPosition = (window.pageYOffset + rect.top - ((window.innerHeight - el.scrollHeight) / 2)) - (window.innerHeight - (video.scrollHeight * 2.5))
            window.scrollTo({
              top: scrollPosition,
              behavior: 'smooth'
            })

          }, 100)
        }
      })
    }

    if (close) {
      close.addEventListener('click', () => {
        video.pause()

        if (poster) poster.classList.remove('hide')
        if (bgPlug) bgPlug.classList.remove('hide')
        if (text) text.classList.remove('hide')
        if (close) close.classList.remove('visible')

        if (window.innerWidth <= 767) {
          el.style.height = `100%`

          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      })
    }
  })
}
