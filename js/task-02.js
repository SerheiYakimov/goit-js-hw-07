'use strict'

// // Напиши скрипт, который для каждого элемента массива ingredients
//  создаст отдельный li, после чего вставит все li за одну операцию 
//  в список ul.ingredients. 
//  Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
  
const ingredientsList = document.querySelector('#ingredients');

const ingredientsArr = ingredients.map(element => {
  const ingredientsListEl = document.createElement('li');
  ingredientsListEl.textContent = element;
  return ingredientsListEl;
});
  
ingredientsList.append(...ingredientsArr);
  
  console.log(ingredientsList);