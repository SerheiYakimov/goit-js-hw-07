'use strict'

// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output'),
}

refs.inputName.addEventListener('input', onInputChange);

function onInputChange (event) {
    console.log(event.currentTarget.value);
    
    if (event.currentTarget.value.trim() === '') {
    refs.outputName.textContent = 'незнакомец';
    }
    else {
        refs.outputName.textContent = event.currentTarget.value;
    };
    
};

