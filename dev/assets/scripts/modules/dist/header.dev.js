"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = header;

var _scrollLock = require("scroll-lock");

function header() {
  var header = document.querySelector('header');
  if (!header) return;

  if (window.innerWidth > 1199) {
    var headerLinkMenu = header.querySelectorAll('[data-hover-menu]');
    var plug = document.querySelector('.plug');
    var headerMenuBlocks = header.querySelectorAll('[data-menu]');

    if (headerLinkMenu.length > 0) {
      headerLinkMenu.forEach(function (link) {
        link.addEventListener('mouseenter', function () {
          headerMenuBlocks.forEach(function (block) {
            return block.classList.remove('visible');
          });
          plug.classList.remove('visible');
          var val = link.getAttribute('data-hover-menu');
          var menuBlock = header.querySelector("[data-menu=\"".concat(val, "\"]"));

          if (menuBlock) {
            menuBlock.classList.add('visible');
            plug.classList.add('visible');
          }
        });
      });
      plug.addEventListener('mouseenter', function () {
        headerMenuBlocks.forEach(function (block) {
          return block.classList.remove('visible');
        });
        plug.classList.remove('visible');
      });
      header.addEventListener('mousemove', function (e) {
        var target = e.target;

        if (!target.closest('[data-hover-menu]') && !target.closest('[data-menu]')) {
          headerMenuBlocks.forEach(function (block) {
            return block.classList.remove('visible');
          });
          plug.classList.remove('visible');
        }
      });
      header.addEventListener('mouseleave', function (e) {
        var target = e.relatedTarget;
        if (!target) return;
        var isAllowedTarget = target.closest('.plug') || target.closest('.header__nav-item');

        if (!isAllowedTarget) {
          headerMenuBlocks.forEach(function (block) {
            return block.classList.remove('visible');
          });
          plug.classList.remove('visible');
        }
      });
    }
  } else {
    var burgerBtn = header.querySelector('.js-burger-trigger');
    var burgerBody = header.querySelector('.burger');
    var burgerClose = header.querySelector('.js-burger-close');

    var _plug = document.querySelector('.burger-plug');

    if (burgerBtn && burgerBody && burgerClose) {
      var closeBurger = function closeBurger() {
        burgerBody.classList.remove('open');

        _plug.classList.remove('visible');

        (0, _scrollLock.enablePageScroll)(document.body);
      };

      var callFormBtn = document.querySelector('.burger-call-form');
      burgerBtn.addEventListener('click', function () {
        burgerBody.classList.add('open');

        _plug.classList.add('visible');

        (0, _scrollLock.disablePageScroll)(document.body);
      });
      burgerClose.addEventListener('click', function () {
        return closeBurger();
      });

      _plug.addEventListener('click', function () {
        return closeBurger();
      });

      if (callFormBtn) callFormBtn.addEventListener('click', function () {
        return closeBurger();
      });
    }
  }
}