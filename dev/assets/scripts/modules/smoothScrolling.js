export default function smoothScrolling() {
  const anchors = document.querySelectorAll('[data-smooth-scrolling*="#"]')

  if (!anchors.length) return

  const scrollToSection = blockID => {
    const element = document.querySelector(
      `[data-smooth-scrolling="${blockID}"]`,
    )
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      setTimeout(() => window.innerWidth >= 1200
        ? window.scrollBy({ top: -100, behavior: 'smooth' })
        : window.scrollBy({ top: -65, behavior: 'smooth' }),
      750)
    }
  }

  document.addEventListener('click', event => {
    const el = event.target

    if (el.closest('[data-smooth-scrolling*="#"]')) {
      event.preventDefault()
      const anchor = el.closest('[data-smooth-scrolling*="#"]')
      const blockID = anchor.getAttribute('data-smooth-scrolling').substr(1)

      scrollToSection(blockID)
    }
  })
}
