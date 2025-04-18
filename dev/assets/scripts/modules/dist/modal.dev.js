"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = modal;

function modal() {
  var padding = '15px';
  var body = document.body;
  var header = document.querySelector('header');
  return new HystModal({
    linkAttributeName: 'data-hystmodal',
    waitTransitions: true,
    backscroll: true,
    beforeOpen: function beforeOpen() {
      if (window.innerWidth > 1200) {
        console.log(0);
        body.style.paddingRight = padding;
        header.style.paddingRight = padding;
      }
    },
    afterClose: function afterClose() {
      if (window.innerWidth > 1200) {
        body.style.paddingRight = '0';
        console.log(11);
        header.style.paddingRight = '0';
      }
    }
  });
}