import { enablePageScroll } from 'scroll-lock'

export default function header() {
  const header = document.querySelector('header')
  const footer = document.querySelector('footer')

  if (!header) return

  const checkHeaderVisibility = () => {
    const headerRect = header.getBoundingClientRect()
    const footerRect = footer.getBoundingClientRect()

    if (headerRect.bottom > footerRect.top) {
      header.classList.add('invisible')
    } else {
      header.classList.remove('invisible')
    }
  }

  window.addEventListener('scroll', checkHeaderVisibility)
  window.addEventListener('resize', checkHeaderVisibility)

  if (window.innerWidth > 1199) {
    const headerLinkMenu = header.querySelectorAll('[data-hover-menu]')
    const plug = document.querySelector('.plug')
    const headerMenuBlocks = header.querySelectorAll('[data-menu]')

    if (headerLinkMenu.length > 0) {
      headerLinkMenu.forEach(link => {
        link.addEventListener('mouseenter', () => {
          headerMenuBlocks.forEach(block => block.classList.remove('visible'))
          plug.classList.remove('visible')

          const val = link.getAttribute('data-hover-menu')
          const menuBlock = header.querySelector(`[data-menu="${val}"]`)
          if (menuBlock) {
            menuBlock.classList.add('visible')
            plug.classList.add('visible')
          }
        })
      })

      plug.addEventListener('mouseenter', () => {
        headerMenuBlocks.forEach(block => block.classList.remove('visible'))
        plug.classList.remove('visible')
      })

      header.addEventListener('mousemove', e => {
        const target = e.target
        if (
          !target.closest('[data-hover-menu]') &&
          !target.closest('[data-menu]')
        ) {
          headerMenuBlocks.forEach(block => block.classList.remove('visible'))
          plug.classList.remove('visible')
        }
      })

      header.addEventListener('mouseleave', e => {
        const target = e.relatedTarget
        if (!target) return

        const isAllowedTarget =
          target.closest('.plug') || target.closest('.header__nav-item')
        if (!isAllowedTarget) {
          headerMenuBlocks.forEach(block => block.classList.remove('visible'))
          plug.classList.remove('visible')
        }
      })
    }
  } else {
    const burgerBtn = header.querySelector('.js-burger-trigger')
    const burgerBody = header.querySelector('.burger')
    const burgerClose = header.querySelector('.js-burger-close')
    const plug = document.querySelector('.burger-plug')

    if(burgerBtn && burgerBody && burgerClose) {
      const closeBurger = () => {
        burgerBody.classList.remove('open')
        plug.classList.remove('visible')
        enablePageScroll(document.body)
        document.body.style.position = ''
        document.body.style.top = ''
      }

      const callFormBtn = document.querySelector('.burger-call-form')

      burgerBtn.addEventListener('click', () => {
        burgerBody.classList.add('open')
        plug.classList.add('visible')
        document.body.style.position = 'fixed'
        document.body.style.top = `-${window.scrollY}px`
      })

      burgerClose.addEventListener('click', () => closeBurger())
      plug.addEventListener('click', () => closeBurger())
      if (callFormBtn)
        callFormBtn.addEventListener('click', () => closeBurger())
    }
  }
}
