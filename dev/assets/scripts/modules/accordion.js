export default function accordions() {
  class Accordion {
    constructor(element) {
      this.element = element
      this.button = this.element.querySelector('.accordion__button')
      this.content = this.element.querySelector('.accordion-content')
      const initialExpanded = this.button.getAttribute('aria-expanded')
      this.isOpen = initialExpanded === 'true' || initialExpanded === true
      if (this.isOpen) this.element.classList.add('is-open')
      this.addListeners()
    }

    toggleContent() {
      this.isOpen = !this.isOpen
      this.button.setAttribute('aria-expanded', this.isOpen)
      this.element.classList.toggle('is-open')
    }

    addListeners() {
      this.button.addEventListener('click', () => this.toggleContent())
    }
  }

  const accordions = document.querySelectorAll('[data-accordion-item]')
  accordions.forEach(element => new Accordion(element))
}
