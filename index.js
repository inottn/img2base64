let uploadBtn = document.querySelector('.in-file-upload-btn'),
    uploadContainer = document.querySelector('.in-file-upload-container'),
    uploadResult = document.querySelector('.in-file-upload-result')

uploadBtn.addEventListener('change', (e) => {
  let files = e.target.files

  if (files.length) {
    let file = files[0], reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = (e) => {
      uploadResult.innerHTML = e.target.result
    }
  }
})

uploadContainer.addEventListener('click', () => {
  uploadBtn.click()
})

uploadContainer.addEventListener('dragleave', (e) => {
  e.preventDefault()
  e.stopPropagation()
  uploadContainer.classList.remove('in-file-upload-dragger')
})

uploadContainer.addEventListener('dragover', (e) => {
  e.preventDefault()
  e.stopPropagation()
  uploadContainer.classList.add('in-file-upload-dragger')
}, false);

uploadContainer.addEventListener('drop', (e) => {
  e.stopPropagation()
  e.preventDefault()
  uploadContainer.classList.remove('in-file-upload-dragger')

  let files = e.dataTransfer.files

  if (files.length) {
    let file = files[0], reader = new FileReader()
    
    reader.readAsDataURL(file)
    reader.onload = function(e) {
      uploadResult.innerHTML = e.target.result
    }
  }
})

uploadResult.addEventListener('copy', (e) => {
  e.preventDefault()
  e.clipboardData.setData('Text', uploadResult.innerText)
})

uploadResult.addEventListener('click', (e) => {
  document.execCommand('copy')
})