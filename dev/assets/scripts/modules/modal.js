export default function modal() {
  const padding = `${window.innerWidth - document.documentElement.clientWidth}px`
  const body = document.body
  const header = document.querySelector('header')

  return new HystModal({
    linkAttributeName: 'data-hystmodal',
    waitTransitions: true,
    backscroll: true,
    beforeOpen: () => {
      if(window.innerWidth > 1199) {
        body.style.paddingRight = padding
        header.style.paddingRight = padding
      }
    },
    afterClose: () => {
      if(window.innerWidth > 1199) {
        body.style.paddingRight = '0'
        header.style.paddingRight = '0'
      }
    }
  })
}
