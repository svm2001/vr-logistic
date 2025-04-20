export function inputFile () {
  const files = document.querySelectorAll('.js-input-file')

  if(!files.length) return

  files.forEach(file => {
    const input = file.querySelector('[type="file"]');
    const fileName = file.querySelector('.input-file__file')
    const fileSize = file.querySelector('.input-file__size')
    const allowedFormats = file.getAttribute('data-allowed-file-formats')
    const maxFile = file.getAttribute('data-allowed-file-max-megabyte-size')
    const maxFileSize = maxFile * 1024 * 1024

    fileSize.textContent = `Максимум ${maxFile} мб`

    input.addEventListener('change', (e) => {
      const file = e.target.files[0]
      
      if (!file) return
      
      const fileExtension = file.name.split('.').pop().toLowerCase()
      if (!allowedFormats.includes(fileExtension)) {
        fileSize.textContent = 'Недопустимый формат файла'
        fileSize.classList.add('file-error')
        fileSize.style.display = 'inline'
        input.value = ''
        fileName.textContent = ''
        return
      }
      
      if (file.size > maxFileSize) {
        fileSize.textContent = `Максимальный размер: ${maxFile}мб`
        fileSize.classList.add('file-error')
        fileSize.style.display = 'inline'
        input.value = ''
        fileName.textContent = ''
        return
      }

      let sizeText = ''
      if (file.size >= 1024 * 1024) {
        const mbSize = file.size / (1024 * 1024)
        sizeText = `${mbSize % 1 === 0 ? Math.floor(mbSize) : mbSize.toFixed(1)} мб`
      } else {
        const kbSize = file.size / 1024
        sizeText = `${Math.round(kbSize)} кб`
      }

      fileSize.classList.remove('file-error')
      fileName.style.display = 'inline'
      fileSize.style.display = 'none'
      fileName.textContent = `${file.name} (${sizeText})`
    })
  })
}