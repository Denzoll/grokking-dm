const div = document.createElement('div')
const ul = document.createElement('ul')
const li = document.createElement('li')
const secondli = document.createElement('li')

li.textContent = '<a href="https://instagram.com/intocode">наш инстаграм</a>'
secondli.textContent = '<a href="https://intocode.ru">наш сайт</a>'

div.append(ul)
ul.append(li,secondli)

