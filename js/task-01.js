const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});
// якщо треба інакше, то я не розумію як.