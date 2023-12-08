const myInput = document.getElementById('myInput')
const btn = document.getElementById('btn')
const pTag = document.getElementById('pTag')
let text = ''

myInput.addEventListener('change', (e) => {
  text = e.target.value
})

btn.addEventListener('click', () => {
  pTag.innerText = `Text Entered: ${text}`
})