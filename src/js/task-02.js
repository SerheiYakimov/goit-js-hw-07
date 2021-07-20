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
  
console.log(ingredients);
 
const ingredientsList = document.querySelector('#ingredients');

const ingredientsListEl = ingredients.map(element => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = element.value;
});
  
  
    
  
  
  // const potato = document.createElement('li');
  // potato.textContent = 'Картошка';
  
  // const mushrooms = document.createElement('li');
  // mushrooms.textContent = 'Грибы';
  
  // const garlic = document.createElement('li');
  // garlic.textContent = 'Чеснок';
  
  // const tomato = document.createElement('li');
  // tomato.textContent = 'Помидоры';
  
  // const greens = document.createElement('li');
  // greens.textContent = 'Зелень';
  
  // const condiments = document.createElement('li');
  // condiments.textContent = 'Приправы';
  
 
ingredientsList.append(...ingredientsListEl);
  
  console.log(ingredientsList);