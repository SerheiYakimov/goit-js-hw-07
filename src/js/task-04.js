'use strict'

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса



const counterValue = {
    value: 0,
    increment() {
        
        this.value += 1;
    },

    decrement() {
        
        this.value -= 1;
    },
};

const incrementBtn = document.querySelector(`[data-action="increment"]`);
const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const counterValueEl = document.querySelector(`#value`);


decrementBtn.addEventListener(`click`, function () {
    counterValue.decrement();
    counterValueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener(`click`, function () {
    counterValue.increment();
    counterValueEl.textContent = counterValue.value;
});
    
    






