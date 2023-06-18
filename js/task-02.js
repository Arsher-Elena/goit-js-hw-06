const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingr = document.querySelector('#ingredients');

const element = ingredients.map( ingredient => {
 const li = document.createElement('li');
 li.textContent = ingredient;
 li.classList.add('item');
 return li
});
console.dir(element)

ingr.append(...element)

console.dir(ingr)

