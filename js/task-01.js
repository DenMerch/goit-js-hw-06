const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${document.querySelectorAll(".item").length}`);
items.forEach(item => {
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
});