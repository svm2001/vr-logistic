import { disablePageScroll, enablePageScroll } from 'scroll-lock'

export default function header() {
  const header = document.querySelector('header')

  if (!header) return

  const checkScroll = () =>
    window.scrollY > 5
      ? header.classList.add('scrollable')
      : header.classList.remove('scrollable')

  

  window.addEventListener('scroll', checkScroll, { passive: true })
  checkScroll()
}
