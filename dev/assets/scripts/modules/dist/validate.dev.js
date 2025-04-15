"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = validate;

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function validate() {
  var forms = document.querySelectorAll('[data-validate]');
  if (!forms.length) return;
  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var inputs = form.querySelectorAll('.input, .checkbox'),
          dataReqexp = {
        fio: /^[А-ЯЁа-яё]+(-[А-ЯЁа-яё]+)? [А-ЯЁа-яё]+( [А-ЯЁа-яё]+)?$/,
        personName: /^[ \u0401\u0410-\u044F\u0451]+$/,
        email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        numbers: /^\d+$/
      },
          error = function error(el) {
        var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Обязательное поле';
        var message = el.querySelector('.input__message');
        return {
          set: function set() {
            if (message) message.innerText = msg;
            var isCheckbox = el.querySelector('input[type="checkbox"]');
            el.classList.add(isCheckbox ? 'checkbox--error' : el.classList.contains('input') ? 'input--error' : 'textarea--error');
          },
          remove: function remove() {
            var isCheckbox = el.querySelector('input[type="checkbox"]');
            el.classList.remove(isCheckbox ? 'checkbox--error' : el.classList.contains('input') ? 'input--error' : 'textarea--error');
            if (message) message.innerText = '';
          }
        };
      },
          validateInput = function validateInput(input) {
        var field = input.querySelector('input'),
            name = field.getAttribute('data-input-name'),
            valueField = field.value;

        if (field.hasAttribute('required')) {
          if (valueField !== '') {
            switch (name) {
              case 'name':
                valueField.length >= 2 && valueField.match(dataReqexp.personName) ? error(input).remove() : error(input, 'Введите корректное имя').set();
                break;

              case 'fio':
                valueField.length > 5 && valueField.match(dataReqexp.fio) ? error(input).remove() : error(input, 'Введите корректное ФИО').set();
                break;

              case 'email':
                valueField.match(dataReqexp.email) ? error(input).remove() : error(input, 'Введите корректный E-mail').set();
                break;

              case 'phone':
                valueField.length === 18 ? error(input).remove() : error(input, 'Введите полный номер телефона').set();
                break;

              case 'agreement':
                var checkboxInput = input.querySelector('input[type="checkbox"]');
                var checkboxWrapper = checkboxInput.closest('.checkbox');
                checkboxInput.checked ? checkboxWrapper.classList.remove('input--error') : checkboxWrapper.classList.add('input--error');
                break;

              default:
                valueField.length !== 0 ? error(input).remove() : error(input).set();
            }
          } else {
            error(input).set();
          }
        }
      },
          checkFields = function checkFields() {
        inputs.forEach(function (input) {
          validateInput(input);
        });
      },
          lifeValidate = function lifeValidate() {
        inputs.forEach(function (input) {
          input.addEventListener('click', function () {
            if (form.getAttribute('data-validate')) {
              var field = input.querySelector('input');
              field.addEventListener('input', function () {
                return validateInput(input);
              });
              checkFields();
            }
          });
        });
      },
          validate = function validate() {
        var errors = 0;
        inputs.forEach(function (input) {
          var field = input.querySelector('input');

          if (field.type === 'checkbox') {
            if (!field.checked) {
              input.classList.add('input--error');
              errors += 1;
            } else {
              input.classList.remove('input--error');
            }
          } else if (input.classList.contains('input--error')) {
            errors += 1;
          }
        });
        var formBody = form.querySelector('.form__body');
        var successMsg = form.querySelector('.form__success');
        var errorMsg = form.querySelector('.form__error');

        if (errors === 0) {
          var formData = new FormData();
          var formInputs = form.querySelectorAll('input');
          formInputs.forEach(function (input) {
            if (input.type === 'checkbox') {
              formData.append(input.name, input.checked);
            } else {
              formData.append(input.name, input.value);
            }
          });
          console.table(Object.fromEntries(formData));

          _jquery["default"].ajax({
            type: 'POST',
            url: form.getAttribute('action') + '?ajax=Y',
            data: formData,
            processData: false,
            contentType: false,
            success: function success(response) {
              console.log('success');
            },
            error: function error(_error) {
              console.error('Ошибка при отправке формы: ', _error.responseText);
            }
          });
        }
      };

      lifeValidate();
      checkFields();
      form.setAttribute('data-validate', 'true');
      validate();
    });
  });
}