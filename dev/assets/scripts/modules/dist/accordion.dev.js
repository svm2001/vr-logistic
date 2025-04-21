'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = accordions

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) descriptor.writable = true
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps)
  if (staticProps) _defineProperties(Constructor, staticProps)
  return Constructor
}

function accordions() {
  var Accordion =
    /*#__PURE__*/
    (function () {
      function Accordion(element) {
        _classCallCheck(this, Accordion)

        this.element = element
        this.button = this.element.querySelector('.accordion__button')
        this.content = this.element.querySelector('.accordion-content')
        var initialExpanded = this.button.getAttribute('aria-expanded')
        this.isOpen = initialExpanded === 'true' || initialExpanded === true
        if (this.isOpen) this.element.classList.add('is-open')
        this.addListeners()
      }

      _createClass(Accordion, [
        {
          key: 'toggleContent',
          value: function toggleContent() {
            this.isOpen = !this.isOpen
            this.button.setAttribute('aria-expanded', this.isOpen)
            this.element.classList.toggle('is-open')
          },
        },
        {
          key: 'addListeners',
          value: function addListeners() {
            var _this = this

            this.button.addEventListener('click', function () {
              return _this.toggleContent()
            })
          },
        },
      ])

      return Accordion
    })()

  var accordions = document.querySelectorAll('[data-accordion-item]')
  accordions.forEach(function (element) {
    return new Accordion(element)
  })
}
