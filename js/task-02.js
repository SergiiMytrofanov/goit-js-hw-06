const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

ingredients.forEach((ingredient) => {
  const ingredientItem = document.createElement('li');

  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');

  list.append(ingredientItem);
}
);


