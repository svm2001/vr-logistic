import lazyLoad from './modules/lazyload'
import modal from './modules/modal'
import validate from './modules/validate'
import phoneMask from './modules/phoneMask'
import header from './modules/header'
import smoothScrolling from './modules/smoothScrolling'
import lazyBlocks from './modules/lazy-blocks'
import accordions from './modules/accordion'
// import preloader from 'preloader-js'
export default function main() {
  lazyBlocks()
  lazyLoad()
  modal()
  header()
  validate()
  phoneMask()
  smoothScrolling()
  accordions()

  // setTimeout(() => preloader.hide(), 0)
}
