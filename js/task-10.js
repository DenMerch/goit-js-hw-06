function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const container = document.querySelector("#boxes");
input.addEventListener("change", () => {
  return input.value;
});

createBtn.addEventListener("click", () => {
  for (let i = 0; i < input.value; i++) {
    container.insertAdjacentHTML("beforeend",
      `<div style = "width:${30 + 10 * i}px; height:${30 + 10 * i}px; background-color:${getRandomHexColor()}"></div>`);
  }
});
destroyBtn.addEventListener("click", () => {
  container.innerHTML = "";
})