let uploadBtn = document.querySelector('.in-file-upload-btn'),
    uploadContainer = document.querySelector('.in-file-upload-container'),
    uploadResult = document.querySelector('.in-file-upload-result')

let fileRead = (files) => {
  if (files.length) {
    let file = files[0], reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = (e) => {
      uploadResult.innerHTML = e.target.result
    }
  }
}

uploadBtn.addEventListener('change', (e) => {
  let files = e.target.files

  fileRead(files)
})

uploadContainer.addEventListener('click', () => {
  uploadBtn.click()
}, false)

uploadContainer.addEventListener('dragenter', (e) => {
  e.preventDefault()
  e.stopPropagation()
  
  if (!uploadContainer.contains(e.relatedTarget))
    uploadContainer.classList.add('in-file-upload-dragger')
}, false)

uploadContainer.addEventListener('dragleave', (e) => {
  e.preventDefault()
  e.stopPropagation()

  if (!uploadContainer.contains(e.relatedTarget))
    uploadContainer.classList.remove('in-file-upload-dragger')
}, false)


uploadContainer.addEventListener('dragover', (e) => {
  e.preventDefault()
  e.stopPropagation()
}, false)

uploadContainer.addEventListener('drop', (e) => {
  e.stopPropagation()
  e.preventDefault()

  let files = e.dataTransfer.files

  fileRead(files)
  uploadContainer.classList.remove('in-file-upload-dragger')
})

uploadResult.addEventListener('copy', (e) => {
  e.preventDefault()
  e.clipboardData.setData('Text', uploadResult.innerText)
}, false)

uploadResult.addEventListener('click', (e) => {
  let selection = window.getSelection(),
      range = document.createRange()

  range.selectNode(uploadResult)
  selection.addRange(range)
  document.execCommand('copy')
}, false)