const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')
// console.log(ingredients[0])
const ingredientItem1 = document.createElement('li');
ingredientItem1.textContent = ingredients[0];
ingredientItem1.classList.toggle('item')
// console.dir(ingredientItem1);

const ingredientItem2 = document.createElement('li');
ingredientItem2.textContent = ingredients[1];
ingredientItem2.classList.toggle('item')
// console.dir(ingredientItem2);

const ingredientItem3 = document.createElement('li');
ingredientItem3.textContent = ingredients[2];
ingredientItem3.classList.toggle('item')
// console.dir(ingredientItem3);

const ingredientItem4 = document.createElement('li');
ingredientItem4.textContent = ingredients[3];
ingredientItem4.classList.toggle('item')
// console.dir(ingredientItem4);

const ingredientItem5 = document.createElement('li');
ingredientItem5.textContent = ingredients[4];
ingredientItem5.classList.toggle('item')
// console.dir(ingredientItem5);

const ingredientItem6 = document.createElement('li');
ingredientItem6.textContent = ingredients[5];
ingredientItem6.classList.toggle('item')
// console.dir(ingredientItem6);

list.append(ingredientItem1, ingredientItem2, ingredientItem3, ingredientItem4, ingredientItem5, ingredientItem6);
// console.dir(list);



