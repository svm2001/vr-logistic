import $ from 'jquery'

export default function validate() {
  const forms = document.querySelectorAll('[data-validate]')

  if (!forms.length) return

  forms.forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      const inputs = form.querySelectorAll('.input, .checkbox, .textarea'),
        dataReqexp = {
          fio: /^[А-ЯЁа-яё]+(-[А-ЯЁа-яё]+)? [А-ЯЁа-яё]+( [А-ЯЁа-яё]+)?$/,
          personName: /^[а-яёА-ЯЁA-Za-z]+$/u,
          email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
          numbers: /^\d+$/,
        },
        error = (el, msg = 'Обязательное поле') => {
          const message = el.querySelector('.input__message')

          return {
            set: () => {
              if (message) message.innerText = msg
              const isCheckbox = el.querySelector('input[type="checkbox"]')
              el.classList.add(
                isCheckbox
                  ? 'checkbox--error'
                  : el.classList.contains('input')
                  ? 'input--error'
                  : 'textarea--error',
              )
            },
            remove: () => {
              const isCheckbox = el.querySelector('input[type="checkbox"]')
              el.classList.remove(
                isCheckbox
                  ? 'checkbox--error'
                  : el.classList.contains('input')
                  ? 'input--error'
                  : 'textarea--error',
              )
              if (message) message.innerText = ''
            },
          }
        },
        validateInput = input => {
          const field = input.querySelector('input, textarea'),
            name = field.getAttribute('data-input-name'),
            valueField = field.value

          if (field.hasAttribute('isrequired')) {
            if (field.type === 'file') {
              field.files.length > 0
                ? error(input).remove()
                : error(input, 'Выберите файл').set()
            } else if (valueField === '') {
              error(input, 'Обязательное поле').set()
            } else if (valueField !== '') {
              switch (name) {
                case 'name':
                  valueField.length >= 2 &&
                  valueField.match(dataReqexp.personName)
                    ? error(input).remove()
                    : error(input, 'Введите корректное ФИО').set()
                  break
                case 'fio':
                  valueField.length > 5 && valueField.match(dataReqexp.fio)
                    ? error(input).remove()
                    : error(input, 'Введите корректное ФИО').set()
                  break
                case 'email':
                  valueField.match(dataReqexp.email)
                    ? error(input).remove()
                    : error(input, 'Введите корректный E-mail').set()
                  break
                case 'phone':
                  valueField.length === 18
                    ? error(input).remove()
                    : error(input, 'Введите полный номер телефона').set()
                  break
                case 'agreement':
                  const checkboxInput = input.querySelector(
                    'input[type="checkbox"]',
                  )
                  const checkboxWrapper = checkboxInput.closest('.checkbox')
                  checkboxInput.checked
                    ? checkboxWrapper.classList.remove('input--error')
                    : checkboxWrapper.classList.add('input--error')
                  break
                default:
                  valueField.length !== 0
                    ? error(input).remove()
                    : error(input).set()
              }
            } else {
              // error(input).set()
            }
          }
        },
        checkFields = () => {
          inputs.forEach(input => {
            validateInput(input)
          })
        },
        lifeValidate = () => {
          inputs.forEach(input => {
            input.addEventListener('click', () => {
              if (form.getAttribute('data-validate')) {
                const field = input.querySelector('input, textarea')

                field.addEventListener('input', () => validateInput(input))
                checkFields()
              }
            })
          })
        },
        validate = () => {
          let errors = 0

          inputs.forEach(input => {
            const field = input.querySelector('input, textarea')
            if (field.type === 'checkbox') {
              if (!field.checked) {
                input.classList.add('input--error')
                errors += 1
              } else {
                input.classList.remove('input--error')
              }
            } else if (field.type === 'file' && field.hasAttribute('isrequired')) {
              if (!field.files.length) {
                input.classList.add('input--error')
                errors += 1
              } else {
                input.classList.remove('input--error')
              }
            } else if (input.classList.contains('input--error')) {
              errors += 1
            }
          })

          const formBody = form.querySelector('.js-form__body')
          const success = form.querySelector('.js-form-success')
          const error = form.querySelector('.js-form-error')

          const showSuccess = () => {
            formBody.style.display = 'none'
            success.classList.add('visible')
          }

          const showError = () => {
            formBody.style.display = 'none'
            error.classList.add('visible')
          }

          if (errors === 0) {
            const formData = new FormData()
            const formInputs = form.querySelectorAll('input, textarea')
            formInputs.forEach(input => {
              if (input.type === 'checkbox') {
                formData.append(input.name, input.checked)
              } else if (input.type === 'file') {
                const file = input.files[0]
                if (file) {
                  formData.append(input.name, file)
                }
              } else {
                formData.append(input.name, input.value)
              }
            })

            console.table(Object.fromEntries(formData))

            formBody.classList.add('loading')

            setTimeout(() => {
              $.ajax({
                type: 'POST',
                url: form.getAttribute('action') + '?ajax=Y',
                data: formData,
                processData: false,
                contentType: false,
                success: response => {
                  setTimeout(() => {
                    formBody.classList.remove('loading')
                    showSuccess()
                  }, 500)
                },
                error: error => {
                  setTimeout(() => {
                    formBody.classList.remove('loading')
                    showError()
                  }, 500)
                },
              })
            }, 1000)
          }
        }

      lifeValidate()
      checkFields()
      form.setAttribute('data-validate', 'true')
  form.setAttribute('novalidate', '')
      validate()
    })
  })
}