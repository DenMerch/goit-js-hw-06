const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients")
const markup = ingredients.map((ingredient) => {
  let itemList = document.createElement("li");
  itemList.textContent = ingredient;
  return itemList;
});
list.append(...markup);

