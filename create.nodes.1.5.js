
const divone = document.createElement('div')
const seconddiv = document.createElement('div')
const thirddiv = document.createElement('div')
divone.className = 'red'
seconddiv.className = 'green'
thirddiv.className = 'blue'

thirddiv.textContent = 'Я вложен'

divone.append(seconddiv)
seconddiv.append(thirddiv)
console.log(divone)