const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const items = "";
ingredients.forEach(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  items += `${item}`;
  console.log(items);
});

