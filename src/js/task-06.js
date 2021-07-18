'use strict'

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const inputName = document.querySelector('#validation-input');

inputName.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    console.log(event.currentTarget.value.length);
if (event.currentTarget.value.length !== inputName.dataset.length) {
    inputName.classList.add('invalid');
}  else {
    inputName.classList.remove('invalid', 'valid');
}

};