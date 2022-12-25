function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const color = document.querySelector(".color");
btn.addEventListener("click", changeColor => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
})