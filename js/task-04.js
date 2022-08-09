let counterValue = 0

const displayCounter = document.querySelector('#value')
const buttonDecrement = document.querySelector('button[data-action="decrement"]')
const buttonIncrement = document.querySelector('button[data-action="increment"]')

buttonDecrement.addEventListener('click', () => {
	counterValue--
	displayCounter.textContent = counterValue
})

buttonIncrement.addEventListener('click', () => {
	counterValue++
	displayCounter.textContent = counterValue
})
console.log(displayCounter);









// Задание 4
// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.