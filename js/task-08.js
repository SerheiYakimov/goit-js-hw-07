'use strict'
// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const refs = {
    input: document.querySelector('#controls > input'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
}

// console.log(refs.input);
// console.log(refs.renderBtn);
// console.log(refs.destroyBtn);
// console.log(refs.boxes);


refs.input.addEventListener('input', onFindInputValue);

function onFindInputValue (amound) {
    console.log(Number(amound.currentTarget.value));
}

refs.renderBtn.addEventListener('click', onCreateBoxes);

function CreateBoxes (amound) {
    const box = document.createElement('div');
    box.style.backgroundColor = `${randomColor()}`;
    box.style.width = '30px';
    box.style.height = '30px';
    refs.boxes.append(box);


}

function randomColor()
{
     const color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';


     return color;
}

