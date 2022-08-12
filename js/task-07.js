const inputChange = document.querySelector('input#font-size-control')
const inputChangeStyle = document.querySelector('span#text')

inputChange.addEventListener('input', e => {
    inputChangeStyle.style.fontSize = `${e.target.value}px`
})

// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
